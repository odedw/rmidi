var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import WebMidi from 'webmidi';
import { EventSubjectRepository } from './EventSubjectRepository';
import { filter, bufferCount, pairwise, map } from 'rxjs/operators';
import { isMatch } from './MidiUtils';
import * as log from 'loglevel';
import init from './initWebMidi';
var MidiEventEmitter = /** @class */ (function () {
    function MidiEventEmitter() {
    }
    MidiEventEmitter.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, midiInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, init()];
                    case 1:
                        _a.sent();
                        input = 'loopMIDI Port';
                        midiInput = WebMidi.inputs.find(function (i) { return i.name === input; });
                        if (!midiInput) {
                            log.error("MIDI input '" + input + "' was not found");
                            return [2 /*return*/];
                        }
                        midiInput.addListener('noteon', 'all', function (e) {
                            log.debug("channel: " + e.channel + ", note: " + e.note.name + e.note.octave);
                            EventSubjectRepository.subjectFor(MidiEventEmitter.NOTE_ON_EVENT).next(e);
                        });
                        midiInput.addListener('controlchange', 'all', function (e) {
                            EventSubjectRepository.subjectFor(MidiEventEmitter.CONTROL_CHANGE_EVENT).next(e);
                        });
                        midiInput.addListener('clock', 'all', function (e) {
                            EventSubjectRepository.subjectFor(MidiEventEmitter.CLOCK_EVENT).next(e);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MidiEventEmitter.noteOn = function (note, channel) {
        if (note === void 0) { note = ''; }
        if (channel === void 0) { channel = 'all'; }
        return EventSubjectRepository.subjectFor(MidiEventEmitter.NOTE_ON_EVENT).pipe(filter(function (e) { return isMatch(e, note, channel); }));
    };
    MidiEventEmitter.cc = function (ccNumber, channel) {
        if (channel === void 0) { channel = 'all'; }
        return EventSubjectRepository.subjectFor(MidiEventEmitter.CONTROL_CHANGE_EVENT).pipe(filter(function (e) {
            return (channel === 'all' || e.channel === channel) && e.controller.number === ccNumber;
        }));
    };
    MidiEventEmitter.ccTriger = function (ccNumber, threshold, channel) {
        if (threshold === void 0) { threshold = 1; }
        if (channel === void 0) { channel = 'all'; }
        return EventSubjectRepository.subjectFor(MidiEventEmitter.CONTROL_CHANGE_EVENT).pipe(filter(function (e) {
            return (channel === 'all' || e.channel === channel) && e.controller.number === ccNumber;
        }), pairwise(), filter(function (pair) {
            return pair[0].value < threshold && pair[1].value >= threshold;
        }), map(function () { return true; }));
    };
    MidiEventEmitter.ccBind = function (ccNumber, key, t, factor, channel) {
        if (factor === void 0) { factor = 1; }
        if (channel === void 0) { channel = 'all'; }
        return MidiEventEmitter.cc(ccNumber, channel).subscribe(function (e) {
            // log.info(`${key} = ${e.value}`);
            //@ts-ignore
            t[key] = e.value * factor;
        });
    };
    MidiEventEmitter.clock = function (division) {
        if (division === void 0) { division = 1; }
        return EventSubjectRepository.subjectFor(MidiEventEmitter.CLOCK_EVENT).pipe(bufferCount(division));
    };
    MidiEventEmitter.NOTE_ON_EVENT = 'MidiEventEmitter.NOTE_ON_EVENT';
    MidiEventEmitter.CONTROL_CHANGE_EVENT = 'MidiEventEmitter.CONTROL_CHANGE_EVENT';
    MidiEventEmitter.CLOCK_EVENT = 'MidiEventEmitter.CLOCK_EVENT';
    return MidiEventEmitter;
}());
export { MidiEventEmitter };
//# sourceMappingURL=MidiEventEmitter.js.map