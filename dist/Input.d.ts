import { Input as MidiInput, InputEventNoteon, IMidiChannel, InputEventControlchange, InputEventClock, InputEventNoteoff } from "webmidi";
import { Observable, Subscription } from "rxjs";
export declare class Input {
    midiInput: MidiInput | undefined;
    private subjects;
    constructor(name: string);
    static create(name: string): Promise<Input>;
    noteOn(note?: string, channel?: IMidiChannel): Observable<InputEventNoteon>;
    noteOff(note?: string, channel?: IMidiChannel): Observable<InputEventNoteoff>;
    cc(ccNumber: number, channel?: IMidiChannel): Observable<InputEventControlchange>;
    ccTriger(ccNumber: number, threshold?: number, channel?: IMidiChannel): Observable<boolean>;
    ccBind<T>(ccNumber: number, key: keyof T, t: T, min?: number, max?: number, channel?: IMidiChannel): Subscription;
    clock(division?: number): Observable<InputEventClock[]>;
}
