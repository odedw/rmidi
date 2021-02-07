import { IEventNote, IMidiChannel } from 'webmidi';
interface NoteInformation {
    channel: number;
    note: IEventNote;
}
export declare const isMatch: (e: NoteInformation, note: string, channel: IMidiChannel) => boolean;
export {};
