//=============================================================================
// RPG Maker MZ - AutoMessageWrap.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Auto-wraps dialogue text to fill the entire message window cleanly (max 75 chars).
 * @author Antigravity
 *
 * @help AutoMessageWrap.js
 *
 * This plugin automatically joins short broken lines in dialogue messages
 * and word-wraps text across the full width of the message window (~75 chars per line).
 */

(() => {
    const MAX_LINE_CHARS = 80;

    const _Window_Message_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function () {
        this.autoWrapGameMessage();
        _Window_Message_startMessage.call(this);
    };

    Window_Message.prototype.autoWrapGameMessage = function () {
        if (!$gameMessage || !$gameMessage._texts || $gameMessage._texts.length === 0) return;

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

        for (const item of items) {
            if (item.isHeader) {
                newTexts.push(item.text);
                continue;
            }

            const words = item.text.split(/\s+/);
            let currentLine = "";

            for (const word of words) {
                if (!word) continue;
                if (!currentLine) {
                    currentLine = word;
                } else if ((currentLine + " " + word).length <= MAX_LINE_CHARS) {
                    currentLine += " " + word;
                } else {
                    newTexts.push(currentLine);
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
