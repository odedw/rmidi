import WebMidi from "webmidi";

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
