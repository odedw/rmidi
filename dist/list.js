"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInputs = exports.listOutputs = void 0;
const initWebMidi_1 = __importDefault(require("./initWebMidi"));
const webmidi_1 = __importDefault(require("webmidi"));
function listOutputs() {
    initWebMidi_1.default().then(() => {
        webmidi_1.default.outputs.forEach((output) => console.log(output.name));
    });
}
exports.listOutputs = listOutputs;
function listInputs() {
    initWebMidi_1.default().then(() => {
        webmidi_1.default.inputs.forEach((inputs) => console.log(inputs.name));
    });
}
exports.listInputs = listInputs;
//# sourceMappingURL=list.js.map