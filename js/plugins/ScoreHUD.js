/*:
 * @plugindesc HUD Skor Sederhana & Kontrol Pilihan - Menampilkan skor pemain di layar atas kiri (Variabel #1) dan menonaktifkan pembatalan pilihan.
 * @author ChatGPT
 * @target MZ
 * @help
 * Plugin ini akan menampilkan skor pemain (Variabel ID 1) di pojok kiri atas layar seperti semula.
 * Tombol ESC / pembatalan dinonaktifkan pada pilihan agar soal tidak terlewat/selesai tanpa poin.
 */

(() => {
  // Membuat jendela skor (kembali seperti semula)
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
})();