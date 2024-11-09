import {ce} from "../Utils/create-element.js";
import layout from "../layout/welcome/layout.js";
import fe from "../Utils/findElements.js";
let welcome=fe("welcome");
welcome.className="w-full h-dvh";
welcome.appendChild(layout());
