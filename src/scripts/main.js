import {ce} from "../Utils/create-element.js";
import fe from "../Utils/findElements.js";
import layout from "../layout/welcome/layout.js";
import welcome1 from "../pages/onboarding-page-1.js";
let welcome=fe("welcome");
welcome.className="w-full h-dvh";
welcome.appendChild(welcome1());

