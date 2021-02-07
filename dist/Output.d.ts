import { Output as MidiOutput } from "webmidi";
export declare class Output {
    midiOutput?: MidiOutput;
    private constructor();
    static create(name: string): Promise<Output>;
    sendNote(): void;
    noteOff(): void;
    panic(): void;
}
