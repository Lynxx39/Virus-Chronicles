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


    // Force Touch UI to always be active on mobile devices (prevents players from getting stuck without a menu button)
    // On desktop, disabling Touch UI also disables map touch movement (preventing accidental walking on window focus)
    if (typeof ConfigManager !== "undefined") {
        Object.defineProperty(ConfigManager, "touchUI", {
            get: function() {
                if (typeof Utils !== "undefined" && Utils.isMobileDevice()) {
                    return true;
                }
                return this._touchUI !== undefined ? this._touchUI : true;
            },
            set: function(value) {
                this._touchUI = value;
            },
            configurable: true
        });
    }

    // Hide the "Touch UI" option from the Options window on mobile devices to prevent players from turning it off and getting stuck
    if (typeof Window_Options !== "undefined") {
        Window_Options.prototype.addGeneralOptions = function() {
            this.addCommand(TextManager.alwaysDash, "alwaysDash");
            this.addCommand(TextManager.commandRemember, "commandRemember");
            if (typeof Utils !== "undefined" && !Utils.isMobileDevice()) {
                this.addCommand(TextManager.touchUI, "touchUI");
            }
        };
    }

    if (typeof Scene_Map !== "undefined") {
        const _Scene_Map_isMapTouchOk = Scene_Map.prototype.isMapTouchOk;
        Scene_Map.prototype.isMapTouchOk = function() {
            return _Scene_Map_isMapTouchOk.call(this) && ConfigManager.touchUI;
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

        // Click / Touch Action
        const toggleFS = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof Graphics !== "undefined") {
                Graphics._switchFullScreen();
            }
        };
        btn.addEventListener("click", toggleFS);
        btn.addEventListener("touchstart", (e) => {
            btn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            toggleFS(e);
        });
        btn.addEventListener("touchend", (e) => {
            e.stopPropagation();
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

    // Show iOS Fullscreen Guide modal
    function showIosFullscreenGuide() {
        let modal = document.getElementById("iosFullscreenGuideModal");
        if (modal) {
            modal.style.display = modal.style.display === "none" ? "flex" : "none";
            return;
        }

        modal = document.createElement("div");
        modal.id = "iosFullscreenGuideModal";
        modal.style.position = "fixed";
        modal.style.inset = "0";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
        modal.style.zIndex = "2000";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.padding = "20px";
        modal.style.color = "#ffffff";
        modal.style.fontFamily = "sans-serif";
        modal.style.textAlign = "center";

        const contentBox = document.createElement("div");
        contentBox.style.backgroundColor = "#2c1c0c";
        contentBox.style.border = "3px solid #ffe45c";
        contentBox.style.borderRadius = "16px";
        contentBox.style.padding = "20px";
        contentBox.style.maxWidth = "400px";
        contentBox.style.width = "90%";
        contentBox.style.boxShadow = "0 8px 24px rgba(0,0,0,0.6)";

        contentBox.innerHTML = `
            <h3 style="margin-top: 0; color: #ffe45c; font-size: 18px;">📱 Cara Fullscreen di iPhone</h3>
            <p style="font-size: 14px; line-height: 1.6; text-align: justify; margin: 15px 0;">
                Apple membatasi layar penuh pada browser iPhone. Untuk bermain dengan layar penuh tanpa terpotong batas browser:
            </p>
            <ol style="font-size: 13px; line-height: 1.6; text-align: left; padding-left: 20px; margin-bottom: 20px;">
                <li style="margin-bottom: 8px;">Tekan tombol <strong>Share / Bagikan</strong> (ikon <span style="font-size:16px;">⎋</span> atau kotak dengan panah atas) di bagian bawah Safari.</li>
                <li style="margin-bottom: 8px;">Scroll ke bawah dan pilih menu <strong>'Tambahkan ke Layar Utama'</strong> (Add to Home Screen).</li>
                <li style="margin-bottom: 8px;">Buka game dari ikon baru di Home Screen HP Anda.</li>
            </ol>
            <button id="closeIosGuideBtn" style="padding: 8px 20px; border-radius: 10px; border: 2px solid #7a3e12; font-weight: bold; background: linear-gradient(#ffe45c,#ffb700); color: #7a3e12; cursor: pointer;">Mengerti</button>
        `;

        modal.appendChild(contentBox);
        document.body.appendChild(modal);

        // Prevent events from bubbling to RPG Maker's TouchInput handlers
        const stopBubble = (e) => {
            e.stopPropagation();
        };
        modal.addEventListener("touchstart", stopBubble, { passive: true });
        modal.addEventListener("touchmove", stopBubble, { passive: true });
        modal.addEventListener("touchend", stopBubble);
        modal.addEventListener("mousedown", stopBubble);
        modal.addEventListener("mouseup", stopBubble);
        modal.addEventListener("click", stopBubble);

        const closeBtn = modal.querySelector("#closeIosGuideBtn");
        const closeAction = (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.style.display = "none";
        };
        closeBtn.addEventListener("click", closeAction);
        closeBtn.addEventListener("touchstart", closeAction);
    }

    // Create floating help button for iOS devices
    function createIosFullscreenButton() {
        if (document.getElementById("mobileIosFullscreenBtn")) return;

        const btn = document.createElement("div");
        btn.id = "mobileIosFullscreenBtn";
        
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

        const infoIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
        btn.innerHTML = infoIcon;

        const handleIosGuide = (e) => {
            e.preventDefault();
            e.stopPropagation();
            showIosFullscreenGuide();
        };
        btn.addEventListener("click", handleIosGuide);
        btn.addEventListener("touchstart", (e) => {
            btn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            handleIosGuide(e);
        });
        btn.addEventListener("touchend", (e) => {
            e.stopPropagation();
            btn.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        });

        document.body.appendChild(btn);
    }

    // Initialize button on mobile devices
    window.addEventListener("load", () => {
        const hasFullscreenSupport = !!(
            document.documentElement.requestFullscreen ||
            document.documentElement.webkitRequestFullscreen ||
            document.documentElement.mozRequestFullScreen ||
            document.documentElement.msRequestFullscreen
        );
        if (Utils.isMobileDevice()) {
            if (hasFullscreenSupport) {
                createFullscreenButton();
            } else {
                const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
                if (!isStandalone) {
                    createIosFullscreenButton();
                }
            }
        }
    });
})();
