/*:
 * @plugindesc HUD Skor Sederhana - Menampilkan skor pemain di layar atas kiri (Variabel #1)
 * @author ChatGPT
 * @target MZ
 * @help
 * Plugin ini akan menampilkan skor pemain (Variabel ID 1) di pojok kiri atas layar.
 * 
 * Tidak ada pengaturan tambahan. Cukup aktifkan plugin ini.
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
})();