import { Output } from "./Output";
import { Input } from "./Input";
import * as list from "./list";
import { init } from "./initWebMidi";
window.listInputs = list.listOutputs;
window.listInputs = list.listInputs;
window.Output = Output;
window.Input = Input;
window.initRmidi = init;
