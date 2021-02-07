"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatch = void 0;
const isMatch = (e, note, channel) => {
    return ((channel === 'all' || channel.toString() === e.channel.toString()) &&
        (!note || note === `${e.note.name}${e.note.octave}`));
};
exports.isMatch = isMatch;
//# sourceMappingURL=MidiUtils.js.map