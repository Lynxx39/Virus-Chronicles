/*:
 * @plugindesc HUD Skor Sederhana, Kontrol Pilihan, D-pad Touch & WASD - Menampilkan skor, menonaktifkan pembatalan pilihan, D-pad virtual, dan pergerakan WASD.
 * @author ChatGPT & Antigravity
 * @target MZ
 * @help
 * Plugin ini akan menampilkan skor pemain (Variabel ID 1) di pojok kiri atas layar seperti semula.
 * Tombol ESC / pembatalan dinonaktifkan pada pilihan agar soal tidak terlewat/selesai tanpa poin.
 * Menambahkan D-pad Virtual (Cross Layout) di pojok kiri bawah layar agar mempermudah navigasi karakter di mobile/touch.
 * Menambahkan dukungan keyboard WASD untuk bergerak.
 */

(() => {
  // Membuat jendela skor
  class Window_ScoreHUD extends Window_Base {
    initialize() {
      const width = 200;
      const height = this.fittingHeight(1);
      const rect = new Rectangle(10, 10, width, height);
      super.initialize(rect);
      this.opacity = 160; // transparansi
      this.refresh();
    }

    refresh() {
      this.contents.clear();
      const score = $gameVariables.value(1); // Variabel ID 1 = skor
      this.drawText(`Skor: ${score}`, 0, 0, this.width - 20, 'left');
    }

    update() {
      super.update();
      this.refresh();
    }
  }

  // Tambahkan ke Scene_Map
  const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
  Scene_Map.prototype.createAllWindows = function () {
    _Scene_Map_createAllWindows.call(this);
    this._scoreHUD = new Window_ScoreHUD();
    this.addWindow(this._scoreHUD);
  };

  // Menonaktifkan pembatalan pilihan (ESC / klik luar / tombol cancel)
  Window_ChoiceList.prototype.isCancelEnabled = function() {
    return false;
  };

  Window_ChoiceList.prototype.needsCancelButton = function() {
    return false;
  };

  // Membuat jendela dialog lebih tinggi (6 baris) agar memuat teks deskripsi soal yang panjang dalam 1 kotak
  Window_Message.prototype.numVisibleRows = function() {
    return 6;
  };

  // ==========================================
  // PEMETAAN KEYBOARD WASD
  // ==========================================
  Input.keyMapper[87] = "up";     // Tombol W
  Input.keyMapper[65] = "left";   // Tombol A
  Input.keyMapper[83] = "down";   // Tombol S
  Input.keyMapper[68] = "right";  // Tombol D

  // ==========================================
  // VIRTUAL D-PAD (CROSS CONTROLLER) SYSTEM
  // ==========================================
  
  let joystickDirection = 0;
  let activeDir = 0;

  function createDpad() {
    if (document.getElementById("virtual-dpad-container")) return;

    // Membuat container utama D-pad
    const container = document.createElement("div");
    container.id = "virtual-dpad-container";
    container.style.position = "absolute";
    container.style.bottom = "40px";
    container.style.left = "40px";
    container.style.width = "120px";
    container.style.height = "120px";
    container.style.zIndex = "999";
    container.style.touchAction = "none";

    // Tombol-tombol D-pad (Atas, Bawah, Kiri, Kanan)
    const buttons = {
      8: { top: "0px", left: "40px", symbol: "▲", radius: "8px 8px 0 0", borderNo: "bottom" },
      2: { top: "80px", left: "40px", symbol: "▼", radius: "0 0 8px 8px", borderNo: "top" },
      4: { top: "40px", left: "0px", symbol: "◀", radius: "8px 0 0 8px", borderNo: "right" },
      6: { top: "40px", left: "80px", symbol: "▶", radius: "0 8px 8px 0", borderNo: "left" }
    };

    const btnElements = {};

    // Center pad (menghubungkan tombol menjadi bentuk cross/salib yang utuh)
    const center = document.createElement("div");
    center.style.position = "absolute";
    center.style.width = "40px";
    center.style.height = "40px";
    center.style.top = "40px";
    center.style.left = "40px";
    center.style.background = "rgba(0, 0, 0, 0.45)";
    center.style.backdropFilter = "blur(4px)";
    center.style.zIndex = "998";
    container.appendChild(center);

    for (const [dir, info] of Object.entries(buttons)) {
      const btn = document.createElement("div");
      btn.className = "dpad-btn";
      btn.dataset.dir = dir;
      btn.style.position = "absolute";
      btn.style.width = "40px";
      btn.style.height = "40px";
      btn.style.top = info.top;
      btn.style.left = info.left;
      btn.style.borderRadius = info.radius;
      btn.style.background = "rgba(0, 0, 0, 0.45)";
      btn.style.backdropFilter = "blur(4px)";
      
      // Memberi border luar saja agar membentuk salib/cross solid
      btn.style.border = "2px solid rgba(255, 255, 255, 0.35)";
      if (info.borderNo === "bottom") btn.style.borderBottom = "none";
      if (info.borderNo === "top") btn.style.borderTop = "none";
      if (info.borderNo === "left") btn.style.borderLeft = "none";
      if (info.borderNo === "right") btn.style.borderRight = "none";
      
      btn.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.25)";
      btn.style.color = "rgba(255, 255, 255, 0.8)";
      btn.style.fontSize = "18px";
      btn.style.display = "flex";
      btn.style.justifyContent = "center";
      btn.style.alignItems = "center";
      btn.style.userSelect = "none";
      btn.style.zIndex = "999";
      btn.style.transition = "background-color 0.1s, transform 0.1s, border-color 0.1s";
      btn.innerText = info.symbol;

      container.appendChild(btn);
      btnElements[dir] = btn;
    }

    document.body.appendChild(container);

    function setDirection(dir) {
      activeDir = dir;
      joystickDirection = dir;
      
      // Update visual tombol aktif
      for (const [d, btn] of Object.entries(btnElements)) {
        if (parseInt(d) === dir) {
          btn.style.background = "rgba(255, 255, 255, 0.35)";
          btn.style.borderColor = "rgba(255, 255, 255, 0.8)";
          btn.style.color = "#fff";
          btn.style.transform = "scale(0.92)";
        } else {
          btn.style.background = "rgba(0, 0, 0, 0.45)";
          btn.style.borderColor = "rgba(255, 255, 255, 0.35)";
          btn.style.color = "rgba(255, 255, 255, 0.8)";
          btn.style.transform = "scale(1)";
        }
      }
    }

    function handleStart(e, dir) {
      e.preventDefault();
      e.stopPropagation();
      setDirection(dir);
    }

    function handleMove(e) {
      if (activeDir === 0) return;
      e.preventDefault();
      const touch = e.touches ? e.touches[0] : e;
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      if (element && element.classList.contains("dpad-btn")) {
        const dir = parseInt(element.dataset.dir);
        if (dir !== activeDir) {
          setDirection(dir);
        }
      } else {
        setDirection(0);
      }
    }

    function handleEnd(e) {
      if (activeDir !== 0) {
        e.preventDefault();
        handleEndAction();
      }
    }

    function handleEndAction() {
      setDirection(0);
    }

    // Bind event untuk masing-masing tombol
    for (const [dirStr, btn] of Object.entries(btnElements)) {
      const dir = parseInt(dirStr);
      
      // Mulai tekan
      btn.addEventListener("touchstart", (e) => handleStart(e, dir));
      btn.addEventListener("mousedown", (e) => handleStart(e, dir));
    }

    // Pindah jari (sliding) dan lepas tekan
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("mousemove", (e) => {
      if (e.buttons > 0 && activeDir !== 0) {
        handleMove(e);
      }
    });

    window.addEventListener("touchend", handleEnd);
    window.addEventListener("mouseup", handleEnd);
  }

  function removeDpad() {
    const container = document.getElementById("virtual-dpad-container");
    if (container) {
      container.remove();
    }
  }

  // Integrasikan pembuatan D-pad ke Scene_Map
  const _Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function() {
    _Scene_Map_start.call(this);
    createDpad();
  };

  const _Scene_Map_terminate = Scene_Map.prototype.terminate;
  Scene_Map.prototype.terminate = function() {
    _Scene_Map_terminate.call(this);
    removeDpad();
  };

  // Override input arah agar merespons D-pad virtual
  const _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
  Game_Player.prototype.getInputDirection = function() {
    if (joystickDirection > 0) {
      return joystickDirection;
    }
    return _Game_Player_getInputDirection.call(this);
  };
})();