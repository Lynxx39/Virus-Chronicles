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

    // Create floating fullscreen button for mobile devices
    function createFullscreenButton() {
        if (document.getElementById("mobileFullscreenBtn")) return;

        const btn = document.createElement("div");
        btn.id = "mobileFullscreenBtn";
        
        // Styling
        btn.style.position = "fixed";
        btn.style.top = "15px";
        btn.style.left = "15px";
        btn.style.zIndex = "1000";
        btn.style.width = "42px";
        btn.style.height = "42px";
        btn.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        btn.style.border = "1.5px solid rgba(255, 255, 255, 0.4)";
        btn.style.borderRadius = "50%";
        btn.style.display = "flex";
        btn.style.alignItems = "center";
        btn.style.justifyContent = "center";
        btn.style.cursor = "pointer";
        btn.style.color = "#ffffff";
        btn.style.userSelect = "none";
        btn.style.webkitUserSelect = "none";
        btn.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.4)";
        btn.style.transition = "background-color 0.2s, border-color 0.2s";

        // SVG Icons
        const enterFSIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
        const exitFSIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6m10-6h-6v6M4 10h6V4m10 6h-6V4"/></svg>';

        btn.innerHTML = enterFSIcon;

        // Click Action
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (typeof Graphics !== "undefined") {
                Graphics._switchFullScreen();
            }
        });

        // Hover / Active states
        btn.addEventListener("touchstart", () => {
            btn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        });
        btn.addEventListener("touchend", () => {
            btn.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        });

        document.body.appendChild(btn);

        // Sync icon on fullscreen change
        function updateIcon() {
            const isFS = typeof Graphics !== "undefined" && Graphics._isFullScreen();
            btn.innerHTML = isFS ? exitFSIcon : enterFSIcon;
            // Hide button if running in standalone PWA since it's already full screen
            const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
            if (isStandalone) {
                btn.style.display = "none";
            } else {
                btn.style.display = "flex";
            }
        }

        document.addEventListener("fullscreenchange", updateIcon);
        document.addEventListener("webkitfullscreenchange", updateIcon);
        document.addEventListener("mozfullscreenchange", updateIcon);
        document.addEventListener("MSFullscreenChange", updateIcon);
        
        updateIcon();
    }

    // Initialize button on mobile devices
    window.addEventListener("load", () => {
        if (Utils.isMobileDevice()) {
            createFullscreenButton();
        }
    });

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
