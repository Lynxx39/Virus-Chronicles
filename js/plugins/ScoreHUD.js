/*:
 * @plugindesc HUD Skor Sederhana, Kontrol Pilihan, Analog Touch & WASD - Menampilkan skor, menonaktifkan pembatalan pilihan, analog virtual, dan pergerakan WASD.
 * @author ChatGPT & Antigravity
 * @target MZ
 * @help
 * Plugin ini akan menampilkan skor pemain (Variabel ID 1) di pojok kiri atas layar seperti semula.
 * Tombol ESC / pembatalan dinonaktifkan pada pilihan agar soal tidak terlewat/selesai tanpa poin.
 * Menambahkan Analog Virtual di pojok kiri bawah layar agar mempermudah navigasi karakter di mobile/touch.
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
  // VIRTUAL JOYSTICK / ANALOG CONTROLLER SYSTEM
  // ==========================================
  
  let joystickActive = false;
  let joystickStartX = 0;
  let joystickStartY = 0;
  let joystickDirection = 0;

  function createJoystick() {
    if (document.getElementById("virtual-joystick-container")) return;

    // Membuat container luar joystick
    const container = document.createElement("div");
    container.id = "virtual-joystick-container";
    container.style.position = "absolute";
    container.style.bottom = "40px";
    container.style.left = "40px";
    container.style.width = "110px";
    container.style.height = "110px";
    container.style.borderRadius = "50%";
    container.style.background = "rgba(0, 0, 0, 0.4)";
    container.style.backdropFilter = "blur(4px)";
    container.style.border = "3px solid rgba(255, 255, 255, 0.4)";
    container.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.37)";
    container.style.zIndex = "999";
    container.style.touchAction = "none";

    // Membuat gagang (handle) joystick di tengah
    const handle = document.createElement("div");
    handle.id = "virtual-joystick-handle";
    handle.style.position = "absolute";
    handle.style.width = "46px";
    handle.style.height = "46px";
    handle.style.borderRadius = "50%";
    handle.style.background = "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(200,200,200,0.5))";
    handle.style.border = "2px solid rgba(255, 255, 255, 0.8)";
    handle.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
    handle.style.top = "29px";
    handle.style.left = "29px";
    handle.style.pointerEvents = "none";
    handle.style.transition = "transform 0.05s ease-out";

    container.appendChild(handle);
    document.body.appendChild(container);

    const maxRadius = 35; // Jarak seret maksimal handle dari titik pusat

    function handleStart(clientX, clientY) {
      joystickActive = true;
      const rect = container.getBoundingClientRect();
      joystickStartX = rect.left + rect.width / 2;
      joystickStartY = rect.top + rect.height / 2;
      handleMove(clientX, clientY);
    }

    function handleMove(clientX, clientY) {
      if (!joystickActive) return;
      
      const dx = clientX - joystickStartX;
      const dy = clientY - joystickStartY;
      const distance = Math.hypot(dx, dy);
      
      let angle = Math.atan2(dy, dx);
      let posX = dx;
      let posY = dy;
      
      if (distance > maxRadius) {
        posX = Math.cos(angle) * maxRadius;
        posY = Math.sin(angle) * maxRadius;
      }
      
      handle.style.transform = `translate(${posX}px, ${posY}px)`;
      
      // Konversi gerakan ke 4 Arah RPG Maker (2: Down, 4: Left, 6: Right, 8: Up)
      if (distance > 12) {
        const deg = (angle * 180) / Math.PI;
        if (deg >= -45 && deg < 45) {
          joystickDirection = 6; // Kanan
        } else if (deg >= 45 && deg < 135) {
          joystickDirection = 2; // Bawah
        } else if (deg >= -135 && deg < -45) {
          joystickDirection = 8; // Atas
        } else {
          joystickDirection = 4; // Kiri
        }
      } else {
        joystickDirection = 0; // Diam
      }
    }

    function handleEnd() {
      joystickActive = false;
      handle.style.transform = "translate(0px, 0px)";
      joystickDirection = 0;
    }

    // Touch Event (Mobile)
    container.addEventListener("touchstart", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches[0];
      handleStart(touch.clientX, touch.clientY);
    });

    window.addEventListener("touchmove", (e) => {
      if (!joystickActive) return;
      e.preventDefault();
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    }, { passive: false });

    window.addEventListener("touchend", (e) => {
      if (joystickActive) {
        e.preventDefault();
        handleEnd();
      }
    });

    // Mouse Event (Desktop testing)
    container.addEventListener("mousedown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleStart(e.clientX, e.clientY);
    });

    window.addEventListener("mousemove", (e) => {
      if (joystickActive) {
        handleMove(e.clientX, e.clientY);
      }
    });

    window.addEventListener("mouseup", () => {
      if (joystickActive) {
        handleEnd();
      }
    });
  }

  function removeJoystick() {
    const container = document.getElementById("virtual-joystick-container");
    if (container) {
      container.remove();
    }
  }

  // Integrasikan pembuatan analog ke Scene_Map
  const _Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function() {
    _Scene_Map_start.call(this);
    createJoystick();
  };

  const _Scene_Map_terminate = Scene_Map.prototype.terminate;
  Scene_Map.prototype.terminate = function() {
    _Scene_Map_terminate.call(this);
    removeJoystick();
  };

  // Override input arah agar merespons analog virtual
  const _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
  Game_Player.prototype.getInputDirection = function() {
    if (joystickDirection > 0) {
      return joystickDirection;
    }
    return _Game_Player_getInputDirection.call(this);
  };
})();