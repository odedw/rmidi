import { WebMidi } from "../node_modules/webmidi/dist/esm/webmidi.esm.min.js";

let initialized = false;
export function init(): Promise<void> {
  return initialized
    ? Promise.resolve()
    : new Promise((resolve, reject) => {
        WebMidi.enable((err) => {
          if (err) reject(err);
          else {
            initialized = true;
            resolve();
          }
        });
      });
}
