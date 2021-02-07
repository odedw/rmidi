"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
const webmidi_1 = __importDefault(require("webmidi"));
const initWebMidi_1 = __importDefault(require("./initWebMidi"));
class Output {
    constructor(name) {
        this.midiOutput = webmidi_1.default.outputs.find((i) => i.name === name);
    }
    static create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield initWebMidi_1.default();
            return new Output(name);
        });
    }
    sendNote() {
        var _a;
        (_a = this.midiOutput) === null || _a === void 0 ? void 0 : _a.playNote("C4", 1, {
        // duration: 200,
        });
    }
    noteOff() {
        var _a;
        (_a = this.midiOutput) === null || _a === void 0 ? void 0 : _a.stopNote("C4", 1);
    }
    panic() {
        var _a, _b;
        (_a = this.midiOutput) === null || _a === void 0 ? void 0 : _a.sendReset();
        (_b = this.midiOutput) === null || _b === void 0 ? void 0 : _b.stopNote("C4");
    }
}
exports.Output = Output;
//# sourceMappingURL=Output.js.map