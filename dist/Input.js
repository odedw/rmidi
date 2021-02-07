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
exports.Input = void 0;
const initWebMidi_1 = __importDefault(require("./initWebMidi"));
const webmidi_1 = __importDefault(require("webmidi"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const MidiUtils_1 = require("./MidiUtils");
class Input {
    constructor(name) {
        this.subjects = {
            noteOn: new rxjs_1.Subject(),
            cc: new rxjs_1.Subject(),
            clock: new rxjs_1.Subject(),
        };
        const i = webmidi_1.default.inputs.find((i) => i.name === name);
        if (!i) {
            // log.error(`MIDI input '${name}' was not found`);
            return;
        }
        this.midiInput = i;
        this.midiInput.addListener("noteon", "all", (e) => {
            // log.debug(`channel: ${e.channel}, note: ${e.note.name}${e.note.octave}`);
            this.subjects.noteOn.next(e);
        });
        this.midiInput.addListener("controlchange", "all", (e) => {
            this.subjects.cc.next(e);
        });
        this.midiInput.addListener("clock", "all", (e) => {
            this.subjects.clock.next(e);
        });
    }
    static create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield initWebMidi_1.default();
            return new Input(name);
        });
    }
    noteOn(note = "", channel = "all") {
        return this.subjects.noteOn.pipe(operators_1.filter((e) => MidiUtils_1.isMatch(e, note, channel)));
    }
    cc(ccNumber, channel = "all") {
        return this.subjects.cc.pipe(operators_1.filter((e) => {
            return ((channel === "all" || e.channel === channel) &&
                e.controller.number === ccNumber);
        }));
    }
    ccTriger(ccNumber, threshold = 1, channel = "all") {
        return this.subjects.cc.pipe(operators_1.filter((e) => {
            return ((channel === "all" || e.channel === channel) &&
                e.controller.number === ccNumber);
        }), operators_1.pairwise(), operators_1.filter((pair) => {
            return pair[0].value < threshold && pair[1].value >= threshold;
        }), operators_1.map(() => true));
    }
    ccBind(ccNumber, key, t, min = 0, max = 127, channel = "all") {
        return this.cc(ccNumber, channel).subscribe((e) => {
            // log.info(`${key} = ${e.value}`);
            const unit = (max - min) / 127;
            //@ts-ignore
            t[key] = min + unit * e.value;
        });
    }
    clock(division = 1) {
        return this.subjects.clock.pipe(operators_1.bufferCount(division));
    }
}
exports.Input = Input;
//# sourceMappingURL=Input.js.map