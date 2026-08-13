//=============================================================================
// RPG Maker MZ - AutoMessageWrap.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Auto-wraps dialogue text to fill the entire message window width.
 * @author Antigravity
 *
 * @help AutoMessageWrap.js
 *
 * This plugin automatically joins short broken lines in dialogue messages
 * and word-wraps text across the full width of the message window (1280px resolution).
 */

(() => {
    const _Window_Message_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function() {
        this.autoWrapGameMessage();
        _Window_Message_startMessage.call(this);
    };

    Window_Message.prototype.autoWrapGameMessage = function() {
        if (!$gameMessage || !$gameMessage._texts || $gameMessage._texts.length === 0) return;

        const faceExists = $gameMessage.faceName() !== "";
        const faceWidth = ImageManager.faceWidth || 144;
        const padding = this.padding || 12;
        const faceMargin = faceExists ? faceWidth + 20 : 4;
        const availableWidth = (this.innerWidth || (Graphics.width - padding * 2)) - faceMargin - 16;

        const rawTexts = [...$gameMessage._texts];
        let items = [];
        let currentPara = [];

        for (let i = 0; i < rawTexts.length; i++) {
            let line = rawTexts[i] || "";
            line = line.trim();
            if (!line) continue;

            if (line.startsWith("[Indikator:") || line.startsWith("Alasan jawaban")) {
                if (currentPara.length > 0) {
                    items.push({ text: currentPara.join(" "), isHeader: false });
                    currentPara = [];
                }
                items.push({ text: line, isHeader: true });
            } else {
                currentPara.push(line);
            }
        }
        if (currentPara.length > 0) {
            items.push({ text: currentPara.join(" "), isHeader: false });
        }

        let newTexts = [];
        const measure = (str) => {
            if (this.contents && this.contents.measureTextWidth) {
                // Strip escape codes for width measurement
                const cleanStr = str.replace(/\\c\[\d+\]|\\n\[\d+\]|\\v\[\d+\]|\\i\[\d+\]/gi, "");
                return this.contents.measureTextWidth(cleanStr);
            }
            return str.length * 11;
        };

        for (const item of items) {
            if (item.isHeader) {
                newTexts.push(item.text);
                continue;
            }

            const words = item.text.split(/\s+/);
            let currentLine = "";

            for (const word of words) {
                if (!word) continue;
                const testLine = currentLine ? currentLine + " " + word : word;
                if (measure(testLine) <= availableWidth) {
                    currentLine = testLine;
                } else {
                    if (currentLine) newTexts.push(currentLine);
                    currentLine = word;
                }
            }
            if (currentLine) {
                newTexts.push(currentLine);
            }
        }

        if (newTexts.length > 0) {
            $gameMessage._texts = newTexts;
        }
    };
})();
