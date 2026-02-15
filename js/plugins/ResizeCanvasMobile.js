/*:
 * @target MZ
 * @plugindesc Auto resize canvas for mobile landscape (no stretch)
 * @author You
 */

(() => {
    function resizeCanvas() {
        const canvas = document.getElementById("gameCanvas");
        if (!canvas) return;

        const baseWidth = 1280;
        const baseHeight = 720;

        const scale = Math.min(
            window.innerWidth / baseWidth,
            window.innerHeight / baseHeight
        );

        canvas.style.width = baseWidth * scale + "px";
        canvas.style.height = baseHeight * scale + "px";
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    setTimeout(resizeCanvas, 1000);
})();
