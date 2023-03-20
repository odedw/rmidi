"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/webmidi/dist/esm/webmidi.esm.min.js
  var e, t, n, r, s, i, a, o, l, c, h, d;
  var init_webmidi_esm_min = __esm({
    "node_modules/webmidi/dist/esm/webmidi.esm.min.js"() {
      e = class {
        constructor(e2 = false) {
          this.eventMap = {}, this.eventsSuspended = 1 == e2;
        }
        addListener(n2, r2, s2 = {}) {
          if ("string" == typeof n2 && n2.length < 1 || n2 instanceof String && n2.length < 1 || "string" != typeof n2 && !(n2 instanceof String) && n2 !== e.ANY_EVENT)
            throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");
          if ("function" != typeof r2)
            throw new TypeError("The callback must be a function.");
          const i2 = new t(n2, this, r2, s2);
          return this.eventMap[n2] || (this.eventMap[n2] = []), s2.prepend ? this.eventMap[n2].unshift(i2) : this.eventMap[n2].push(i2), i2;
        }
        addOneTimeListener(e2, t2, n2 = {}) {
          n2.remaining = 1, this.addListener(e2, t2, n2);
        }
        static get ANY_EVENT() {
          return Symbol.for("Any event");
        }
        hasListener(n2, r2) {
          if (void 0 === n2)
            return !!(this.eventMap[e.ANY_EVENT] && this.eventMap[e.ANY_EVENT].length > 0) || Object.entries(this.eventMap).some(([, e2]) => e2.length > 0);
          if (this.eventMap[n2] && this.eventMap[n2].length > 0) {
            if (r2 instanceof t) {
              return this.eventMap[n2].filter((e2) => e2 === r2).length > 0;
            }
            if ("function" == typeof r2) {
              return this.eventMap[n2].filter((e2) => e2.callback === r2).length > 0;
            }
            return null == r2;
          }
          return false;
        }
        get eventNames() {
          return Object.keys(this.eventMap);
        }
        getListeners(e2) {
          return this.eventMap[e2] || [];
        }
        suspendEvent(e2) {
          this.getListeners(e2).forEach((e3) => {
            e3.suspended = true;
          });
        }
        unsuspendEvent(e2) {
          this.getListeners(e2).forEach((e3) => {
            e3.suspended = false;
          });
        }
        getListenerCount(e2) {
          return this.getListeners(e2).length;
        }
        emit(t2, ...n2) {
          if ("string" != typeof t2 && !(t2 instanceof String))
            throw new TypeError("The 'event' parameter must be a string.");
          if (this.eventsSuspended)
            return;
          let r2 = [], s2 = this.eventMap[e.ANY_EVENT] || [];
          return this.eventMap[t2] && (s2 = s2.concat(this.eventMap[t2])), s2.forEach((e2) => {
            if (e2.suspended)
              return;
            let t3 = [...n2];
            Array.isArray(e2.arguments) && (t3 = t3.concat(e2.arguments)), e2.remaining > 0 && (r2.push(e2.callback.apply(e2.context, t3)), e2.count++), --e2.remaining < 1 && e2.remove();
          }), r2;
        }
        removeListener(e2, t2, n2 = {}) {
          if (void 0 === e2)
            return void (this.eventMap = {});
          if (!this.eventMap[e2])
            return;
          let r2 = this.eventMap[e2].filter((e3) => t2 && e3.callback !== t2 || n2.remaining && n2.remaining !== e3.remaining || n2.context && n2.context !== e3.context);
          r2.length ? this.eventMap[e2] = r2 : delete this.eventMap[e2];
        }
        async waitFor(e2, t2 = {}) {
          return t2.duration = parseInt(t2.duration), (isNaN(t2.duration) || t2.duration <= 0) && (t2.duration = 1 / 0), new Promise((n2, r2) => {
            let s2, i2 = this.addListener(e2, () => {
              clearTimeout(s2), n2();
            }, { remaining: 1 });
            t2.duration !== 1 / 0 && (s2 = setTimeout(() => {
              i2.remove(), r2("The duration expired before the event was emitted.");
            }, t2.duration));
          });
        }
        get eventCount() {
          return Object.keys(this.eventMap).length;
        }
      };
      t = class {
        constructor(t2, n2, r2, s2 = {}) {
          if ("string" != typeof t2 && !(t2 instanceof String) && t2 !== e.ANY_EVENT)
            throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");
          if (!n2)
            throw new ReferenceError("The 'target' parameter is mandatory.");
          if ("function" != typeof r2)
            throw new TypeError("The 'callback' must be a function.");
          void 0 === s2.arguments || Array.isArray(s2.arguments) || (s2.arguments = [s2.arguments]), (s2 = Object.assign({ context: n2, remaining: 1 / 0, arguments: void 0, duration: 1 / 0 }, s2)).duration !== 1 / 0 && setTimeout(() => this.remove(), s2.duration), this.arguments = s2.arguments, this.callback = r2, this.context = s2.context, this.count = 0, this.event = t2, this.remaining = parseInt(s2.remaining) >= 1 ? parseInt(s2.remaining) : 1 / 0, this.suspended = false, this.target = n2;
        }
        remove() {
          this.target.removeListener(this.event, this.callback, { context: this.context, remaining: this.remaining });
        }
      };
      n = class {
        static get MIDI_CHANNEL_MESSAGES() {
          return this.validation && console.warn("The MIDI_CHANNEL_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MESSAGES enum instead."), n.CHANNEL_MESSAGES;
        }
        static get CHANNEL_MESSAGES() {
          return { noteoff: 8, noteon: 9, keyaftertouch: 10, controlchange: 11, programchange: 12, channelaftertouch: 13, pitchbend: 14 };
        }
        static get CHANNEL_NUMBERS() {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        }
        static get MIDI_CHANNEL_NUMBERS() {
          return this.validation && console.warn("The MIDI_CHANNEL_NUMBERS array has been deprecated. Use the Enumerations.CHANNEL_NUMBERS array instead."), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        }
        static get CHANNEL_MODE_MESSAGES() {
          return { allsoundoff: 120, resetallcontrollers: 121, localcontrol: 122, allnotesoff: 123, omnimodeoff: 124, omnimodeon: 125, monomodeon: 126, polymodeon: 127 };
        }
        static get MIDI_CHANNEL_MODE_MESSAGES() {
          return this.validation && console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MODE_MESSAGES enum instead."), n.CHANNEL_MODE_MESSAGES;
        }
        static get MIDI_CONTROL_CHANGE_MESSAGES() {
          return this.validation && console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been deprecated. Use the Enumerations.CONTROL_CHANGE_MESSAGES array instead."), { bankselectcoarse: 0, modulationwheelcoarse: 1, breathcontrollercoarse: 2, controller3: 3, footcontrollercoarse: 4, portamentotimecoarse: 5, dataentrycoarse: 6, volumecoarse: 7, balancecoarse: 8, controller9: 9, pancoarse: 10, expressioncoarse: 11, effectcontrol1coarse: 12, effectcontrol2coarse: 13, controller14: 14, controller15: 15, generalpurposeslider1: 16, generalpurposeslider2: 17, generalpurposeslider3: 18, generalpurposeslider4: 19, controller20: 20, controller21: 21, controller22: 22, controller23: 23, controller24: 24, controller25: 25, controller26: 26, controller27: 27, controller28: 28, controller29: 29, controller30: 30, controller31: 31, bankselectfine: 32, modulationwheelfine: 33, breathcontrollerfine: 34, controller35: 35, footcontrollerfine: 36, portamentotimefine: 37, dataentryfine: 38, volumefine: 39, balancefine: 40, controller41: 41, panfine: 42, expressionfine: 43, effectcontrol1fine: 44, effectcontrol2fine: 45, controller46: 46, controller47: 47, controller48: 48, controller49: 49, controller50: 50, controller51: 51, controller52: 52, controller53: 53, controller54: 54, controller55: 55, controller56: 56, controller57: 57, controller58: 58, controller59: 59, controller60: 60, controller61: 61, controller62: 62, controller63: 63, holdpedal: 64, portamento: 65, sustenutopedal: 66, softpedal: 67, legatopedal: 68, hold2pedal: 69, soundvariation: 70, resonance: 71, soundreleasetime: 72, soundattacktime: 73, brightness: 74, soundcontrol6: 75, soundcontrol7: 76, soundcontrol8: 77, soundcontrol9: 78, soundcontrol10: 79, generalpurposebutton1: 80, generalpurposebutton2: 81, generalpurposebutton3: 82, generalpurposebutton4: 83, controller84: 84, controller85: 85, controller86: 86, controller87: 87, controller88: 88, controller89: 89, controller90: 90, reverblevel: 91, tremololevel: 92, choruslevel: 93, celestelevel: 94, phaserlevel: 95, databuttonincrement: 96, databuttondecrement: 97, nonregisteredparametercoarse: 98, nonregisteredparameterfine: 99, registeredparametercoarse: 100, registeredparameterfine: 101, controller102: 102, controller103: 103, controller104: 104, controller105: 105, controller106: 106, controller107: 107, controller108: 108, controller109: 109, controller110: 110, controller111: 111, controller112: 112, controller113: 113, controller114: 114, controller115: 115, controller116: 116, controller117: 117, controller118: 118, controller119: 119, allsoundoff: 120, resetallcontrollers: 121, localcontrol: 122, allnotesoff: 123, omnimodeoff: 124, omnimodeon: 125, monomodeon: 126, polymodeon: 127 };
        }
        static get CONTROL_CHANGE_MESSAGES() {
          return [{ number: 0, name: "bankselectcoarse", description: "Bank Select (Coarse)", position: "msb" }, { number: 1, name: "modulationwheelcoarse", description: "Modulation Wheel (Coarse)", position: "msb" }, { number: 2, name: "breathcontrollercoarse", description: "Breath Controller (Coarse)", position: "msb" }, { number: 3, name: "controller3", description: "Undefined", position: "msb" }, { number: 4, name: "footcontrollercoarse", description: "Foot Controller (Coarse)", position: "msb" }, { number: 5, name: "portamentotimecoarse", description: "Portamento Time (Coarse)", position: "msb" }, { number: 6, name: "dataentrycoarse", description: "Data Entry (Coarse)", position: "msb" }, { number: 7, name: "volumecoarse", description: "Channel Volume (Coarse)", position: "msb" }, { number: 8, name: "balancecoarse", description: "Balance (Coarse)", position: "msb" }, { number: 9, name: "controller9", description: "Controller 9 (Coarse)", position: "msb" }, { number: 10, name: "pancoarse", description: "Pan (Coarse)", position: "msb" }, { number: 11, name: "expressioncoarse", description: "Expression Controller (Coarse)", position: "msb" }, { number: 12, name: "effectcontrol1coarse", description: "Effect Control 1 (Coarse)", position: "msb" }, { number: 13, name: "effectcontrol2coarse", description: "Effect Control 2 (Coarse)", position: "msb" }, { number: 14, name: "controller14", description: "Undefined", position: "msb" }, { number: 15, name: "controller15", description: "Undefined", position: "msb" }, { number: 16, name: "generalpurposecontroller1", description: "General Purpose Controller 1 (Coarse)", position: "msb" }, { number: 17, name: "generalpurposecontroller2", description: "General Purpose Controller 2 (Coarse)", position: "msb" }, { number: 18, name: "generalpurposecontroller3", description: "General Purpose Controller 3 (Coarse)", position: "msb" }, { number: 19, name: "generalpurposecontroller4", description: "General Purpose Controller 4 (Coarse)", position: "msb" }, { number: 20, name: "controller20", description: "Undefined", position: "msb" }, { number: 21, name: "controller21", description: "Undefined", position: "msb" }, { number: 22, name: "controller22", description: "Undefined", position: "msb" }, { number: 23, name: "controller23", description: "Undefined", position: "msb" }, { number: 24, name: "controller24", description: "Undefined", position: "msb" }, { number: 25, name: "controller25", description: "Undefined", position: "msb" }, { number: 26, name: "controller26", description: "Undefined", position: "msb" }, { number: 27, name: "controller27", description: "Undefined", position: "msb" }, { number: 28, name: "controller28", description: "Undefined", position: "msb" }, { number: 29, name: "controller29", description: "Undefined", position: "msb" }, { number: 30, name: "controller30", description: "Undefined", position: "msb" }, { number: 31, name: "controller31", description: "Undefined", position: "msb" }, { number: 32, name: "bankselectfine", description: "Bank Select (Fine)", position: "lsb" }, { number: 33, name: "modulationwheelfine", description: "Modulation Wheel (Fine)", position: "lsb" }, { number: 34, name: "breathcontrollerfine", description: "Breath Controller (Fine)", position: "lsb" }, { number: 35, name: "controller35", description: "Undefined", position: "lsb" }, { number: 36, name: "footcontrollerfine", description: "Foot Controller (Fine)", position: "lsb" }, { number: 37, name: "portamentotimefine", description: "Portamento Time (Fine)", position: "lsb" }, { number: 38, name: "dataentryfine", description: "Data Entry (Fine)", position: "lsb" }, { number: 39, name: "channelvolumefine", description: "Channel Volume (Fine)", position: "lsb" }, { number: 40, name: "balancefine", description: "Balance (Fine)", position: "lsb" }, { number: 41, name: "controller41", description: "Undefined", position: "lsb" }, { number: 42, name: "panfine", description: "Pan (Fine)", position: "lsb" }, { number: 43, name: "expressionfine", description: "Expression Controller (Fine)", position: "lsb" }, { number: 44, name: "effectcontrol1fine", description: "Effect control 1 (Fine)", position: "lsb" }, { number: 45, name: "effectcontrol2fine", description: "Effect control 2 (Fine)", position: "lsb" }, { number: 46, name: "controller46", description: "Undefined", position: "lsb" }, { number: 47, name: "controller47", description: "Undefined", position: "lsb" }, { number: 48, name: "controller48", description: "General Purpose Controller 1 (Fine)", position: "lsb" }, { number: 49, name: "controller49", description: "General Purpose Controller 2 (Fine)", position: "lsb" }, { number: 50, name: "controller50", description: "General Purpose Controller 3 (Fine)", position: "lsb" }, { number: 51, name: "controller51", description: "General Purpose Controller 4 (Fine)", position: "lsb" }, { number: 52, name: "controller52", description: "Undefined", position: "lsb" }, { number: 53, name: "controller53", description: "Undefined", position: "lsb" }, { number: 54, name: "controller54", description: "Undefined", position: "lsb" }, { number: 55, name: "controller55", description: "Undefined", position: "lsb" }, { number: 56, name: "controller56", description: "Undefined", position: "lsb" }, { number: 57, name: "controller57", description: "Undefined", position: "lsb" }, { number: 58, name: "controller58", description: "Undefined", position: "lsb" }, { number: 59, name: "controller59", description: "Undefined", position: "lsb" }, { number: 60, name: "controller60", description: "Undefined", position: "lsb" }, { number: 61, name: "controller61", description: "Undefined", position: "lsb" }, { number: 62, name: "controller62", description: "Undefined", position: "lsb" }, { number: 63, name: "controller63", description: "Undefined", position: "lsb" }, { number: 64, name: "damperpedal", description: "Damper Pedal On/Off" }, { number: 65, name: "portamento", description: "Portamento On/Off" }, { number: 66, name: "sostenuto", description: "Sostenuto On/Off" }, { number: 67, name: "softpedal", description: "Soft Pedal On/Off" }, { number: 68, name: "legatopedal", description: "Legato Pedal On/Off" }, { number: 69, name: "hold2", description: "Hold 2 On/Off" }, { number: 70, name: "soundvariation", description: "Sound Variation", position: "lsb" }, { number: 71, name: "resonance", description: "Resonance", position: "lsb" }, { number: 72, name: "releasetime", description: "Release Time", position: "lsb" }, { number: 73, name: "attacktime", description: "Attack Time", position: "lsb" }, { number: 74, name: "brightness", description: "Brightness", position: "lsb" }, { number: 75, name: "decaytime", description: "Decay Time", position: "lsb" }, { number: 76, name: "vibratorate", description: "Vibrato Rate", position: "lsb" }, { number: 77, name: "vibratodepth", description: "Vibrato Depth", position: "lsb" }, { number: 78, name: "vibratodelay", description: "Vibrato Delay", position: "lsb" }, { number: 79, name: "controller79", description: "Undefined", position: "lsb" }, { number: 80, name: "generalpurposecontroller5", description: "General Purpose Controller 5", position: "lsb" }, { number: 81, name: "generalpurposecontroller6", description: "General Purpose Controller 6", position: "lsb" }, { number: 82, name: "generalpurposecontroller7", description: "General Purpose Controller 7", position: "lsb" }, { number: 83, name: "generalpurposecontroller8", description: "General Purpose Controller 8", position: "lsb" }, { number: 84, name: "portamentocontrol", description: "Portamento Control", position: "lsb" }, { number: 85, name: "controller85", description: "Undefined" }, { number: 86, name: "controller86", description: "Undefined" }, { number: 87, name: "controller87", description: "Undefined" }, { number: 88, name: "highresolutionvelocityprefix", description: "High Resolution Velocity Prefix", position: "lsb" }, { number: 89, name: "controller89", description: "Undefined" }, { number: 90, name: "controller90", description: "Undefined" }, { number: 91, name: "effect1depth", description: "Effects 1 Depth (Reverb Send Level)" }, { number: 92, name: "effect2depth", description: "Effects 2 Depth" }, { number: 93, name: "effect3depth", description: "Effects 3 Depth (Chorus Send Level)" }, { number: 94, name: "effect4depth", description: "Effects 4 Depth" }, { number: 95, name: "effect5depth", description: "Effects 5 Depth" }, { number: 96, name: "dataincrement", description: "Data Increment" }, { number: 97, name: "datadecrement", description: "Data Decrement" }, { number: 98, name: "nonregisteredparameterfine", description: "Non-Registered Parameter Number (Fine)", position: "lsb" }, { number: 99, name: "nonregisteredparametercoarse", description: "Non-Registered Parameter Number (Coarse)", position: "msb" }, { number: 100, name: "registeredparameterfine", description: "Registered Parameter Number (Fine)", position: "lsb" }, { number: 101, name: "registeredparametercoarse", description: "Registered Parameter Number (Coarse)", position: "msb" }, { number: 102, name: "controller102", description: "Undefined" }, { number: 103, name: "controller103", description: "Undefined" }, { number: 104, name: "controller104", description: "Undefined" }, { number: 105, name: "controller105", description: "Undefined" }, { number: 106, name: "controller106", description: "Undefined" }, { number: 107, name: "controller107", description: "Undefined" }, { number: 108, name: "controller108", description: "Undefined" }, { number: 109, name: "controller109", description: "Undefined" }, { number: 110, name: "controller110", description: "Undefined" }, { number: 111, name: "controller111", description: "Undefined" }, { number: 112, name: "controller112", description: "Undefined" }, { number: 113, name: "controller113", description: "Undefined" }, { number: 114, name: "controller114", description: "Undefined" }, { number: 115, name: "controller115", description: "Undefined" }, { number: 116, name: "controller116", description: "Undefined" }, { number: 117, name: "controller117", description: "Undefined" }, { number: 118, name: "controller118", description: "Undefined" }, { number: 119, name: "controller119", description: "Undefined" }, { number: 120, name: "allsoundoff", description: "All Sound Off" }, { number: 121, name: "resetallcontrollers", description: "Reset All Controllers" }, { number: 122, name: "localcontrol", description: "Local Control On/Off" }, { number: 123, name: "allnotesoff", description: "All Notes Off" }, { number: 124, name: "omnimodeoff", description: "Omni Mode Off" }, { number: 125, name: "omnimodeon", description: "Omni Mode On" }, { number: 126, name: "monomodeon", description: "Mono Mode On" }, { number: 127, name: "polymodeon", description: "Poly Mode On" }];
        }
        static get REGISTERED_PARAMETERS() {
          return { pitchbendrange: [0, 0], channelfinetuning: [0, 1], channelcoarsetuning: [0, 2], tuningprogram: [0, 3], tuningbank: [0, 4], modulationrange: [0, 5], azimuthangle: [61, 0], elevationangle: [61, 1], gain: [61, 2], distanceratio: [61, 3], maximumdistance: [61, 4], maximumdistancegain: [61, 5], referencedistanceratio: [61, 6], panspreadangle: [61, 7], rollangle: [61, 8] };
        }
        static get MIDI_REGISTERED_PARAMETERS() {
          return this.validation && console.warn("The MIDI_REGISTERED_PARAMETERS enum has been deprecated. Use the Enumerations.REGISTERED_PARAMETERS enum instead."), n.MIDI_REGISTERED_PARAMETERS;
        }
        static get SYSTEM_MESSAGES() {
          return { sysex: 240, timecode: 241, songposition: 242, songselect: 243, tunerequest: 246, tuningrequest: 246, sysexend: 247, clock: 248, start: 250, continue: 251, stop: 252, activesensing: 254, reset: 255, midimessage: 0, unknownsystemmessage: -1 };
        }
        static get MIDI_SYSTEM_MESSAGES() {
          return this.validation && console.warn("The MIDI_SYSTEM_MESSAGES enum has been deprecated. Use the Enumerations.SYSTEM_MESSAGES enum instead."), n.SYSTEM_MESSAGES;
        }
        static get CHANNEL_EVENTS() {
          return ["noteoff", "controlchange", "noteon", "keyaftertouch", "programchange", "channelaftertouch", "pitchbend", "allnotesoff", "allsoundoff", "localcontrol", "monomode", "omnimode", "resetallcontrollers", "nrpn", "nrpn-dataentrycoarse", "nrpn-dataentryfine", "nrpn-dataincrement", "nrpn-datadecrement", "rpn", "rpn-dataentrycoarse", "rpn-dataentryfine", "rpn-dataincrement", "rpn-datadecrement", "nrpn-databuttonincrement", "nrpn-databuttondecrement", "rpn-databuttonincrement", "rpn-databuttondecrement"];
        }
      };
      r = class {
        constructor(e2, t2 = {}) {
          this.duration = d.defaults.note.duration, this.attack = d.defaults.note.attack, this.release = d.defaults.note.release, null != t2.duration && (this.duration = t2.duration), null != t2.attack && (this.attack = t2.attack), null != t2.rawAttack && (this.attack = s.from7bitToFloat(t2.rawAttack)), null != t2.release && (this.release = t2.release), null != t2.rawRelease && (this.release = s.from7bitToFloat(t2.rawRelease)), Number.isInteger(e2) ? this.identifier = s.toNoteIdentifier(e2) : this.identifier = e2;
        }
        get identifier() {
          return this._name + (this._accidental || "") + this._octave;
        }
        set identifier(e2) {
          const t2 = s.getNoteDetails(e2);
          if (d.validation && !e2)
            throw new Error("Invalid note identifier");
          this._name = t2.name, this._accidental = t2.accidental, this._octave = t2.octave;
        }
        get name() {
          return this._name;
        }
        set name(e2) {
          if (d.validation && (e2 = e2.toUpperCase(), !["C", "D", "E", "F", "G", "A", "B"].includes(e2)))
            throw new Error("Invalid name value");
          this._name = e2;
        }
        get accidental() {
          return this._accidental;
        }
        set accidental(e2) {
          if (d.validation && (e2 = e2.toLowerCase(), !["#", "##", "b", "bb"].includes(e2)))
            throw new Error("Invalid accidental value");
          this._accidental = e2;
        }
        get octave() {
          return this._octave;
        }
        set octave(e2) {
          if (d.validation && (e2 = parseInt(e2), isNaN(e2)))
            throw new Error("Invalid octave value");
          this._octave = e2;
        }
        get duration() {
          return this._duration;
        }
        set duration(e2) {
          if (d.validation && (e2 = parseFloat(e2), isNaN(e2) || null === e2 || e2 < 0))
            throw new RangeError("Invalid duration value.");
          this._duration = e2;
        }
        get attack() {
          return this._attack;
        }
        set attack(e2) {
          if (d.validation && (e2 = parseFloat(e2), isNaN(e2) || !(e2 >= 0 && e2 <= 1)))
            throw new RangeError("Invalid attack value.");
          this._attack = e2;
        }
        get release() {
          return this._release;
        }
        set release(e2) {
          if (d.validation && (e2 = parseFloat(e2), isNaN(e2) || !(e2 >= 0 && e2 <= 1)))
            throw new RangeError("Invalid release value.");
          this._release = e2;
        }
        get rawAttack() {
          return s.fromFloatTo7Bit(this._attack);
        }
        set rawAttack(e2) {
          this._attack = s.from7bitToFloat(e2);
        }
        get rawRelease() {
          return s.fromFloatTo7Bit(this._release);
        }
        set rawRelease(e2) {
          this._release = s.from7bitToFloat(e2);
        }
        get number() {
          return s.toNoteNumber(this.identifier);
        }
        getOffsetNumber(e2 = 0, t2 = 0) {
          return d.validation && (e2 = parseInt(e2) || 0, t2 = parseInt(t2) || 0), Math.min(Math.max(this.number + 12 * e2 + t2, 0), 127);
        }
      };
      s = class {
        static toNoteNumber(e2, t2 = 0) {
          if (t2 = null == t2 ? 0 : parseInt(t2), isNaN(t2))
            throw new RangeError("Invalid 'octaveOffset' value");
          "string" != typeof e2 && (e2 = "");
          const n2 = this.getNoteDetails(e2);
          if (!n2)
            throw new TypeError("Invalid note identifier");
          let r2 = 12 * (n2.octave + 1 + t2);
          if (r2 += { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[n2.name], n2.accidental && (n2.accidental.startsWith("b") ? r2 -= n2.accidental.length : r2 += n2.accidental.length), r2 < 0 || r2 > 127)
            throw new RangeError("Invalid octaveOffset value");
          return r2;
        }
        static getNoteDetails(e2) {
          Number.isInteger(e2) && (e2 = this.toNoteIdentifier(e2));
          const t2 = e2.match(/^([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)$/i);
          if (!t2)
            throw new TypeError("Invalid note identifier");
          const n2 = t2[1].toUpperCase(), r2 = parseInt(t2[3]);
          let s2 = t2[2].toLowerCase();
          s2 = "" === s2 ? void 0 : s2;
          return { accidental: s2, identifier: n2 + (s2 || "") + r2, name: n2, octave: r2 };
        }
        static sanitizeChannels(e2) {
          let t2;
          if (d.validation) {
            if ("all" === e2)
              t2 = ["all"];
            else if ("none" === e2)
              return [];
          }
          return t2 = Array.isArray(e2) ? e2 : [e2], t2.indexOf("all") > -1 && (t2 = n.MIDI_CHANNEL_NUMBERS), t2.map(function(e3) {
            return parseInt(e3);
          }).filter(function(e3) {
            return e3 >= 1 && e3 <= 16;
          });
        }
        static toTimestamp(e2) {
          let t2 = false;
          const n2 = parseFloat(e2);
          return !isNaN(n2) && ("string" == typeof e2 && "+" === e2.substring(0, 1) ? n2 >= 0 && (t2 = d.time + n2) : n2 >= 0 && (t2 = n2), t2);
        }
        static guessNoteNumber(e2, t2) {
          t2 = parseInt(t2) || 0;
          let n2 = false;
          if (Number.isInteger(e2) && e2 >= 0 && e2 <= 127)
            n2 = parseInt(e2);
          else if (parseInt(e2) >= 0 && parseInt(e2) <= 127)
            n2 = parseInt(e2);
          else if ("string" == typeof e2 || e2 instanceof String)
            try {
              n2 = this.toNoteNumber(e2.trim(), t2);
            } catch (e3) {
              return false;
            }
          return n2;
        }
        static toNoteIdentifier(e2, t2) {
          if (e2 = parseInt(e2), isNaN(e2) || e2 < 0 || e2 > 127)
            throw new RangeError("Invalid note number");
          if (t2 = null == t2 ? 0 : parseInt(t2), isNaN(t2))
            throw new RangeError("Invalid octaveOffset value");
          const n2 = Math.floor(e2 / 12 - 1) + t2;
          return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][e2 % 12] + n2.toString();
        }
        static buildNote(e2, t2 = {}) {
          if (t2.octaveOffset = parseInt(t2.octaveOffset) || 0, e2 instanceof r)
            return e2;
          let n2 = this.guessNoteNumber(e2, t2.octaveOffset);
          if (false === n2)
            throw new TypeError(`The input could not be parsed as a note (${e2})`);
          return t2.octaveOffset = void 0, new r(n2, t2);
        }
        static buildNoteArray(e2, t2 = {}) {
          let n2 = [];
          return Array.isArray(e2) || (e2 = [e2]), e2.forEach((e3) => {
            n2.push(this.buildNote(e3, t2));
          }), n2;
        }
        static from7bitToFloat(e2) {
          return e2 === 1 / 0 && (e2 = 127), e2 = parseInt(e2) || 0, Math.min(Math.max(e2 / 127, 0), 1);
        }
        static fromFloatTo7Bit(e2) {
          return e2 === 1 / 0 && (e2 = 1), e2 = parseFloat(e2) || 0, Math.min(Math.max(Math.round(127 * e2), 0), 127);
        }
        static fromMsbLsbToFloat(e2, t2 = 0) {
          d.validation && (e2 = Math.min(Math.max(parseInt(e2) || 0, 0), 127), t2 = Math.min(Math.max(parseInt(t2) || 0, 0), 127));
          const n2 = ((e2 << 7) + t2) / 16383;
          return Math.min(Math.max(n2, 0), 1);
        }
        static fromFloatToMsbLsb(e2) {
          d.validation && (e2 = Math.min(Math.max(parseFloat(e2) || 0, 0), 1));
          const t2 = Math.round(16383 * e2);
          return { msb: t2 >> 7, lsb: 127 & t2 };
        }
        static offsetNumber(e2, t2 = 0, n2 = 0) {
          if (d.validation) {
            if (e2 = parseInt(e2), isNaN(e2))
              throw new Error("Invalid note number");
            t2 = parseInt(t2) || 0, n2 = parseInt(n2) || 0;
          }
          return Math.min(Math.max(e2 + 12 * t2 + n2, 0), 127);
        }
        static getPropertyByValue(e2, t2) {
          return Object.keys(e2).find((n2) => e2[n2] === t2);
        }
        static getCcNameByNumber(e2) {
          if (!d.validation || (e2 = parseInt(e2)) >= 0 && e2 <= 127)
            return n.CONTROL_CHANGE_MESSAGES[e2].name;
        }
        static getCcNumberByName(e2) {
          let t2 = n.CONTROL_CHANGE_MESSAGES.find((t3) => t3.name === e2);
          return t2 ? t2.number : n.MIDI_CONTROL_CHANGE_MESSAGES[e2];
        }
        static getChannelModeByNumber(e2) {
          if (!(e2 >= 120 && e2 <= 127))
            return false;
          for (let t2 in n.CHANNEL_MODE_MESSAGES)
            if (n.CHANNEL_MODE_MESSAGES.hasOwnProperty(t2) && e2 === n.CHANNEL_MODE_MESSAGES[t2])
              return t2;
          return false;
        }
        static get isNode() {
          return "undefined" != typeof process && null != process.versions && null != process.versions.node;
        }
        static get isBrowser() {
          return "undefined" != typeof window && void 0 !== window.document;
        }
      };
      i = class extends e {
        constructor(e2, t2) {
          super(), this._output = e2, this._number = t2, this._octaveOffset = 0;
        }
        destroy() {
          this._output = null, this._number = null, this._octaveOffset = 0, this.removeListener();
        }
        send(e2, t2 = { time: 0 }) {
          return this.output.send(e2, t2), this;
        }
        sendKeyAftertouch(e2, t2, r2 = {}) {
          if (d.validation) {
            if (r2.useRawValue && (r2.rawValue = r2.useRawValue), isNaN(parseFloat(t2)))
              throw new RangeError("Invalid key aftertouch value.");
            if (r2.rawValue) {
              if (!(t2 >= 0 && t2 <= 127 && Number.isInteger(t2)))
                throw new RangeError("Key aftertouch raw value must be an integer between 0 and 127.");
            } else if (!(t2 >= 0 && t2 <= 1))
              throw new RangeError("Key aftertouch value must be a float between 0 and 1.");
          }
          r2.rawValue || (t2 = s.fromFloatTo7Bit(t2));
          const i2 = d.octaveOffset + this.output.octaveOffset + this.octaveOffset;
          return Array.isArray(e2) || (e2 = [e2]), s.buildNoteArray(e2).forEach((e3) => {
            this.send([(n.CHANNEL_MESSAGES.keyaftertouch << 4) + (this.number - 1), e3.getOffsetNumber(i2), t2], { time: s.toTimestamp(r2.time) });
          }), this;
        }
        sendControlChange(e2, t2, r2 = {}) {
          if ("string" == typeof e2 && (e2 = s.getCcNumberByName(e2)), Array.isArray(t2) || (t2 = [t2]), d.validation) {
            if (void 0 === e2)
              throw new TypeError("Control change must be identified with a valid name or an integer between 0 and 127.");
            if (!Number.isInteger(e2) || !(e2 >= 0 && e2 <= 127))
              throw new TypeError("Control change number must be an integer between 0 and 127.");
            if (2 === (t2 = t2.map((e3) => {
              const t3 = Math.min(Math.max(parseInt(e3), 0), 127);
              if (isNaN(t3))
                throw new TypeError("Values must be integers between 0 and 127");
              return t3;
            })).length && e2 >= 32)
              throw new TypeError("To use a value array, the controller must be between 0 and 31");
          }
          return t2.forEach((i2, a2) => {
            this.send([(n.CHANNEL_MESSAGES.controlchange << 4) + (this.number - 1), e2 + 32 * a2, t2[a2]], { time: s.toTimestamp(r2.time) });
          }), this;
        }
        _selectNonRegisteredParameter(e2, t2 = {}) {
          return this.sendControlChange(99, e2[0], t2), this.sendControlChange(98, e2[1], t2), this;
        }
        _deselectRegisteredParameter(e2 = {}) {
          return this.sendControlChange(101, 127, e2), this.sendControlChange(100, 127, e2), this;
        }
        _deselectNonRegisteredParameter(e2 = {}) {
          return this.sendControlChange(101, 127, e2), this.sendControlChange(100, 127, e2), this;
        }
        _selectRegisteredParameter(e2, t2 = {}) {
          return this.sendControlChange(101, e2[0], t2), this.sendControlChange(100, e2[1], t2), this;
        }
        _setCurrentParameter(e2, t2 = {}) {
          return e2 = [].concat(e2), this.sendControlChange(6, e2[0], t2), e2.length < 2 || this.sendControlChange(38, e2[1], t2), this;
        }
        sendRpnDecrement(e2, t2 = {}) {
          if (Array.isArray(e2) || (e2 = n.REGISTERED_PARAMETERS[e2]), d.validation) {
            if (void 0 === e2)
              throw new TypeError("The specified registered parameter is invalid.");
            let t3 = false;
            if (Object.getOwnPropertyNames(n.REGISTERED_PARAMETERS).forEach((r2) => {
              n.REGISTERED_PARAMETERS[r2][0] === e2[0] && n.REGISTERED_PARAMETERS[r2][1] === e2[1] && (t3 = true);
            }), !t3)
              throw new TypeError("The specified registered parameter is invalid.");
          }
          return this._selectRegisteredParameter(e2, t2), this.sendControlChange(97, 0, t2), this._deselectRegisteredParameter(t2), this;
        }
        sendRpnIncrement(e2, t2 = {}) {
          if (Array.isArray(e2) || (e2 = n.REGISTERED_PARAMETERS[e2]), d.validation) {
            if (void 0 === e2)
              throw new TypeError("The specified registered parameter is invalid.");
            let t3 = false;
            if (Object.getOwnPropertyNames(n.REGISTERED_PARAMETERS).forEach((r2) => {
              n.REGISTERED_PARAMETERS[r2][0] === e2[0] && n.REGISTERED_PARAMETERS[r2][1] === e2[1] && (t3 = true);
            }), !t3)
              throw new TypeError("The specified registered parameter is invalid.");
          }
          return this._selectRegisteredParameter(e2, t2), this.sendControlChange(96, 0, t2), this._deselectRegisteredParameter(t2), this;
        }
        playNote(e2, t2 = {}) {
          this.sendNoteOn(e2, t2);
          const n2 = Array.isArray(e2) ? e2 : [e2];
          for (let e3 of n2)
            if (parseInt(e3.duration) > 0) {
              const n3 = { time: (s.toTimestamp(t2.time) || d.time) + parseInt(e3.duration), release: e3.release, rawRelease: e3.rawRelease };
              this.sendNoteOff(e3, n3);
            } else if (parseInt(t2.duration) > 0) {
              const n3 = { time: (s.toTimestamp(t2.time) || d.time) + parseInt(t2.duration), release: t2.release, rawRelease: t2.rawRelease };
              this.sendNoteOff(e3, n3);
            }
          return this;
        }
        sendNoteOff(e2, t2 = {}) {
          if (d.validation) {
            if (null != t2.rawRelease && !(t2.rawRelease >= 0 && t2.rawRelease <= 127))
              throw new RangeError("The 'rawRelease' option must be an integer between 0 and 127");
            if (null != t2.release && !(t2.release >= 0 && t2.release <= 1))
              throw new RangeError("The 'release' option must be an number between 0 and 1");
            t2.rawVelocity && (t2.rawRelease = t2.velocity, console.warn("The 'rawVelocity' option is deprecated. Use 'rawRelease' instead.")), t2.velocity && (t2.release = t2.velocity, console.warn("The 'velocity' option is deprecated. Use 'attack' instead."));
          }
          let r2 = 64;
          null != t2.rawRelease ? r2 = t2.rawRelease : isNaN(t2.release) || (r2 = Math.round(127 * t2.release));
          const i2 = d.octaveOffset + this.output.octaveOffset + this.octaveOffset;
          return s.buildNoteArray(e2, { rawRelease: parseInt(r2) }).forEach((e3) => {
            this.send([(n.CHANNEL_MESSAGES.noteoff << 4) + (this.number - 1), e3.getOffsetNumber(i2), e3.rawRelease], { time: s.toTimestamp(t2.time) });
          }), this;
        }
        stopNote(e2, t2 = {}) {
          return this.sendNoteOff(e2, t2);
        }
        sendNoteOn(e2, t2 = {}) {
          if (d.validation) {
            if (null != t2.rawAttack && !(t2.rawAttack >= 0 && t2.rawAttack <= 127))
              throw new RangeError("The 'rawAttack' option must be an integer between 0 and 127");
            if (null != t2.attack && !(t2.attack >= 0 && t2.attack <= 1))
              throw new RangeError("The 'attack' option must be an number between 0 and 1");
            t2.rawVelocity && (t2.rawAttack = t2.velocity, t2.rawRelease = t2.release, console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' or 'rawRelease'.")), t2.velocity && (t2.attack = t2.velocity, console.warn("The 'velocity' option is deprecated. Use 'attack' instead."));
          }
          let r2 = 64;
          null != t2.rawAttack ? r2 = t2.rawAttack : isNaN(t2.attack) || (r2 = Math.round(127 * t2.attack));
          const i2 = d.octaveOffset + this.output.octaveOffset + this.octaveOffset;
          return s.buildNoteArray(e2, { rawAttack: r2 }).forEach((e3) => {
            this.send([(n.CHANNEL_MESSAGES.noteon << 4) + (this.number - 1), e3.getOffsetNumber(i2), e3.rawAttack], { time: s.toTimestamp(t2.time) });
          }), this;
        }
        sendChannelMode(e2, t2 = 0, r2 = {}) {
          if ("string" == typeof e2 && (e2 = n.CHANNEL_MODE_MESSAGES[e2]), d.validation) {
            if (void 0 === e2)
              throw new TypeError("Invalid channel mode message name or number.");
            if (isNaN(e2) || !(e2 >= 120 && e2 <= 127))
              throw new TypeError("Invalid channel mode message number.");
            if (isNaN(parseInt(t2)) || t2 < 0 || t2 > 127)
              throw new RangeError("Value must be an integer between 0 and 127.");
          }
          return this.send([(n.CHANNEL_MESSAGES.controlchange << 4) + (this.number - 1), e2, t2], { time: s.toTimestamp(r2.time) }), this;
        }
        sendOmniMode(e2, t2 = {}) {
          return void 0 === e2 || e2 ? this.sendChannelMode("omnimodeon", 0, t2) : this.sendChannelMode("omnimodeoff", 0, t2), this;
        }
        sendChannelAftertouch(e2, t2 = {}) {
          if (d.validation) {
            if (isNaN(parseFloat(e2)))
              throw new RangeError("Invalid channel aftertouch value.");
            if (t2.rawValue) {
              if (!(e2 >= 0 && e2 <= 127 && Number.isInteger(e2)))
                throw new RangeError("Channel aftertouch raw value must be an integer between 0 and 127.");
            } else if (!(e2 >= 0 && e2 <= 1))
              throw new RangeError("Channel aftertouch value must be a float between 0 and 1.");
          }
          return this.send([(n.CHANNEL_MESSAGES.channelaftertouch << 4) + (this.number - 1), Math.round(127 * e2)], { time: s.toTimestamp(t2.time) }), this;
        }
        sendMasterTuning(e2, t2 = {}) {
          if (e2 = parseFloat(e2) || 0, d.validation && !(e2 > -65 && e2 < 64))
            throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");
          let n2 = Math.floor(e2) + 64, r2 = e2 - Math.floor(e2);
          r2 = Math.round((r2 + 1) / 2 * 16383);
          let s2 = r2 >> 7 & 127, i2 = 127 & r2;
          return this.sendRpnValue("channelcoarsetuning", n2, t2), this.sendRpnValue("channelfinetuning", [s2, i2], t2), this;
        }
        sendModulationRange(e2, t2, n2 = {}) {
          if (d.validation) {
            if (!Number.isInteger(e2) || !(e2 >= 0 && e2 <= 127))
              throw new RangeError("The semitones value must be an integer between 0 and 127.");
            if (!(null == t2 || Number.isInteger(t2) && t2 >= 0 && t2 <= 127))
              throw new RangeError("If specified, the cents value must be an integer between 0 and 127.");
          }
          return t2 >= 0 && t2 <= 127 || (t2 = 0), this.sendRpnValue("modulationrange", [e2, t2], n2), this;
        }
        sendNrpnValue(e2, t2, n2 = {}) {
          if (t2 = [].concat(t2), d.validation) {
            if (!Array.isArray(e2) || !Number.isInteger(e2[0]) || !Number.isInteger(e2[1]))
              throw new TypeError("The specified NRPN is invalid.");
            if (!(e2[0] >= 0 && e2[0] <= 127))
              throw new RangeError("The first byte of the NRPN must be between 0 and 127.");
            if (!(e2[1] >= 0 && e2[1] <= 127))
              throw new RangeError("The second byte of the NRPN must be between 0 and 127.");
            t2.forEach((e3) => {
              if (!(e3 >= 0 && e3 <= 127))
                throw new RangeError("The data bytes of the NRPN must be between 0 and 127.");
            });
          }
          return this._selectNonRegisteredParameter(e2, n2), this._setCurrentParameter(t2, n2), this._deselectNonRegisteredParameter(n2), this;
        }
        sendPitchBend(e2, t2 = {}) {
          if (d.validation)
            if (t2.rawValue && Array.isArray(e2)) {
              if (!(e2[0] >= 0 && e2[0] <= 127))
                throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");
              if (!(e2[1] >= 0 && e2[1] <= 127))
                throw new RangeError("The pitch bend LSB must be an integer between 0 and 127.");
            } else if (t2.rawValue && !Array.isArray(e2)) {
              if (!(e2 >= 0 && e2 <= 127))
                throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");
            } else {
              if (isNaN(e2) || null === e2)
                throw new RangeError("Invalid pitch bend value.");
              if (!(e2 >= -1 && e2 <= 1))
                throw new RangeError("The pitch bend value must be a float between -1 and 1.");
            }
          let r2 = 0, i2 = 0;
          if (t2.rawValue && Array.isArray(e2))
            r2 = e2[0], i2 = e2[1];
          else if (t2.rawValue && !Array.isArray(e2))
            r2 = e2;
          else {
            const t3 = s.fromFloatToMsbLsb((e2 + 1) / 2);
            r2 = t3.msb, i2 = t3.lsb;
          }
          return this.send([(n.CHANNEL_MESSAGES.pitchbend << 4) + (this.number - 1), i2, r2], { time: s.toTimestamp(t2.time) }), this;
        }
        sendPitchBendRange(e2, t2, n2 = {}) {
          if (d.validation) {
            if (!Number.isInteger(e2) || !(e2 >= 0 && e2 <= 127))
              throw new RangeError("The semitones value must be an integer between 0 and 127.");
            if (!Number.isInteger(t2) || !(t2 >= 0 && t2 <= 127))
              throw new RangeError("The cents value must be an integer between 0 and 127.");
          }
          return this.sendRpnValue("pitchbendrange", [e2, t2], n2), this;
        }
        sendProgramChange(e2, t2 = {}) {
          if (e2 = parseInt(e2) || 0, d.validation && !(e2 >= 0 && e2 <= 127))
            throw new RangeError("The program number must be between 0 and 127.");
          return this.send([(n.CHANNEL_MESSAGES.programchange << 4) + (this.number - 1), e2], { time: s.toTimestamp(t2.time) }), this;
        }
        sendRpnValue(e2, t2, r2 = {}) {
          if (Array.isArray(e2) || (e2 = n.REGISTERED_PARAMETERS[e2]), d.validation) {
            if (!Number.isInteger(e2[0]) || !Number.isInteger(e2[1]))
              throw new TypeError("The specified NRPN is invalid.");
            if (!(e2[0] >= 0 && e2[0] <= 127))
              throw new RangeError("The first byte of the RPN must be between 0 and 127.");
            if (!(e2[1] >= 0 && e2[1] <= 127))
              throw new RangeError("The second byte of the RPN must be between 0 and 127.");
            [].concat(t2).forEach((e3) => {
              if (!(e3 >= 0 && e3 <= 127))
                throw new RangeError("The data bytes of the RPN must be between 0 and 127.");
            });
          }
          return this._selectRegisteredParameter(e2, r2), this._setCurrentParameter(t2, r2), this._deselectRegisteredParameter(r2), this;
        }
        sendTuningBank(e2, t2 = {}) {
          if (d.validation && (!Number.isInteger(e2) || !(e2 >= 0 && e2 <= 127)))
            throw new RangeError("The tuning bank number must be between 0 and 127.");
          return this.sendRpnValue("tuningbank", e2, t2), this;
        }
        sendTuningProgram(e2, t2 = {}) {
          if (d.validation && (!Number.isInteger(e2) || !(e2 >= 0 && e2 <= 127)))
            throw new RangeError("The tuning program number must be between 0 and 127.");
          return this.sendRpnValue("tuningprogram", e2, t2), this;
        }
        sendLocalControl(e2, t2 = {}) {
          return e2 ? this.sendChannelMode("localcontrol", 127, t2) : this.sendChannelMode("localcontrol", 0, t2);
        }
        sendAllNotesOff(e2 = {}) {
          return this.sendChannelMode("allnotesoff", 0, e2);
        }
        sendAllSoundOff(e2 = {}) {
          return this.sendChannelMode("allsoundoff", 0, e2);
        }
        sendResetAllControllers(e2 = {}) {
          return this.sendChannelMode("resetallcontrollers", 0, e2);
        }
        sendPolyphonicMode(e2, t2 = {}) {
          return "mono" === e2 ? this.sendChannelMode("monomodeon", 0, t2) : this.sendChannelMode("polymodeon", 0, t2);
        }
        get octaveOffset() {
          return this._octaveOffset;
        }
        set octaveOffset(e2) {
          if (this.validation && (e2 = parseInt(e2), isNaN(e2)))
            throw new TypeError("The 'octaveOffset' property must be an integer.");
          this._octaveOffset = e2;
        }
        get output() {
          return this._output;
        }
        get number() {
          return this._number;
        }
      };
      a = class extends e {
        constructor(e2) {
          super(), this._midiOutput = e2, this._octaveOffset = 0, this.channels = [];
          for (let e3 = 1; e3 <= 16; e3++)
            this.channels[e3] = new i(this, e3);
          this._midiOutput.onstatechange = this._onStateChange.bind(this);
        }
        async destroy() {
          this.removeListener(), this.channels.forEach((e2) => e2.destroy()), this.channels = [], this._midiOutput.onstatechange = null, await this.close(), this._midiOutput = null;
        }
        _onStateChange(e2) {
          let t2 = { timestamp: d.time };
          "open" === e2.port.connection ? (t2.type = "opened", t2.target = this, t2.port = t2.target, this.emit("opened", t2)) : "closed" === e2.port.connection && "connected" === e2.port.state ? (t2.type = "closed", t2.target = this, t2.port = t2.target, this.emit("closed", t2)) : "closed" === e2.port.connection && "disconnected" === e2.port.state ? (t2.type = "disconnected", t2.port = { connection: e2.port.connection, id: e2.port.id, manufacturer: e2.port.manufacturer, name: e2.port.name, state: e2.port.state, type: e2.port.type }, this.emit("disconnected", t2)) : "pending" === e2.port.connection && "disconnected" === e2.port.state || console.warn("This statechange event was not caught:", e2.port.connection, e2.port.state);
        }
        async open() {
          try {
            return await this._midiOutput.open(), Promise.resolve(this);
          } catch (e2) {
            return Promise.reject(e2);
          }
        }
        async close() {
          this._midiOutput ? await this._midiOutput.close() : await Promise.resolve();
        }
        send(e2, t2 = { time: 0 }, n2 = 0) {
          if (e2 instanceof c && (e2 = s.isNode ? e2.data : e2.rawData), e2 instanceof Uint8Array && s.isNode && (e2 = Array.from(e2)), d.validation) {
            if (Array.isArray(e2) || e2 instanceof Uint8Array || (e2 = [e2], Array.isArray(t2) && (e2 = e2.concat(t2)), t2 = isNaN(n2) ? { time: 0 } : { time: n2 }), !(parseInt(e2[0]) >= 128 && parseInt(e2[0]) <= 255))
              throw new RangeError("The first byte (status) must be an integer between 128 and 255.");
            e2.slice(1).forEach((e3) => {
              if (!((e3 = parseInt(e3)) >= 0 && e3 <= 255))
                throw new RangeError("Data bytes must be integers between 0 and 255.");
            }), t2 || (t2 = { time: 0 });
          }
          return this._midiOutput.send(e2, s.toTimestamp(t2.time)), this;
        }
        sendSysex(e2, t2 = [], r2 = {}) {
          if (e2 = [].concat(e2), t2 instanceof Uint8Array) {
            const s2 = new Uint8Array(1 + e2.length + t2.length + 1);
            s2[0] = n.SYSTEM_MESSAGES.sysex, s2.set(Uint8Array.from(e2), 1), s2.set(t2, 1 + e2.length), s2[s2.length - 1] = n.SYSTEM_MESSAGES.sysexend, this.send(s2, { time: r2.time });
          } else {
            const s2 = e2.concat(t2, n.SYSTEM_MESSAGES.sysexend);
            this.send([n.SYSTEM_MESSAGES.sysex].concat(s2), { time: r2.time });
          }
          return this;
        }
        clear() {
          return this._midiOutput.clear ? this._midiOutput.clear() : d.validation && console.warn("The 'clear()' method has not yet been implemented in your environment."), this;
        }
        sendTimecodeQuarterFrame(e2, t2 = {}) {
          if (d.validation && (e2 = parseInt(e2), isNaN(e2) || !(e2 >= 0 && e2 <= 127)))
            throw new RangeError("The value must be an integer between 0 and 127.");
          return this.send([n.SYSTEM_MESSAGES.timecode, e2], { time: t2.time }), this;
        }
        sendSongPosition(e2 = 0, t2 = {}) {
          var r2 = (e2 = Math.floor(e2) || 0) >> 7 & 127, s2 = 127 & e2;
          return this.send([n.SYSTEM_MESSAGES.songposition, r2, s2], { time: t2.time }), this;
        }
        sendSongSelect(e2 = 0, t2 = {}) {
          if (d.validation && (e2 = parseInt(e2), isNaN(e2) || !(e2 >= 0 && e2 <= 127)))
            throw new RangeError("The program value must be between 0 and 127");
          return this.send([n.SYSTEM_MESSAGES.songselect, e2], { time: t2.time }), this;
        }
        sendTuneRequest(e2 = {}) {
          return this.send([n.SYSTEM_MESSAGES.tunerequest], { time: e2.time }), this;
        }
        sendClock(e2 = {}) {
          return this.send([n.SYSTEM_MESSAGES.clock], { time: e2.time }), this;
        }
        sendStart(e2 = {}) {
          return this.send([n.SYSTEM_MESSAGES.start], { time: e2.time }), this;
        }
        sendContinue(e2 = {}) {
          return this.send([n.SYSTEM_MESSAGES.continue], { time: e2.time }), this;
        }
        sendStop(e2 = {}) {
          return this.send([n.SYSTEM_MESSAGES.stop], { time: e2.time }), this;
        }
        sendActiveSensing(e2 = {}) {
          return this.send([n.SYSTEM_MESSAGES.activesensing], { time: e2.time }), this;
        }
        sendReset(e2 = {}) {
          return this.send([n.SYSTEM_MESSAGES.reset], { time: e2.time }), this;
        }
        sendTuningRequest(e2 = {}) {
          return d.validation && console.warn("The sendTuningRequest() method has been deprecated. Use sendTuningRequest() instead."), this.sendTuneRequest(e2);
        }
        sendKeyAftertouch(e2, t2, r2 = {}) {
          return null == r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].sendKeyAftertouch(e2, t2, r2);
          }), this;
        }
        sendControlChange(e2, t2, r2 = {}, i2 = {}) {
          if (d.validation && (Array.isArray(r2) || Number.isInteger(r2) || "all" === r2)) {
            const e3 = r2;
            (r2 = i2).channels = e3, "all" === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].sendControlChange(e2, t2, r2);
          }), this;
        }
        sendPitchBendRange(e2 = 0, t2 = 0, r2 = {}) {
          return null == r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].sendPitchBendRange(e2, t2, r2);
          }), this;
        }
        setPitchBendRange(e2 = 0, t2 = 0, r2 = "all", s2 = {}) {
          return d.validation && (console.warn("The setPitchBendRange() method is deprecated. Use sendPitchBendRange() instead."), s2.channels = r2, "all" === s2.channels && (s2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendPitchBendRange(e2, t2, s2);
        }
        sendRpnValue(e2, t2, r2 = {}) {
          return null == r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].sendRpnValue(e2, t2, r2);
          }), this;
        }
        setRegisteredParameter(e2, t2 = [], r2 = "all", s2 = {}) {
          return d.validation && (console.warn("The setRegisteredParameter() method is deprecated. Use sendRpnValue() instead."), s2.channels = r2, "all" === s2.channels && (s2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendRpnValue(e2, t2, s2);
        }
        sendChannelAftertouch(e2, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendChannelAftertouch(e2, t2);
          }), this;
        }
        sendPitchBend(e2, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendPitchBend(e2, t2);
          }), this;
        }
        sendProgramChange(e2 = 0, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendProgramChange(e2, t2);
          }), this;
        }
        sendModulationRange(e2, t2, r2 = {}) {
          return null == r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].sendModulationRange(e2, t2, r2);
          }), this;
        }
        setModulationRange(e2 = 0, t2 = 0, r2 = "all", s2 = {}) {
          return d.validation && (console.warn("The setModulationRange() method is deprecated. Use sendModulationRange() instead."), s2.channels = r2, "all" === s2.channels && (s2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendModulationRange(e2, t2, s2);
        }
        sendMasterTuning(e2, t2 = {}) {
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendMasterTuning(e2, t2);
          }), this;
        }
        setMasterTuning(e2, t2 = {}, r2 = {}) {
          return d.validation && (console.warn("The setMasterTuning() method is deprecated. Use sendMasterTuning() instead."), r2.channels = t2, "all" === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendMasterTuning(e2, r2);
        }
        sendTuningProgram(e2, t2 = {}) {
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendTuningProgram(e2, t2);
          }), this;
        }
        setTuningProgram(e2, t2 = "all", r2 = {}) {
          return d.validation && (console.warn("The setTuningProgram() method is deprecated. Use sendTuningProgram() instead."), r2.channels = t2, "all" === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendTuningProgram(e2, r2);
        }
        sendTuningBank(e2 = 0, t2 = {}) {
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendTuningBank(e2, t2);
          }), this;
        }
        setTuningBank(e2, t2 = "all", r2 = {}) {
          return d.validation && (console.warn("The setTuningBank() method is deprecated. Use sendTuningBank() instead."), r2.channels = t2, "all" === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendTuningBank(e2, r2);
        }
        sendChannelMode(e2, t2 = 0, r2 = {}, i2 = {}) {
          if (d.validation && (Array.isArray(r2) || Number.isInteger(r2) || "all" === r2)) {
            const e3 = r2;
            (r2 = i2).channels = e3, "all" === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].sendChannelMode(e2, t2, r2);
          }), this;
        }
        sendAllSoundOff(e2 = {}) {
          return null == e2.channels && (e2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(e2.channels).forEach((t2) => {
            this.channels[t2].sendAllSoundOff(e2);
          }), this;
        }
        sendAllNotesOff(e2 = {}) {
          return null == e2.channels && (e2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(e2.channels).forEach((t2) => {
            this.channels[t2].sendAllNotesOff(e2);
          }), this;
        }
        sendResetAllControllers(e2 = {}, t2 = {}) {
          if (d.validation && (Array.isArray(e2) || Number.isInteger(e2) || "all" === e2)) {
            const r2 = e2;
            (e2 = t2).channels = r2, "all" === e2.channels && (e2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == e2.channels && (e2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(e2.channels).forEach((t3) => {
            this.channels[t3].sendResetAllControllers(e2);
          }), this;
        }
        sendPolyphonicMode(e2, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendPolyphonicMode(e2, t2);
          }), this;
        }
        sendLocalControl(e2, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendLocalControl(e2, t2);
          }), this;
        }
        sendOmniMode(e2, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendOmniMode(e2, t2);
          }), this;
        }
        sendNrpnValue(e2, t2, r2 = {}) {
          return null == r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].sendNrpnValue(e2, t2, r2);
          }), this;
        }
        setNonRegisteredParameter(e2, t2 = [], r2 = "all", s2 = {}) {
          return d.validation && (console.warn("The setNonRegisteredParameter() method is deprecated. Use sendNrpnValue() instead."), s2.channels = r2, "all" === s2.channels && (s2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendNrpnValue(e2, t2, s2);
        }
        sendRpnIncrement(e2, t2 = {}) {
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendRpnIncrement(e2, t2);
          }), this;
        }
        incrementRegisteredParameter(e2, t2 = "all", r2 = {}) {
          return d.validation && (console.warn("The incrementRegisteredParameter() method is deprecated. Use sendRpnIncrement() instead."), r2.channels = t2, "all" === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendRpnIncrement(e2, r2);
        }
        sendRpnDecrement(e2, t2 = {}) {
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendRpnDecrement(e2, t2);
          }), this;
        }
        decrementRegisteredParameter(e2, t2 = "all", r2 = {}) {
          return d.validation && (console.warn("The decrementRegisteredParameter() method is deprecated. Use sendRpnDecrement() instead."), r2.channels = t2, "all" === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS)), this.sendRpnDecrement(e2, r2);
        }
        sendNoteOff(e2, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendNoteOff(e2, t2);
          }), this;
        }
        stopNote(e2, t2) {
          return this.sendNoteOff(e2, t2);
        }
        playNote(e2, t2 = {}, r2 = {}) {
          if (d.validation && (t2.rawVelocity && console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' instead."), t2.velocity && console.warn("The 'velocity' option is deprecated. Use 'velocity' instead."), Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].playNote(e2, t2);
          }), this;
        }
        sendNoteOn(e2, t2 = {}, r2 = {}) {
          if (d.validation && (Array.isArray(t2) || Number.isInteger(t2) || "all" === t2)) {
            const e3 = t2;
            (t2 = r2).channels = e3, "all" === t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS);
          }
          return null == t2.channels && (t2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(t2.channels).forEach((n2) => {
            this.channels[n2].sendNoteOn(e2, t2);
          }), this;
        }
        get name() {
          return this._midiOutput.name;
        }
        get id() {
          return this._midiOutput.id;
        }
        get connection() {
          return this._midiOutput.connection;
        }
        get manufacturer() {
          return this._midiOutput.manufacturer;
        }
        get state() {
          return this._midiOutput.state;
        }
        get type() {
          return this._midiOutput.type;
        }
        get octaveOffset() {
          return this._octaveOffset;
        }
        set octaveOffset(e2) {
          if (this.validation && (e2 = parseInt(e2), isNaN(e2)))
            throw new TypeError("The 'octaveOffset' property must be an integer.");
          this._octaveOffset = e2;
        }
      };
      o = class {
        constructor(e2 = [], t2 = {}) {
          this.destinations = [], this.types = [...Object.keys(n.SYSTEM_MESSAGES), ...Object.keys(n.CHANNEL_MESSAGES)], this.channels = n.MIDI_CHANNEL_NUMBERS, this.suspended = false, Array.isArray(e2) || (e2 = [e2]), t2.types && !Array.isArray(t2.types) && (t2.types = [t2.types]), t2.channels && !Array.isArray(t2.channels) && (t2.channels = [t2.channels]), d.validation && (e2.forEach((e3) => {
            if (!(e3 instanceof a))
              throw new TypeError("Destinations must be of type 'Output'.");
          }), void 0 !== t2.types && t2.types.forEach((e3) => {
            if (!n.SYSTEM_MESSAGES.hasOwnProperty(e3) && !n.CHANNEL_MESSAGES.hasOwnProperty(e3))
              throw new TypeError("Type must be a valid message type.");
          }), void 0 !== t2.channels && t2.channels.forEach((e3) => {
            if (!n.MIDI_CHANNEL_NUMBERS.includes(e3))
              throw new TypeError("MIDI channel must be between 1 and 16.");
          })), this.destinations = e2, t2.types && (this.types = t2.types), t2.channels && (this.channels = t2.channels);
        }
        forward(e2) {
          this.suspended || this.types.includes(e2.type) && (e2.channel && !this.channels.includes(e2.channel) || this.destinations.forEach((t2) => {
            (!d.validation || t2 instanceof a) && t2.send(e2);
          }));
        }
      };
      l = class extends e {
        constructor(e2, t2) {
          super(), this._input = e2, this._number = t2, this._octaveOffset = 0, this._nrpnBuffer = [], this._rpnBuffer = [], this.parameterNumberEventsEnabled = true, this.notesState = new Array(128).fill(false);
        }
        destroy() {
          this._input = null, this._number = null, this._octaveOffset = 0, this._nrpnBuffer = [], this.notesState = new Array(128).fill(false), this.parameterNumberEventsEnabled = false, this.removeListener();
        }
        _processMidiMessageEvent(e2) {
          const t2 = Object.assign({}, e2);
          t2.port = this.input, t2.target = this, t2.type = "midimessage", this.emit(t2.type, t2), this._parseEventForStandardMessages(t2);
        }
        _parseEventForStandardMessages(e2) {
          const t2 = Object.assign({}, e2);
          t2.type = t2.message.type || "unknownmessage";
          const i2 = e2.message.dataBytes[0], a2 = e2.message.dataBytes[1];
          if ("noteoff" === t2.type || "noteon" === t2.type && 0 === a2)
            this.notesState[i2] = false, t2.type = "noteoff", t2.note = new r(s.offsetNumber(i2, this.octaveOffset + this.input.octaveOffset + d.octaveOffset), { rawAttack: 0, rawRelease: a2 }), t2.value = s.from7bitToFloat(a2), t2.rawValue = a2, t2.velocity = t2.note.release, t2.rawVelocity = t2.note.rawRelease;
          else if ("noteon" === t2.type)
            this.notesState[i2] = true, t2.note = new r(s.offsetNumber(i2, this.octaveOffset + this.input.octaveOffset + d.octaveOffset), { rawAttack: a2 }), t2.value = s.from7bitToFloat(a2), t2.rawValue = a2, t2.velocity = t2.note.attack, t2.rawVelocity = t2.note.rawAttack;
          else if ("keyaftertouch" === t2.type)
            t2.note = new r(s.offsetNumber(i2, this.octaveOffset + this.input.octaveOffset + d.octaveOffset)), t2.value = s.from7bitToFloat(a2), t2.rawValue = a2, t2.identifier = t2.note.identifier, t2.key = t2.note.number, t2.rawKey = i2;
          else if ("controlchange" === t2.type) {
            t2.controller = { number: i2, name: n.CONTROL_CHANGE_MESSAGES[i2].name, description: n.CONTROL_CHANGE_MESSAGES[i2].description, position: n.CONTROL_CHANGE_MESSAGES[i2].position }, t2.subtype = t2.controller.name || "controller" + i2, t2.value = s.from7bitToFloat(a2), t2.rawValue = a2;
            const e3 = Object.assign({}, t2);
            e3.type = `${t2.type}-controller${i2}`, delete e3.subtype, this.emit(e3.type, e3);
            const r2 = Object.assign({}, t2);
            r2.type = t2.type + "-" + n.CONTROL_CHANGE_MESSAGES[i2].name, delete r2.subtype, 0 !== r2.type.indexOf("controller") && this.emit(r2.type, r2), t2.message.dataBytes[0] >= 120 && this._parseChannelModeMessage(t2), this.parameterNumberEventsEnabled && this._isRpnOrNrpnController(t2.message.dataBytes[0]) && this._parseEventForParameterNumber(t2);
          } else
            "programchange" === t2.type ? (t2.value = i2, t2.rawValue = t2.value) : "channelaftertouch" === t2.type ? (t2.value = s.from7bitToFloat(i2), t2.rawValue = i2) : "pitchbend" === t2.type ? (t2.value = ((a2 << 7) + i2 - 8192) / 8192, t2.rawValue = (a2 << 7) + i2) : t2.type = "unknownmessage";
          this.emit(t2.type, t2);
        }
        _parseChannelModeMessage(e2) {
          const t2 = Object.assign({}, e2);
          t2.type = t2.controller.name, "localcontrol" === t2.type && (t2.value = 127 === t2.message.data[2], t2.rawValue = t2.message.data[2]), "omnimodeon" === t2.type ? (t2.type = "omnimode", t2.value = true, t2.rawValue = t2.message.data[2]) : "omnimodeoff" === t2.type && (t2.type = "omnimode", t2.value = false, t2.rawValue = t2.message.data[2]), "monomodeon" === t2.type ? (t2.type = "monomode", t2.value = true, t2.rawValue = t2.message.data[2]) : "polymodeon" === t2.type && (t2.type = "monomode", t2.value = false, t2.rawValue = t2.message.data[2]), this.emit(t2.type, t2);
        }
        _parseEventForParameterNumber(e2) {
          const t2 = e2.message.dataBytes[0], n2 = e2.message.dataBytes[1];
          99 === t2 || 101 === t2 ? (this._nrpnBuffer = [], this._rpnBuffer = [], 99 === t2 ? this._nrpnBuffer = [e2.message] : 127 !== n2 && (this._rpnBuffer = [e2.message])) : 98 === t2 || 100 === t2 ? 98 === t2 ? (this._rpnBuffer = [], 1 === this._nrpnBuffer.length ? this._nrpnBuffer.push(e2.message) : this._nrpnBuffer = []) : (this._nrpnBuffer = [], 1 === this._rpnBuffer.length && 127 !== n2 ? this._rpnBuffer.push(e2.message) : this._rpnBuffer = []) : 6 !== t2 && 38 !== t2 && 96 !== t2 && 97 !== t2 || (2 === this._rpnBuffer.length ? this._dispatchParameterNumberEvent("rpn", this._rpnBuffer[0].dataBytes[1], this._rpnBuffer[1].dataBytes[1], e2) : 2 === this._nrpnBuffer.length ? this._dispatchParameterNumberEvent("nrpn", this._nrpnBuffer[0].dataBytes[1], this._nrpnBuffer[1].dataBytes[1], e2) : (this._nrpnBuffer = [], this._rpnBuffer = []));
        }
        _isRpnOrNrpnController(e2) {
          return 6 === e2 || 38 === e2 || 96 === e2 || 97 === e2 || 98 === e2 || 99 === e2 || 100 === e2 || 101 === e2;
        }
        _dispatchParameterNumberEvent(e2, t2, r2, i2) {
          e2 = "nrpn" === e2 ? "nrpn" : "rpn";
          const a2 = { target: i2.target, timestamp: i2.timestamp, message: i2.message, parameterMsb: t2, parameterLsb: r2, value: s.from7bitToFloat(i2.message.dataBytes[1]), rawValue: i2.message.dataBytes[1] };
          a2.parameter = "rpn" === e2 ? Object.keys(n.REGISTERED_PARAMETERS).find((e3) => n.REGISTERED_PARAMETERS[e3][0] === t2 && n.REGISTERED_PARAMETERS[e3][1] === r2) : (t2 << 7) + r2;
          const o2 = n.CONTROL_CHANGE_MESSAGES[i2.message.dataBytes[0]].name;
          a2.type = `${e2}-${o2}`, this.emit(a2.type, a2);
          const l2 = Object.assign({}, a2);
          "nrpn-dataincrement" === l2.type ? l2.type = "nrpn-databuttonincrement" : "nrpn-datadecrement" === l2.type ? l2.type = "nrpn-databuttondecrement" : "rpn-dataincrement" === l2.type ? l2.type = "rpn-databuttonincrement" : "rpn-datadecrement" === l2.type && (l2.type = "rpn-databuttondecrement"), this.emit(l2.type, l2), a2.type = e2, a2.subtype = o2, this.emit(a2.type, a2);
        }
        getChannelModeByNumber(e2) {
          return d.validation && (console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class."), e2 = Math.floor(e2)), s.getChannelModeByNumber(e2);
        }
        getCcNameByNumber(e2) {
          if (d.validation && (console.warn("The 'getCcNameByNumber()' method has been moved to the 'Utilities' class."), !((e2 = parseInt(e2)) >= 0 && e2 <= 127)))
            throw new RangeError("Invalid control change number.");
          return s.getCcNameByNumber(e2);
        }
        getNoteState(e2) {
          e2 instanceof r && (e2 = e2.identifier);
          const t2 = s.guessNoteNumber(e2, d.octaveOffset + this.input.octaveOffset + this.octaveOffset);
          return this.notesState[t2];
        }
        get octaveOffset() {
          return this._octaveOffset;
        }
        set octaveOffset(e2) {
          if (this.validation && (e2 = parseInt(e2), isNaN(e2)))
            throw new TypeError("The 'octaveOffset' property must be an integer.");
          this._octaveOffset = e2;
        }
        get input() {
          return this._input;
        }
        get number() {
          return this._number;
        }
        get nrpnEventsEnabled() {
          return this.parameterNumberEventsEnabled;
        }
        set nrpnEventsEnabled(e2) {
          this.validation && (e2 = !!e2), this.parameterNumberEventsEnabled = e2;
        }
      };
      c = class {
        constructor(e2) {
          this.rawData = e2, this.data = Array.from(this.rawData), this.statusByte = this.rawData[0], this.rawDataBytes = this.rawData.slice(1), this.dataBytes = this.data.slice(1), this.isChannelMessage = false, this.isSystemMessage = false, this.command = void 0, this.channel = void 0, this.manufacturerId = void 0, this.type = void 0, this.statusByte < 240 ? (this.isChannelMessage = true, this.command = this.statusByte >> 4, this.channel = 1 + (15 & this.statusByte)) : (this.isSystemMessage = true, this.command = this.statusByte), this.isChannelMessage ? this.type = s.getPropertyByValue(n.CHANNEL_MESSAGES, this.command) : this.isSystemMessage && (this.type = s.getPropertyByValue(n.SYSTEM_MESSAGES, this.command)), this.statusByte === n.SYSTEM_MESSAGES.sysex && (0 === this.dataBytes[0] ? (this.manufacturerId = this.dataBytes.slice(0, 3), this.dataBytes = this.dataBytes.slice(3, this.rawDataBytes.length - 1), this.rawDataBytes = this.rawDataBytes.slice(3, this.rawDataBytes.length - 1)) : (this.manufacturerId = [this.dataBytes[0]], this.dataBytes = this.dataBytes.slice(1, this.dataBytes.length - 1), this.rawDataBytes = this.rawDataBytes.slice(1, this.rawDataBytes.length - 1)));
        }
      };
      h = class extends e {
        constructor(e2) {
          super(), this._midiInput = e2, this._octaveOffset = 0, this.channels = [];
          for (let e3 = 1; e3 <= 16; e3++)
            this.channels[e3] = new l(this, e3);
          this._forwarders = [], this._midiInput.onstatechange = this._onStateChange.bind(this), this._midiInput.onmidimessage = this._onMidiMessage.bind(this);
        }
        async destroy() {
          this.removeListener(), this.channels.forEach((e2) => e2.destroy()), this.channels = [], this._forwarders = [], this._midiInput && (this._midiInput.onstatechange = null, this._midiInput.onmidimessage = null), await this.close(), this._midiInput = null;
        }
        _onStateChange(e2) {
          let t2 = { timestamp: d.time, target: this, port: this };
          "open" === e2.port.connection ? (t2.type = "opened", this.emit("opened", t2)) : "closed" === e2.port.connection && "connected" === e2.port.state ? (t2.type = "closed", this.emit("closed", t2)) : "closed" === e2.port.connection && "disconnected" === e2.port.state ? (t2.type = "disconnected", t2.port = { connection: e2.port.connection, id: e2.port.id, manufacturer: e2.port.manufacturer, name: e2.port.name, state: e2.port.state, type: e2.port.type }, this.emit("disconnected", t2)) : "pending" === e2.port.connection && "disconnected" === e2.port.state || console.warn("This statechange event was not caught: ", e2.port.connection, e2.port.state);
        }
        _onMidiMessage(e2) {
          const t2 = new c(e2.data), n2 = { port: this, target: this, message: t2, timestamp: e2.timeStamp, type: "midimessage", data: t2.data, rawData: t2.data, statusByte: t2.data[0], dataBytes: t2.dataBytes };
          this.emit("midimessage", n2), t2.isSystemMessage ? this._parseEvent(n2) : t2.isChannelMessage && this.channels[t2.channel]._processMidiMessageEvent(n2), this._forwarders.forEach((e3) => e3.forward(t2));
        }
        _parseEvent(e2) {
          const t2 = Object.assign({}, e2);
          t2.type = t2.message.type || "unknownmidimessage", "songselect" === t2.type && (t2.song = e2.data[1] + 1, t2.value = e2.data[1], t2.rawValue = t2.value), this.emit(t2.type, t2);
        }
        async open() {
          try {
            await this._midiInput.open();
          } catch (e2) {
            return Promise.reject(e2);
          }
          return Promise.resolve(this);
        }
        async close() {
          if (!this._midiInput)
            return Promise.resolve(this);
          try {
            await this._midiInput.close();
          } catch (e2) {
            return Promise.reject(e2);
          }
          return Promise.resolve(this);
        }
        getChannelModeByNumber() {
          d.validation && console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class.");
        }
        addListener(e2, t2, r2 = {}) {
          if (d.validation && "function" == typeof r2) {
            let e3 = null != t2 ? [].concat(t2) : void 0;
            t2 = r2, r2 = { channels: e3 };
          }
          if (n.CHANNEL_EVENTS.includes(e2)) {
            void 0 === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS);
            let i2 = [];
            return s.sanitizeChannels(r2.channels).forEach((n2) => {
              i2.push(this.channels[n2].addListener(e2, t2, r2));
            }), i2;
          }
          return super.addListener(e2, t2, r2);
        }
        addOneTimeListener(e2, t2, n2 = {}) {
          return n2.remaining = 1, this.addListener(e2, t2, n2);
        }
        on(e2, t2, n2, r2) {
          return this.addListener(e2, t2, n2, r2);
        }
        hasListener(e2, t2, r2 = {}) {
          if (d.validation && "function" == typeof r2) {
            let e3 = [].concat(t2);
            t2 = r2, r2 = { channels: e3 };
          }
          return n.CHANNEL_EVENTS.includes(e2) ? (void 0 === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), s.sanitizeChannels(r2.channels).every((n2) => this.channels[n2].hasListener(e2, t2))) : super.hasListener(e2, t2);
        }
        removeListener(e2, t2, r2 = {}) {
          if (d.validation && "function" == typeof r2) {
            let e3 = [].concat(t2);
            t2 = r2, r2 = { channels: e3 };
          }
          if (void 0 === r2.channels && (r2.channels = n.MIDI_CHANNEL_NUMBERS), null == e2)
            return s.sanitizeChannels(r2.channels).forEach((e3) => {
              this.channels[e3] && this.channels[e3].removeListener();
            }), super.removeListener();
          n.CHANNEL_EVENTS.includes(e2) ? s.sanitizeChannels(r2.channels).forEach((n2) => {
            this.channels[n2].removeListener(e2, t2, r2);
          }) : super.removeListener(e2, t2, r2);
        }
        addForwarder(e2, t2 = {}) {
          let n2;
          return n2 = e2 instanceof o ? e2 : new o(e2, t2), this._forwarders.push(n2), n2;
        }
        removeForwarder(e2) {
          this._forwarders = this._forwarders.filter((t2) => t2 !== e2);
        }
        hasForwarder(e2) {
          return this._forwarders.includes(e2);
        }
        get name() {
          return this._midiInput.name;
        }
        get id() {
          return this._midiInput.id;
        }
        get connection() {
          return this._midiInput.connection;
        }
        get manufacturer() {
          return this._midiInput.manufacturer;
        }
        get octaveOffset() {
          return this._octaveOffset;
        }
        set octaveOffset(e2) {
          if (this.validation && (e2 = parseInt(e2), isNaN(e2)))
            throw new TypeError("The 'octaveOffset' property must be an integer.");
          this._octaveOffset = e2;
        }
        get state() {
          return this._midiInput.state;
        }
        get type() {
          return this._midiInput.type;
        }
        get nrpnEventsEnabled() {
          return d.validation && console.warn("The 'nrpnEventsEnabled' property has been moved to the 'InputChannel' class."), false;
        }
      };
      d = new class extends e {
        constructor() {
          super(), this.defaults = { note: { attack: s.from7bitToFloat(64), release: s.from7bitToFloat(64), duration: 1 / 0 } }, this.interface = null, this.validation = true, this._inputs = [], this._disconnectedInputs = [], this._outputs = [], this._disconnectedOutputs = [], this._stateChangeQueue = [], this._octaveOffset = 0;
        }
        async enable(e2 = {}, t2 = false) {
          if (s.isNode) {
            try {
              window.navigator;
            } catch (e3) {
              global.navigator = await Object.getPrototypeOf(async function() {
              }).constructor('\n        let jzz = await import("jzz");\n        return jzz.default;\n        ')();
            }
            try {
              performance;
            } catch (e3) {
              global.performance = await Object.getPrototypeOf(async function() {
              }).constructor('\n        let perf_hooks = await import("perf_hooks");\n        return perf_hooks.performance;\n        ')();
            }
          }
          if (this.validation = false !== e2.validation, this.validation && ("function" == typeof e2 && (e2 = { callback: e2, sysex: t2 }), t2 && (e2.sysex = true)), this.enabled)
            return "function" == typeof e2.callback && e2.callback(), Promise.resolve();
          const n2 = { timestamp: this.time, target: this, type: "error", error: void 0 }, r2 = { timestamp: this.time, target: this, type: "midiaccessgranted" }, i2 = { timestamp: this.time, target: this, type: "enabled" };
          try {
            "function" == typeof e2.requestMIDIAccessFunction ? this.interface = await e2.requestMIDIAccessFunction({ sysex: e2.sysex, software: e2.software }) : this.interface = await navigator.requestMIDIAccess({ sysex: e2.sysex, software: e2.software });
          } catch (t3) {
            return n2.error = t3, this.emit("error", n2), "function" == typeof e2.callback && e2.callback(t3), Promise.reject(t3);
          }
          this.emit("midiaccessgranted", r2), this.interface.onstatechange = this._onInterfaceStateChange.bind(this);
          try {
            await this._updateInputsAndOutputs();
          } catch (t3) {
            return n2.error = t3, this.emit("error", n2), "function" == typeof e2.callback && e2.callback(t3), Promise.reject(t3);
          }
          return this.emit("enabled", i2), "function" == typeof e2.callback && e2.callback(), Promise.resolve(this);
        }
        async disable() {
          return this._destroyInputsAndOutputs().then(() => {
            navigator && "function" == typeof navigator.close && navigator.close(), this.interface && (this.interface.onstatechange = void 0), this.interface = null;
            let e2 = { timestamp: this.time, target: this, type: "disabled" };
            this.emit("disabled", e2), this.removeListener();
          });
        }
        getInputById(e2, t2 = { disconnected: false }) {
          if (this.validation) {
            if (!this.enabled)
              throw new Error("WebMidi is not enabled.");
            if (!e2)
              return;
          }
          if (t2.disconnected) {
            for (let t3 = 0; t3 < this._disconnectedInputs.length; t3++)
              if (this._disconnectedInputs[t3].id === e2.toString())
                return this._disconnectedInputs[t3];
          } else
            for (let t3 = 0; t3 < this.inputs.length; t3++)
              if (this.inputs[t3].id === e2.toString())
                return this.inputs[t3];
        }
        getInputByName(e2, t2 = { disconnected: false }) {
          if (this.validation) {
            if (!this.enabled)
              throw new Error("WebMidi is not enabled.");
            if (!e2)
              return;
            e2 = e2.toString();
          }
          if (t2.disconnected) {
            for (let t3 = 0; t3 < this._disconnectedInputs.length; t3++)
              if (~this._disconnectedInputs[t3].name.indexOf(e2))
                return this._disconnectedInputs[t3];
          } else
            for (let t3 = 0; t3 < this.inputs.length; t3++)
              if (~this.inputs[t3].name.indexOf(e2))
                return this.inputs[t3];
        }
        getOutputByName(e2, t2 = { disconnected: false }) {
          if (this.validation) {
            if (!this.enabled)
              throw new Error("WebMidi is not enabled.");
            if (!e2)
              return;
            e2 = e2.toString();
          }
          if (t2.disconnected) {
            for (let t3 = 0; t3 < this._disconnectedOutputs.length; t3++)
              if (~this._disconnectedOutputs[t3].name.indexOf(e2))
                return this._disconnectedOutputs[t3];
          } else
            for (let t3 = 0; t3 < this.outputs.length; t3++)
              if (~this.outputs[t3].name.indexOf(e2))
                return this.outputs[t3];
        }
        getOutputById(e2, t2 = { disconnected: false }) {
          if (this.validation) {
            if (!this.enabled)
              throw new Error("WebMidi is not enabled.");
            if (!e2)
              return;
          }
          if (t2.disconnected) {
            for (let t3 = 0; t3 < this._disconnectedOutputs.length; t3++)
              if (this._disconnectedOutputs[t3].id === e2.toString())
                return this._disconnectedOutputs[t3];
          } else
            for (let t3 = 0; t3 < this.outputs.length; t3++)
              if (this.outputs[t3].id === e2.toString())
                return this.outputs[t3];
        }
        noteNameToNumber(e2) {
          return this.validation && console.warn("The noteNameToNumber() method is deprecated. Use Utilities.toNoteNumber() instead."), s.toNoteNumber(e2, this.octaveOffset);
        }
        getOctave(e2) {
          return this.validation && (console.warn("The getOctave()is deprecated. Use Utilities.getNoteDetails() instead"), e2 = parseInt(e2)), !isNaN(e2) && e2 >= 0 && e2 <= 127 && s.getNoteDetails(s.offsetNumber(e2, this.octaveOffset)).octave;
        }
        sanitizeChannels(e2) {
          return this.validation && console.warn("The sanitizeChannels() method has been moved to the utilities class."), s.sanitizeChannels(e2);
        }
        toMIDIChannels(e2) {
          return this.validation && console.warn("The toMIDIChannels() method has been deprecated. Use Utilities.sanitizeChannels() instead."), s.sanitizeChannels(e2);
        }
        guessNoteNumber(e2) {
          return this.validation && console.warn("The guessNoteNumber() method has been deprecated. Use Utilities.guessNoteNumber() instead."), s.guessNoteNumber(e2, this.octaveOffset);
        }
        getValidNoteArray(e2, t2 = {}) {
          return this.validation && console.warn("The getValidNoteArray() method has been moved to the Utilities.buildNoteArray()"), s.buildNoteArray(e2, t2);
        }
        convertToTimestamp(e2) {
          return this.validation && console.warn("The convertToTimestamp() method has been moved to Utilities.toTimestamp()."), s.toTimestamp(e2);
        }
        async _destroyInputsAndOutputs() {
          let e2 = [];
          return this.inputs.forEach((t2) => e2.push(t2.destroy())), this.outputs.forEach((t2) => e2.push(t2.destroy())), Promise.all(e2).then(() => {
            this._inputs = [], this._outputs = [];
          });
        }
        _onInterfaceStateChange(e2) {
          this._updateInputsAndOutputs();
          let t2 = { timestamp: e2.timeStamp, type: e2.port.state, target: this };
          if ("connected" === e2.port.state && "open" === e2.port.connection) {
            "output" === e2.port.type ? t2.port = this.getOutputById(e2.port.id) : "input" === e2.port.type && (t2.port = this.getInputById(e2.port.id)), this.emit(e2.port.state, t2);
            const n2 = Object.assign({}, t2);
            n2.type = "portschanged", this.emit(n2.type, n2);
          } else if ("disconnected" === e2.port.state && "pending" === e2.port.connection) {
            "input" === e2.port.type ? t2.port = this.getInputById(e2.port.id, { disconnected: true }) : "output" === e2.port.type && (t2.port = this.getOutputById(e2.port.id, { disconnected: true })), this.emit(e2.port.state, t2);
            const n2 = Object.assign({}, t2);
            n2.type = "portschanged", this.emit(n2.type, n2);
          }
        }
        async _updateInputsAndOutputs() {
          return Promise.all([this._updateInputs(), this._updateOutputs()]);
        }
        async _updateInputs() {
          if (!this.interface)
            return;
          for (let e3 = this._inputs.length - 1; e3 >= 0; e3--) {
            const t2 = this._inputs[e3];
            Array.from(this.interface.inputs.values()).find((e4) => e4 === t2._midiInput) || (this._disconnectedInputs.push(t2), this._inputs.splice(e3, 1));
          }
          let e2 = [];
          return this.interface.inputs.forEach((t2) => {
            if (!this._inputs.find((e3) => e3._midiInput === t2)) {
              let n2 = this._disconnectedInputs.find((e3) => e3._midiInput === t2);
              n2 || (n2 = new h(t2)), this._inputs.push(n2), e2.push(n2.open());
            }
          }), Promise.all(e2);
        }
        async _updateOutputs() {
          if (!this.interface)
            return;
          for (let e3 = this._outputs.length - 1; e3 >= 0; e3--) {
            const t2 = this._outputs[e3];
            Array.from(this.interface.outputs.values()).find((e4) => e4 === t2._midiOutput) || (this._disconnectedOutputs.push(t2), this._outputs.splice(e3, 1));
          }
          let e2 = [];
          return this.interface.outputs.forEach((t2) => {
            if (!this._outputs.find((e3) => e3._midiOutput === t2)) {
              let n2 = this._disconnectedOutputs.find((e3) => e3._midiOutput === t2);
              n2 || (n2 = new a(t2)), this._outputs.push(n2), e2.push(n2.open());
            }
          }), Promise.all(e2);
        }
        get enabled() {
          return null !== this.interface;
        }
        get inputs() {
          return this._inputs;
        }
        get isNode() {
          return this.validation && console.warn("WebMidi.isNode has been deprecated. Use Utilities.isNode instead."), s.isNode;
        }
        get isBrowser() {
          return this.validation && console.warn("WebMidi.isBrowser has been deprecated. Use Utilities.isBrowser instead."), s.isBrowser;
        }
        get octaveOffset() {
          return this._octaveOffset;
        }
        set octaveOffset(e2) {
          if (this.validation && (e2 = parseInt(e2), isNaN(e2)))
            throw new TypeError("The 'octaveOffset' property must be an integer.");
          this._octaveOffset = e2;
        }
        get outputs() {
          return this._outputs;
        }
        get supported() {
          return "undefined" != typeof navigator && navigator.requestMIDIAccess;
        }
        get sysexEnabled() {
          return !(!this.interface || !this.interface.sysexEnabled);
        }
        get time() {
          return performance.now();
        }
        get version() {
          return "3.1.5";
        }
        get flavour() {
          return "cjs";
        }
        get CHANNEL_EVENTS() {
          return this.validation && console.warn("The CHANNEL_EVENTS enum has been moved to Enumerations.CHANNEL_EVENTS."), n.CHANNEL_EVENTS;
        }
        get MIDI_SYSTEM_MESSAGES() {
          return this.validation && console.warn("The MIDI_SYSTEM_MESSAGES enum has been moved to Enumerations.SYSTEM_MESSAGES."), n.SYSTEM_MESSAGES;
        }
        get MIDI_CHANNEL_MODE_MESSAGES() {
          return this.validation && console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been moved to Enumerations.CHANNEL_MODE_MESSAGES."), n.CHANNEL_MODE_MESSAGES;
        }
        get MIDI_CONTROL_CHANGE_MESSAGES() {
          return this.validation && console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been replaced by the Enumerations.CONTROL_CHANGE_MESSAGES array."), n.MIDI_CONTROL_CHANGE_MESSAGES;
        }
        get MIDI_REGISTERED_PARAMETER() {
          return this.validation && console.warn("The MIDI_REGISTERED_PARAMETER enum has been moved to Enumerations.REGISTERED_PARAMETERS."), n.REGISTERED_PARAMETERS;
        }
        get NOTES() {
          return this.validation && console.warn("The NOTES enum has been deprecated."), ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        }
      }();
      d.constructor = null;
    }
  });

  // src/initWebMidi.ts
  function init() {
    return initialized ? Promise.resolve() : new Promise((resolve, reject) => {
      d.enable((err) => {
        if (err)
          reject(err);
        else {
          initialized = true;
          resolve();
        }
      });
    });
  }
  var initialized;
  var init_initWebMidi = __esm({
    "src/initWebMidi.ts"() {
      "use strict";
      init_webmidi_esm_min();
      initialized = false;
    }
  });

  // src/Output.ts
  var Output;
  var init_Output = __esm({
    "src/Output.ts"() {
      "use strict";
      init_webmidi_esm_min();
      init_initWebMidi();
      Output = class {
        constructor(name) {
          this.midiOutput = d.outputs.find((i2) => i2.name === name);
        }
        static async create(name) {
          await init();
          return new Output(name);
        }
        panic() {
          var _a;
          (_a = this.midiOutput) == null ? void 0 : _a.sendReset();
        }
      };
    }
  });

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b) {
          d2.__proto__ = b;
        } || function(d2, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d2[p] = b[p];
        };
        __extends2 = function(d2, b) {
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t2) {
          for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
            s2 = arguments[i2];
            for (var p in s2)
              if (Object.prototype.hasOwnProperty.call(s2, p))
                t2[p] = s2[p];
          }
          return t2;
        };
        __rest2 = function(s2, e2) {
          var t2 = {};
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
              t2[p] = s2[p];
          if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
              if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
                t2[p[i2]] = s2[p[i2]];
            }
          return t2;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r2 = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i2 = decorators.length - 1; i2 >= 0; i2--)
              if (d2 = decorators[i2])
                r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
          return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e2) {
                reject(e2);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e2) {
                reject(e2);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t2[0] & 1)
              throw t2[1];
            return t2[1];
          }, trys: [], ops: [] }, f, y, t2, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n2) {
            return function(v) {
              return step([n2, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
                  return t2;
                if (y = 0, t2)
                  op = [op[0] & 2, t2.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t2 = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t2[1]) {
                      _.label = t2[1];
                      t2 = op;
                      break;
                    }
                    if (t2 && _.label < t2[2]) {
                      _.label = t2[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t2[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e2) {
                op = [6, e2];
                y = 0;
              } finally {
                f = t2 = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __createBinding2 = function(o2, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o2[k2] = m[k];
        };
        __exportStar2 = function(m, exports2) {
          for (var p in m)
            if (p !== "default" && !exports2.hasOwnProperty(p))
              exports2[p] = m[p];
        };
        __values2 = function(o2) {
          var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o2[s2], i2 = 0;
          if (m)
            return m.call(o2);
          if (o2 && typeof o2.length === "number")
            return {
              next: function() {
                if (o2 && i2 >= o2.length)
                  o2 = void 0;
                return { value: o2 && o2[i2++], done: !o2 };
              }
            };
          throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o2, n2) {
          var m = typeof Symbol === "function" && o2[Symbol.iterator];
          if (!m)
            return o2;
          var i2 = m.call(o2), r2, ar = [], e2;
          try {
            while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
              ar.push(r2.value);
          } catch (error) {
            e2 = { error };
          } finally {
            try {
              if (r2 && !r2.done && (m = i2["return"]))
                m.call(i2);
            } finally {
              if (e2)
                throw e2.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
            ar = ar.concat(__read2(arguments[i2]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
            s2 += arguments[i2].length;
          for (var r2 = Array(s2), k = 0, i2 = 0; i2 < il; i2++)
            for (var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k++)
              r2[k] = a2[j];
          return r2;
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i2, q = [];
          return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2;
          function verb(n2) {
            if (g[n2])
              i2[n2] = function(v) {
                return new Promise(function(a2, b) {
                  q.push([n2, v, a2, b]) > 1 || resume(n2, v);
                });
              };
          }
          function resume(n2, v) {
            try {
              step(g[n2](v));
            } catch (e2) {
              settle(q[0][3], e2);
            }
          }
          function step(r2) {
            r2.value instanceof __await2 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o2) {
          var i2, p;
          return i2 = {}, verb("next"), verb("throw", function(e2) {
            throw e2;
          }), verb("return"), i2[Symbol.iterator] = function() {
            return this;
          }, i2;
          function verb(n2, f) {
            i2[n2] = o2[n2] ? function(v) {
              return (p = !p) ? { value: __await2(o2[n2](v)), done: n2 === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o2[Symbol.asyncIterator], i2;
          return m ? m.call(o2) : (o2 = typeof __values2 === "function" ? __values2(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2);
          function verb(n2) {
            i2[n2] = o2[n2] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o2[n2](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d2, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d2 });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
          }
          result["default"] = mod;
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
          }
          return privateMap.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
          }
          privateMap.set(receiver, value);
          return value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/tslib/modules/index.js
  var import_tslib, __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet;
  var init_modules = __esm({
    "node_modules/tslib/modules/index.js"() {
      import_tslib = __toESM(require_tslib(), 1);
      ({
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __metadata,
        __awaiter,
        __generator,
        __exportStar,
        __createBinding,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet
      } = import_tslib.default);
    }
  });

  // node_modules/rxjs/_esm5/internal/util/isFunction.js
  function isFunction(x) {
    return typeof x === "function";
  }
  var init_isFunction = __esm({
    "node_modules/rxjs/_esm5/internal/util/isFunction.js"() {
    }
  });

  // node_modules/rxjs/_esm5/internal/config.js
  var _enable_super_gross_mode_that_will_cause_bad_things, config;
  var init_config = __esm({
    "node_modules/rxjs/_esm5/internal/config.js"() {
      _enable_super_gross_mode_that_will_cause_bad_things = false;
      config = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
            var error = /* @__PURE__ */ new Error();
            /* @__PURE__ */ console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
          } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /* @__PURE__ */ console.log("RxJS: Back to a better error behavior. Thank you. <3");
          }
          _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
        }
      };
    }
  });

  // node_modules/rxjs/_esm5/internal/util/hostReportError.js
  function hostReportError(err) {
    setTimeout(function() {
      throw err;
    }, 0);
  }
  var init_hostReportError = __esm({
    "node_modules/rxjs/_esm5/internal/util/hostReportError.js"() {
    }
  });

  // node_modules/rxjs/_esm5/internal/Observer.js
  var empty;
  var init_Observer = __esm({
    "node_modules/rxjs/_esm5/internal/Observer.js"() {
      init_config();
      init_hostReportError();
      empty = {
        closed: true,
        next: function(value) {
        },
        error: function(err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError(err);
          }
        },
        complete: function() {
        }
      };
    }
  });

  // node_modules/rxjs/_esm5/internal/util/isArray.js
  var isArray;
  var init_isArray = __esm({
    "node_modules/rxjs/_esm5/internal/util/isArray.js"() {
      isArray = /* @__PURE__ */ function() {
        return Array.isArray || function(x) {
          return x && typeof x.length === "number";
        };
      }();
    }
  });

  // node_modules/rxjs/_esm5/internal/util/isObject.js
  function isObject(x) {
    return x !== null && typeof x === "object";
  }
  var init_isObject = __esm({
    "node_modules/rxjs/_esm5/internal/util/isObject.js"() {
    }
  });

  // node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionErrorImpl, UnsubscriptionError;
  var init_UnsubscriptionError = __esm({
    "node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js"() {
      UnsubscriptionErrorImpl = /* @__PURE__ */ function() {
        function UnsubscriptionErrorImpl2(errors) {
          Error.call(this);
          this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i2) {
            return i2 + 1 + ") " + err.toString();
          }).join("\n  ") : "";
          this.name = "UnsubscriptionError";
          this.errors = errors;
          return this;
        }
        UnsubscriptionErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
        return UnsubscriptionErrorImpl2;
      }();
      UnsubscriptionError = UnsubscriptionErrorImpl;
    }
  });

  // node_modules/rxjs/_esm5/internal/Subscription.js
  function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function(errs, err) {
      return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
    }, []);
  }
  var Subscription;
  var init_Subscription = __esm({
    "node_modules/rxjs/_esm5/internal/Subscription.js"() {
      init_isArray();
      init_isObject();
      init_isFunction();
      init_UnsubscriptionError();
      Subscription = /* @__PURE__ */ function() {
        function Subscription3(unsubscribe) {
          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
          }
        }
        Subscription3.prototype.unsubscribe = function() {
          var errors;
          if (this.closed) {
            return;
          }
          var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (_parentOrParents instanceof Subscription3) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
              var parent_1 = _parentOrParents[index];
              parent_1.remove(this);
            }
          }
          if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
              this._unsubscribe = void 0;
            }
            try {
              _unsubscribe.call(this);
            } catch (e2) {
              errors = e2 instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e2.errors) : [e2];
            }
          }
          if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
              var sub = _subscriptions[index];
              if (isObject(sub)) {
                try {
                  sub.unsubscribe();
                } catch (e2) {
                  errors = errors || [];
                  if (e2 instanceof UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e2.errors));
                  } else {
                    errors.push(e2);
                  }
                }
              }
            }
          }
          if (errors) {
            throw new UnsubscriptionError(errors);
          }
        };
        Subscription3.prototype.add = function(teardown) {
          var subscription = teardown;
          if (!teardown) {
            return Subscription3.EMPTY;
          }
          switch (typeof teardown) {
            case "function":
              subscription = new Subscription3(teardown);
            case "object":
              if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription3)) {
                var tmp = subscription;
                subscription = new Subscription3();
                subscription._subscriptions = [tmp];
              }
              break;
            default: {
              throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
            }
          }
          var _parentOrParents = subscription._parentOrParents;
          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription3) {
            if (_parentOrParents === this) {
              return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }
          var subscriptions = this._subscriptions;
          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
            subscriptions.push(subscription);
          }
          return subscription;
        };
        Subscription3.prototype.remove = function(subscription) {
          var subscriptions = this._subscriptions;
          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        };
        Subscription3.EMPTY = function(empty2) {
          empty2.closed = true;
          return empty2;
        }(new Subscription3());
        return Subscription3;
      }();
    }
  });

  // node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
  var rxSubscriber;
  var init_rxSubscriber = __esm({
    "node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"() {
      rxSubscriber = /* @__PURE__ */ function() {
        return typeof Symbol === "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
      }();
    }
  });

  // node_modules/rxjs/_esm5/internal/Subscriber.js
  var Subscriber, SafeSubscriber;
  var init_Subscriber = __esm({
    "node_modules/rxjs/_esm5/internal/Subscriber.js"() {
      init_modules();
      init_isFunction();
      init_Observer();
      init_Subscription();
      init_rxSubscriber();
      init_config();
      init_hostReportError();
      Subscriber = /* @__PURE__ */ function(_super) {
        __extends(Subscriber2, _super);
        function Subscriber2(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;
          switch (arguments.length) {
            case 0:
              _this.destination = empty;
              break;
            case 1:
              if (!destinationOrNext) {
                _this.destination = empty;
                break;
              }
              if (typeof destinationOrNext === "object") {
                if (destinationOrNext instanceof Subscriber2) {
                  _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                  _this.destination = destinationOrNext;
                  destinationOrNext.add(_this);
                } else {
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext);
                }
                break;
              }
            default:
              _this.syncErrorThrowable = true;
              _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
              break;
          }
          return _this;
        }
        Subscriber2.prototype[rxSubscriber] = function() {
          return this;
        };
        Subscriber2.create = function(next, error, complete) {
          var subscriber = new Subscriber2(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        };
        Subscriber2.prototype.next = function(value) {
          if (!this.isStopped) {
            this._next(value);
          }
        };
        Subscriber2.prototype.error = function(err) {
          if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
          }
        };
        Subscriber2.prototype.complete = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
          }
        };
        Subscriber2.prototype.unsubscribe = function() {
          if (this.closed) {
            return;
          }
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
        };
        Subscriber2.prototype._next = function(value) {
          this.destination.next(value);
        };
        Subscriber2.prototype._error = function(err) {
          this.destination.error(err);
          this.unsubscribe();
        };
        Subscriber2.prototype._complete = function() {
          this.destination.complete();
          this.unsubscribe();
        };
        Subscriber2.prototype._unsubscribeAndRecycle = function() {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
        };
        return Subscriber2;
      }(Subscription);
      SafeSubscriber = /* @__PURE__ */ function(_super) {
        __extends(SafeSubscriber2, _super);
        function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;
          if (isFunction(observerOrNext)) {
            next = observerOrNext;
          } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
              context = Object.create(observerOrNext);
              if (isFunction(context.unsubscribe)) {
                _this.add(context.unsubscribe.bind(context));
              }
              context.unsubscribe = _this.unsubscribe.bind(_this);
            }
          }
          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
        }
        SafeSubscriber2.prototype.next = function(value) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
              this.unsubscribe();
            }
          }
        };
        SafeSubscriber2.prototype.error = function(err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
              if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);
                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);
                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();
              if (useDeprecatedSynchronousErrorHandling) {
                throw err;
              }
              hostReportError(err);
            } else {
              if (useDeprecatedSynchronousErrorHandling) {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
              } else {
                hostReportError(err);
              }
              this.unsubscribe();
            }
          }
        };
        SafeSubscriber2.prototype.complete = function() {
          var _this = this;
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
              var wrappedComplete = function() {
                return _this._complete.call(_this._context);
              };
              if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);
                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        };
        SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
          try {
            fn.call(this._context, value);
          } catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
              throw err;
            } else {
              hostReportError(err);
            }
          }
        };
        SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
          if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error("bad call");
          }
          try {
            fn.call(this._context, value);
          } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
              parent.syncErrorValue = err;
              parent.syncErrorThrown = true;
              return true;
            } else {
              hostReportError(err);
              return true;
            }
          }
          return false;
        };
        SafeSubscriber2.prototype._unsubscribe = function() {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;
          _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber2;
      }(Subscriber);
    }
  });

  // node_modules/rxjs/_esm5/internal/util/canReportError.js
  function canReportError(observer) {
    while (observer) {
      var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
      if (closed_1 || isStopped) {
        return false;
      } else if (destination && destination instanceof Subscriber) {
        observer = destination;
      } else {
        observer = null;
      }
    }
    return true;
  }
  var init_canReportError = __esm({
    "node_modules/rxjs/_esm5/internal/util/canReportError.js"() {
      init_Subscriber();
    }
  });

  // node_modules/rxjs/_esm5/internal/util/toSubscriber.js
  function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
      if (nextOrObserver instanceof Subscriber) {
        return nextOrObserver;
      }
      if (nextOrObserver[rxSubscriber]) {
        return nextOrObserver[rxSubscriber]();
      }
    }
    if (!nextOrObserver && !error && !complete) {
      return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
  }
  var init_toSubscriber = __esm({
    "node_modules/rxjs/_esm5/internal/util/toSubscriber.js"() {
      init_Subscriber();
      init_rxSubscriber();
      init_Observer();
    }
  });

  // node_modules/rxjs/_esm5/internal/symbol/observable.js
  var observable;
  var init_observable = __esm({
    "node_modules/rxjs/_esm5/internal/symbol/observable.js"() {
      observable = /* @__PURE__ */ function() {
        return typeof Symbol === "function" && Symbol.observable || "@@observable";
      }();
    }
  });

  // node_modules/rxjs/_esm5/internal/util/identity.js
  function identity(x) {
    return x;
  }
  var init_identity = __esm({
    "node_modules/rxjs/_esm5/internal/util/identity.js"() {
    }
  });

  // node_modules/rxjs/_esm5/internal/util/pipe.js
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }
  var init_pipe = __esm({
    "node_modules/rxjs/_esm5/internal/util/pipe.js"() {
      init_identity();
    }
  });

  // node_modules/rxjs/_esm5/internal/Observable.js
  function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
      promiseCtor = config.Promise || Promise;
    }
    if (!promiseCtor) {
      throw new Error("no Promise impl found");
    }
    return promiseCtor;
  }
  var Observable;
  var init_Observable = __esm({
    "node_modules/rxjs/_esm5/internal/Observable.js"() {
      init_canReportError();
      init_toSubscriber();
      init_observable();
      init_pipe();
      init_config();
      Observable = /* @__PURE__ */ function() {
        function Observable3(subscribe) {
          this._isScalar = false;
          if (subscribe) {
            this._subscribe = subscribe;
          }
        }
        Observable3.prototype.lift = function(operator) {
          var observable2 = new Observable3();
          observable2.source = this;
          observable2.operator = operator;
          return observable2;
        };
        Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber(observerOrNext, error, complete);
          if (operator) {
            sink.add(operator.call(sink, this.source));
          } else {
            sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
          }
          if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
              sink.syncErrorThrowable = false;
              if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
              }
            }
          }
          return sink;
        };
        Observable3.prototype._trySubscribe = function(sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
              sink.syncErrorThrown = true;
              sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
              sink.error(err);
            } else {
              console.warn(err);
            }
          }
        };
        Observable3.prototype.forEach = function(next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
              try {
                next(value);
              } catch (err) {
                reject(err);
                if (subscription) {
                  subscription.unsubscribe();
                }
              }
            }, reject, resolve);
          });
        };
        Observable3.prototype._subscribe = function(subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
        };
        Observable3.prototype[observable] = function() {
          return this;
        };
        Observable3.prototype.pipe = function() {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
          }
          if (operations.length === 0) {
            return this;
          }
          return pipeFromArray(operations)(this);
        };
        Observable3.prototype.toPromise = function(promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
              return value = x;
            }, function(err) {
              return reject(err);
            }, function() {
              return resolve(value);
            });
          });
        };
        Observable3.create = function(subscribe) {
          return new Observable3(subscribe);
        };
        return Observable3;
      }();
    }
  });

  // node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
  var ObjectUnsubscribedErrorImpl, ObjectUnsubscribedError;
  var init_ObjectUnsubscribedError = __esm({
    "node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"() {
      ObjectUnsubscribedErrorImpl = /* @__PURE__ */ function() {
        function ObjectUnsubscribedErrorImpl2() {
          Error.call(this);
          this.message = "object unsubscribed";
          this.name = "ObjectUnsubscribedError";
          return this;
        }
        ObjectUnsubscribedErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
        return ObjectUnsubscribedErrorImpl2;
      }();
      ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
    }
  });

  // node_modules/rxjs/_esm5/internal/SubjectSubscription.js
  var SubjectSubscription;
  var init_SubjectSubscription = __esm({
    "node_modules/rxjs/_esm5/internal/SubjectSubscription.js"() {
      init_modules();
      init_Subscription();
      SubjectSubscription = /* @__PURE__ */ function(_super) {
        __extends(SubjectSubscription2, _super);
        function SubjectSubscription2(subject, subscriber) {
          var _this = _super.call(this) || this;
          _this.subject = subject;
          _this.subscriber = subscriber;
          _this.closed = false;
          return _this;
        }
        SubjectSubscription2.prototype.unsubscribe = function() {
          if (this.closed) {
            return;
          }
          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;
          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
          }
          var subscriberIndex = observers.indexOf(this.subscriber);
          if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
          }
        };
        return SubjectSubscription2;
      }(Subscription);
    }
  });

  // node_modules/rxjs/_esm5/internal/Subject.js
  var SubjectSubscriber, Subject, AnonymousSubject;
  var init_Subject = __esm({
    "node_modules/rxjs/_esm5/internal/Subject.js"() {
      init_modules();
      init_Observable();
      init_Subscriber();
      init_Subscription();
      init_ObjectUnsubscribedError();
      init_SubjectSubscription();
      init_rxSubscriber();
      SubjectSubscriber = /* @__PURE__ */ function(_super) {
        __extends(SubjectSubscriber2, _super);
        function SubjectSubscriber2(destination) {
          var _this = _super.call(this, destination) || this;
          _this.destination = destination;
          return _this;
        }
        return SubjectSubscriber2;
      }(Subscriber);
      Subject = /* @__PURE__ */ function(_super) {
        __extends(Subject2, _super);
        function Subject2() {
          var _this = _super.call(this) || this;
          _this.observers = [];
          _this.closed = false;
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
        }
        Subject2.prototype[rxSubscriber] = function() {
          return new SubjectSubscriber(this);
        };
        Subject2.prototype.lift = function(operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        };
        Subject2.prototype.next = function(value) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }
          if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i2 = 0; i2 < len; i2++) {
              copy[i2].next(value);
            }
          }
        };
        Subject2.prototype.error = function(err) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }
          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i2 = 0; i2 < len; i2++) {
            copy[i2].error(err);
          }
          this.observers.length = 0;
        };
        Subject2.prototype.complete = function() {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i2 = 0; i2 < len; i2++) {
            copy[i2].complete();
          }
          this.observers.length = 0;
        };
        Subject2.prototype.unsubscribe = function() {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        };
        Subject2.prototype._trySubscribe = function(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
          }
        };
        Subject2.prototype._subscribe = function(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
          } else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
          } else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
          }
        };
        Subject2.prototype.asObservable = function() {
          var observable2 = new Observable();
          observable2.source = this;
          return observable2;
        };
        Subject2.create = function(destination, source) {
          return new AnonymousSubject(destination, source);
        };
        return Subject2;
      }(Observable);
      AnonymousSubject = /* @__PURE__ */ function(_super) {
        __extends(AnonymousSubject2, _super);
        function AnonymousSubject2(destination, source) {
          var _this = _super.call(this) || this;
          _this.destination = destination;
          _this.source = source;
          return _this;
        }
        AnonymousSubject2.prototype.next = function(value) {
          var destination = this.destination;
          if (destination && destination.next) {
            destination.next(value);
          }
        };
        AnonymousSubject2.prototype.error = function(err) {
          var destination = this.destination;
          if (destination && destination.error) {
            this.destination.error(err);
          }
        };
        AnonymousSubject2.prototype.complete = function() {
          var destination = this.destination;
          if (destination && destination.complete) {
            this.destination.complete();
          }
        };
        AnonymousSubject2.prototype._subscribe = function(subscriber) {
          var source = this.source;
          if (source) {
            return this.source.subscribe(subscriber);
          } else {
            return Subscription.EMPTY;
          }
        };
        return AnonymousSubject2;
      }(Subject);
    }
  });

  // node_modules/rxjs/_esm5/internal/operators/map.js
  function map(project, thisArg) {
    return function mapOperation(source) {
      if (typeof project !== "function") {
        throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
      }
      return source.lift(new MapOperator(project, thisArg));
    };
  }
  var MapOperator, MapSubscriber;
  var init_map = __esm({
    "node_modules/rxjs/_esm5/internal/operators/map.js"() {
      init_modules();
      init_Subscriber();
      MapOperator = /* @__PURE__ */ function() {
        function MapOperator2(project, thisArg) {
          this.project = project;
          this.thisArg = thisArg;
        }
        MapOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator2;
      }();
      MapSubscriber = /* @__PURE__ */ function(_super) {
        __extends(MapSubscriber2, _super);
        function MapSubscriber2(destination, project, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.project = project;
          _this.count = 0;
          _this.thisArg = thisArg || _this;
          return _this;
        }
        MapSubscriber2.prototype._next = function(value) {
          var result;
          try {
            result = this.project.call(this.thisArg, value, this.count++);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          this.destination.next(result);
        };
        return MapSubscriber2;
      }(Subscriber);
    }
  });

  // node_modules/rxjs/_esm5/internal/operators/filter.js
  function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
      return source.lift(new FilterOperator(predicate, thisArg));
    };
  }
  var FilterOperator, FilterSubscriber;
  var init_filter = __esm({
    "node_modules/rxjs/_esm5/internal/operators/filter.js"() {
      init_modules();
      init_Subscriber();
      FilterOperator = /* @__PURE__ */ function() {
        function FilterOperator2(predicate, thisArg) {
          this.predicate = predicate;
          this.thisArg = thisArg;
        }
        FilterOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
        };
        return FilterOperator2;
      }();
      FilterSubscriber = /* @__PURE__ */ function(_super) {
        __extends(FilterSubscriber2, _super);
        function FilterSubscriber2(destination, predicate, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.predicate = predicate;
          _this.thisArg = thisArg;
          _this.count = 0;
          return _this;
        }
        FilterSubscriber2.prototype._next = function(value) {
          var result;
          try {
            result = this.predicate.call(this.thisArg, value, this.count++);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          if (result) {
            this.destination.next(value);
          }
        };
        return FilterSubscriber2;
      }(Subscriber);
    }
  });

  // node_modules/rxjs/_esm5/index.js
  var init_esm5 = __esm({
    "node_modules/rxjs/_esm5/index.js"() {
      init_Subject();
    }
  });

  // node_modules/rxjs/_esm5/internal/operators/bufferCount.js
  function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
      startBufferEvery = null;
    }
    return function bufferCountOperatorFunction(source) {
      return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
  }
  var BufferCountOperator, BufferCountSubscriber, BufferSkipCountSubscriber;
  var init_bufferCount = __esm({
    "node_modules/rxjs/_esm5/internal/operators/bufferCount.js"() {
      init_modules();
      init_Subscriber();
      BufferCountOperator = /* @__PURE__ */ function() {
        function BufferCountOperator2(bufferSize, startBufferEvery) {
          this.bufferSize = bufferSize;
          this.startBufferEvery = startBufferEvery;
          if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
          } else {
            this.subscriberClass = BufferSkipCountSubscriber;
          }
        }
        BufferCountOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
        };
        return BufferCountOperator2;
      }();
      BufferCountSubscriber = /* @__PURE__ */ function(_super) {
        __extends(BufferCountSubscriber2, _super);
        function BufferCountSubscriber2(destination, bufferSize) {
          var _this = _super.call(this, destination) || this;
          _this.bufferSize = bufferSize;
          _this.buffer = [];
          return _this;
        }
        BufferCountSubscriber2.prototype._next = function(value) {
          var buffer = this.buffer;
          buffer.push(value);
          if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
          }
        };
        BufferCountSubscriber2.prototype._complete = function() {
          var buffer = this.buffer;
          if (buffer.length > 0) {
            this.destination.next(buffer);
          }
          _super.prototype._complete.call(this);
        };
        return BufferCountSubscriber2;
      }(Subscriber);
      BufferSkipCountSubscriber = /* @__PURE__ */ function(_super) {
        __extends(BufferSkipCountSubscriber2, _super);
        function BufferSkipCountSubscriber2(destination, bufferSize, startBufferEvery) {
          var _this = _super.call(this, destination) || this;
          _this.bufferSize = bufferSize;
          _this.startBufferEvery = startBufferEvery;
          _this.buffers = [];
          _this.count = 0;
          return _this;
        }
        BufferSkipCountSubscriber2.prototype._next = function(value) {
          var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
          this.count++;
          if (count % startBufferEvery === 0) {
            buffers.push([]);
          }
          for (var i2 = buffers.length; i2--; ) {
            var buffer = buffers[i2];
            buffer.push(value);
            if (buffer.length === bufferSize) {
              buffers.splice(i2, 1);
              this.destination.next(buffer);
            }
          }
        };
        BufferSkipCountSubscriber2.prototype._complete = function() {
          var _a = this, buffers = _a.buffers, destination = _a.destination;
          while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
              destination.next(buffer);
            }
          }
          _super.prototype._complete.call(this);
        };
        return BufferSkipCountSubscriber2;
      }(Subscriber);
    }
  });

  // node_modules/rxjs/_esm5/internal/operators/pairwise.js
  function pairwise() {
    return function(source) {
      return source.lift(new PairwiseOperator());
    };
  }
  var PairwiseOperator, PairwiseSubscriber;
  var init_pairwise = __esm({
    "node_modules/rxjs/_esm5/internal/operators/pairwise.js"() {
      init_modules();
      init_Subscriber();
      PairwiseOperator = /* @__PURE__ */ function() {
        function PairwiseOperator2() {
        }
        PairwiseOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new PairwiseSubscriber(subscriber));
        };
        return PairwiseOperator2;
      }();
      PairwiseSubscriber = /* @__PURE__ */ function(_super) {
        __extends(PairwiseSubscriber2, _super);
        function PairwiseSubscriber2(destination) {
          var _this = _super.call(this, destination) || this;
          _this.hasPrev = false;
          return _this;
        }
        PairwiseSubscriber2.prototype._next = function(value) {
          var pair;
          if (this.hasPrev) {
            pair = [this.prev, value];
          } else {
            this.hasPrev = true;
          }
          this.prev = value;
          if (pair) {
            this.destination.next(pair);
          }
        };
        return PairwiseSubscriber2;
      }(Subscriber);
    }
  });

  // node_modules/rxjs/_esm5/operators/index.js
  var init_operators = __esm({
    "node_modules/rxjs/_esm5/operators/index.js"() {
      init_bufferCount();
      init_filter();
      init_map();
      init_pairwise();
    }
  });

  // src/MidiUtils.ts
  var isMatch;
  var init_MidiUtils = __esm({
    "src/MidiUtils.ts"() {
      "use strict";
      isMatch = (e2, note, channel) => {
        return (channel === "all" || channel.toString() === e2.channel.toString()) && (!note || note === `${e2.note.name}${e2.note.octave}`);
      };
    }
  });

  // src/Input.ts
  var Input;
  var init_Input = __esm({
    "src/Input.ts"() {
      "use strict";
      init_initWebMidi();
      init_webmidi_esm_min();
      init_esm5();
      init_operators();
      init_MidiUtils();
      Input = class {
        constructor(name) {
          this.subjects = {
            noteOn: new Subject(),
            noteOff: new Subject(),
            cc: new Subject(),
            clock: new Subject()
          };
          const i2 = d.inputs.find((i3) => i3.name === name);
          if (!i2) {
            return;
          }
          this.midiInput = i2;
          this.midiInput.addListener("noteon", "all", (e2) => {
            this.subjects.noteOn.next(e2);
          });
          this.midiInput.addListener("noteoff", "all", (e2) => {
            this.subjects.noteOff.next(e2);
          });
          this.midiInput.addListener("controlchange", "all", (e2) => {
            this.subjects.cc.next(e2);
          });
          this.midiInput.addListener("clock", "all", (e2) => {
            this.subjects.clock.next(e2);
          });
        }
        static async create(name) {
          await init();
          return new Input(name);
        }
        noteOn(note = "", channel = "all") {
          return this.subjects.noteOn.pipe(filter((e2) => isMatch(e2, note, channel)));
        }
        noteOff(note = "", channel = "all") {
          return this.subjects.noteOff.pipe(filter((e2) => isMatch(e2, note, channel)));
        }
        cc(ccNumber, channel = "all") {
          return this.subjects.cc.pipe(
            filter((e2) => {
              return (channel === "all" || e2.channel === channel) && (!ccNumber || e2.controller.number === ccNumber);
            })
          );
        }
        ccTriger(ccNumber, threshold = 1, channel = "all") {
          return this.subjects.cc.pipe(
            filter((e2) => {
              return (channel === "all" || e2.channel === channel) && e2.controller.number === ccNumber;
            }),
            pairwise(),
            filter((pair) => {
              return pair[0].value < threshold && pair[1].value >= threshold;
            }),
            map(() => true)
          );
        }
        ccBind(ccNumber, key, t2, min = 0, max = 127, channel = "all") {
          return this.cc(ccNumber, channel).subscribe((e2) => {
            const unit = (max - min) / 127;
            t2[key] = min + unit * e2.value;
          });
        }
        clock(division = 1) {
          return this.subjects.clock.pipe(bufferCount(division));
        }
      };
    }
  });

  // src/list.ts
  function listOutputs() {
    init().then(() => {
      d.outputs.forEach((output) => console.log(output.name));
    });
  }
  function listInputs() {
    init().then(() => {
      d.inputs.forEach((inputs) => console.log(inputs.name));
    });
  }
  var init_list = __esm({
    "src/list.ts"() {
      "use strict";
      init_initWebMidi();
      init_webmidi_esm_min();
    }
  });

  // src/browser.js
  var browser_exports = {};
  var init_browser = __esm({
    "src/browser.js"() {
      "use strict";
      init_Output();
      init_Input();
      init_list();
      init_initWebMidi();
      window.listInputs = listOutputs;
      window.listInputs = listInputs;
      window.Output = Output;
      window.Input = Input;
      window.initRmidi = init;
    }
  });

  // src/index.ts
  init_Output();
  init_Input();
  init_list();
  init_initWebMidi();
  init_browser();
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * The `Enumerations` class contains enumerations and arrays of elements used throughout the
 * library. All its properties are static and should be referenced using the class name. For
 * example: `Enumerations.CHANNEL_MESSAGES`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
/**
 * The `Forwarder` class allows the forwarding of MIDI messages to predetermined outputs. When you
 * call its [`forward()`](#forward) method, it will send the specified [`Message`](Message) object
 * to all the outputs listed in its [`destinations`](#destinations) property.
 *
 * If specific channels or message types have been defined in the [`channels`](#channels) or
 * [`types`](#types) properties, only messages matching the channels/types will be forwarded.
 *
 * While it can be manually instantiated, you are more likely to come across a `Forwarder` object as
 * the return value of the [`Input.addForwarder()`](Input#addForwarder) method.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
/**
 * The `InputChannel` class represents a single MIDI input channel (1-16) from a single input
 * device. This object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `InputChannel` objects can be found inside the input's [`channels`](Input#channels)
 * property.
 *
 * @fires InputChannel#midimessage
 * @fires InputChannel#unknownmessage
 *
 * @fires InputChannel#noteoff
 * @fires InputChannel#noteon
 * @fires InputChannel#keyaftertouch
 * @fires InputChannel#programchange
 * @fires InputChannel#channelaftertouch
 * @fires InputChannel#pitchbend
 *
 * @fires InputChannel#allnotesoff
 * @fires InputChannel#allsoundoff
 * @fires InputChannel#localcontrol
 * @fires InputChannel#monomode
 * @fires InputChannel#omnimode
 * @fires InputChannel#resetallcontrollers
 *
 * @fires InputChannel#event:nrpn
 * @fires InputChannel#event:nrpn-dataentrycoarse
 * @fires InputChannel#event:nrpn-dataentryfine
 * @fires InputChannel#event:nrpn-dataincrement
 * @fires InputChannel#event:nrpn-datadecrement
 * @fires InputChannel#event:rpn
 * @fires InputChannel#event:rpn-dataentrycoarse
 * @fires InputChannel#event:rpn-dataentryfine
 * @fires InputChannel#event:rpn-dataincrement
 * @fires InputChannel#event:rpn-datadecrement
 *
 * @fires InputChannel#controlchange
 * @fires InputChannel#event:controlchange-controllerxxx
 * @fires InputChannel#event:controlchange-bankselectcoarse
 * @fires InputChannel#event:controlchange-modulationwheelcoarse
 * @fires InputChannel#event:controlchange-breathcontrollercoarse
 * @fires InputChannel#event:controlchange-footcontrollercoarse
 * @fires InputChannel#event:controlchange-portamentotimecoarse
 * @fires InputChannel#event:controlchange-dataentrycoarse
 * @fires InputChannel#event:controlchange-volumecoarse
 * @fires InputChannel#event:controlchange-balancecoarse
 * @fires InputChannel#event:controlchange-pancoarse
 * @fires InputChannel#event:controlchange-expressioncoarse
 * @fires InputChannel#event:controlchange-effectcontrol1coarse
 * @fires InputChannel#event:controlchange-effectcontrol2coarse
 * @fires InputChannel#event:controlchange-generalpurposecontroller1
 * @fires InputChannel#event:controlchange-generalpurposecontroller2
 * @fires InputChannel#event:controlchange-generalpurposecontroller3
 * @fires InputChannel#event:controlchange-generalpurposecontroller4
 * @fires InputChannel#event:controlchange-bankselectfine
 * @fires InputChannel#event:controlchange-modulationwheelfine
 * @fires InputChannel#event:controlchange-breathcontrollerfine
 * @fires InputChannel#event:controlchange-footcontrollerfine
 * @fires InputChannel#event:controlchange-portamentotimefine
 * @fires InputChannel#event:controlchange-dataentryfine
 * @fires InputChannel#event:controlchange-channelvolumefine
 * @fires InputChannel#event:controlchange-balancefine
 * @fires InputChannel#event:controlchange-panfine
 * @fires InputChannel#event:controlchange-expressionfine
 * @fires InputChannel#event:controlchange-effectcontrol1fine
 * @fires InputChannel#event:controlchange-effectcontrol2fine
 * @fires InputChannel#event:controlchange-damperpedal
 * @fires InputChannel#event:controlchange-portamento
 * @fires InputChannel#event:controlchange-sostenuto
 * @fires InputChannel#event:controlchange-softpedal
 * @fires InputChannel#event:controlchange-legatopedal
 * @fires InputChannel#event:controlchange-hold2
 * @fires InputChannel#event:controlchange-soundvariation
 * @fires InputChannel#event:controlchange-resonance
 * @fires InputChannel#event:controlchange-releasetime
 * @fires InputChannel#event:controlchange-attacktime
 * @fires InputChannel#event:controlchange-brightness
 * @fires InputChannel#event:controlchange-decaytime
 * @fires InputChannel#event:controlchange-vibratorate
 * @fires InputChannel#event:controlchange-vibratodepth
 * @fires InputChannel#event:controlchange-vibratodelay
 * @fires InputChannel#event:controlchange-generalpurposecontroller5
 * @fires InputChannel#event:controlchange-generalpurposecontroller6
 * @fires InputChannel#event:controlchange-generalpurposecontroller7
 * @fires InputChannel#event:controlchange-generalpurposecontroller8
 * @fires InputChannel#event:controlchange-portamentocontrol
 * @fires InputChannel#event:controlchange-highresolutionvelocityprefix
 * @fires InputChannel#event:controlchange-effect1depth
 * @fires InputChannel#event:controlchange-effect2depth
 * @fires InputChannel#event:controlchange-effect3depth
 * @fires InputChannel#event:controlchange-effect4depth
 * @fires InputChannel#event:controlchange-effect5depth
 * @fires InputChannel#event:controlchange-dataincrement
 * @fires InputChannel#event:controlchange-datadecrement
 * @fires InputChannel#event:controlchange-nonregisteredparameterfine
 * @fires InputChannel#event:controlchange-nonregisteredparametercoarse
 * @fires InputChannel#event:controlchange-registeredparameterfine
 * @fires InputChannel#event:controlchange-registeredparametercoarse
 * @fires InputChannel#event:controlchange-allsoundoff
 * @fires InputChannel#event:controlchange-resetallcontrollers
 * @fires InputChannel#event:controlchange-localcontrol
 * @fires InputChannel#event:controlchange-allnotesoff
 * @fires InputChannel#event:controlchange-omnimodeoff
 * @fires InputChannel#event:controlchange-omnimodeon
 * @fires InputChannel#event:controlchange-monomodeon
 * @fires InputChannel#event:controlchange-polymodeon
 * @fires InputChannel#event:
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */
/**
 * The `Input` class represents a single MIDI input port. This object is automatically instantiated
 * by the library according to the host's MIDI subsystem and does not need to be directly
 * instantiated. Instead, you can access all `Input` objects by referring to the
 * [`WebMidi.inputs`](WebMidi#inputs) array. You can also retrieve inputs by using methods such as
 * [`WebMidi.getInputByName()`](WebMidi#getInputByName) and
 * [`WebMidi.getInputById()`](WebMidi#getInputById).
 *
 * Note that a single MIDI device may expose several inputs and/or outputs.
 *
 * **Important**: the `Input` class does not directly fire channel-specific MIDI messages
 * (such as [`noteon`](InputChannel#event:noteon) or
 * [`controlchange`](InputChannel#event:controlchange), etc.). The [`InputChannel`](InputChannel)
 * object does that. However, you can still use the
 * [`Input.addListener()`](#addListener) method to listen to channel-specific events on multiple
 * [`InputChannel`](InputChannel) objects at once.
 *
 * @fires Input#opened
 * @fires Input#disconnected
 * @fires Input#closed
 * @fires Input#midimessage
 *
 * @fires Input#sysex
 * @fires Input#timecode
 * @fires Input#songposition
 * @fires Input#songselect
 * @fires Input#tunerequest
 * @fires Input#clock
 * @fires Input#start
 * @fires Input#continue
 * @fires Input#stop
 * @fires Input#activesensing
 * @fires Input#reset
 *
 * @fires Input#unknownmidimessage
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */
/**
 * The `Message` class represents a single MIDI message. It has several properties that make it
 * easy to make sense of the binary data it contains.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
/**
 * The `Note` class represents a single musical note such as `"D3"`, `"G#4"`, `"F-1"`, `"Gb7"`, etc.
 *
 * `Note` objects can be played back on a single channel by calling
 * [`OutputChannel.playNote()`]{@link OutputChannel#playNote} or, on multiple channels of the same
 * output, by calling [`Output.playNote()`]{@link Output#playNote}.
 *
 * The note has [`attack`](#attack) and [`release`](#release) velocities set at `0.5` by default.
 * These can be changed by passing in the appropriate option. It is also possible to set a
 * system-wide default for attack and release velocities by using the
 * [`WebMidi.defaults`](WebMidi#defaults) property.
 *
 * If you prefer to work with raw MIDI values (`0` to `127`), you can use [`rawAttack`](#rawAttack) and
 * [`rawRelease`](#rawRelease) to both get and set the values.
 *
 * The note may have a [`duration`](#duration). If it does, playback will be automatically stopped
 * when the duration has elapsed by sending a `"noteoff"` event. By default, the duration is set to
 * `Infinity`. In this case, it will never stop playing unless explicitly stopped by calling a
 * method such as [`OutputChannel.stopNote()`]{@link OutputChannel#stopNote},
 * [`Output.stopNote()`]{@link Output#stopNote} or similar.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
/**
 * The `OutputChannel` class represents a single output MIDI channel. `OutputChannel` objects are
 * provided by an [`Output`](Output) port which, itself, is made available by a device. The
 * `OutputChannel` object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `OutputChannel` objects can be found inside the parent output's
 * [`channels`]{@link Output#channels} property.
 *
 * @param {Output} output The [`Output`](Output) this channel belongs to.
 * @param {number} number The MIDI channel number (`1` - `16`).
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */
/**
 * The `Output` class represents a single MIDI output port (not to be confused with a MIDI channel).
 * A port is made available by a MIDI device. A MIDI device can advertise several input and output
 * ports. Each port has 16 MIDI channels which can be accessed via the [`channels`](#channels)
 * property.
 *
 * The `Output` object is automatically instantiated by the library according to the host's MIDI
 * subsystem and should not be directly instantiated.
 *
 * You can access all available `Output` objects by referring to the
 * [`WebMidi.outputs`](WebMidi#outputs) array or by using methods such as
 * [`WebMidi.getOutputByName()`](WebMidi#getOutputByName) or
 * [`WebMidi.getOutputById()`](WebMidi#getOutputById).
 *
 * @fires Output#opened
 * @fires Output#disconnected
 * @fires Output#closed
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */
/**
 * The `Utilities` class contains general-purpose utility methods. All methods are static and
 * should be called using the class name. For example: `Utilities.getNoteDetails("C4")`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
/**
 * The `WebMidi` object makes it easier to work with the low-level Web MIDI API. Basically, it
 * simplifies sending outgoing MIDI messages and reacting to incoming MIDI messages.
 *
 * When using the WebMidi.js library, you should know that the `WebMidi` class has already been
 * instantiated. You cannot instantiate it yourself. If you use the **IIFE** version, you should
 * simply use the global object called `WebMidi`. If you use the **CJS** (CommonJS) or **ESM** (ES6
 * module) version, you get an already-instantiated object when you import the module.
 *
 * @fires WebMidi#connected
 * @fires WebMidi#disabled
 * @fires WebMidi#disconnected
 * @fires WebMidi#enabled
 * @fires WebMidi#error
 * @fires WebMidi#midiaccessgranted
 * @fires WebMidi#portschanged
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */
