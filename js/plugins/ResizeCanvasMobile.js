/*:
 * @target MZ
 * @plugindesc Auto resize canvas for mobile landscape (no stretch)
 * @author You
 */

(() => {
    // Override stretch height to use 100% height when in Fullscreen or PWA standalone mode
    if (typeof Graphics !== "undefined") {
        Graphics._stretchHeight = function() {
            if (Utils.isMobileDevice()) {
                const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
                const rate = (Utils.isLocal() || this._isFullScreen() || isStandalone) ? 1.0 : 0.9;
                return document.documentElement.clientHeight * rate;
            } else {
                return window.innerHeight;
            }
        };
    }

    // Auto request fullscreen on first touch for mobile devices
    function enableFullScreenOnTouch() {
        const request = () => {
            if (typeof Graphics !== "undefined" && !Graphics._isFullScreen()) {
                Graphics._requestFullScreen();
            }
        };
        document.addEventListener("touchstart", request, { once: true });
        document.addEventListener("click", request, { once: true });
    }

    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) {
        enableFullScreenOnTouch();
    }

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
