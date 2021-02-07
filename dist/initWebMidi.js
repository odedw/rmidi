"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webmidi_1 = __importDefault(require("webmidi"));
function init() {
    return new Promise((resolve, reject) => {
        webmidi_1.default.enable((err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}
exports.default = init;
//# sourceMappingURL=initWebMidi.js.map