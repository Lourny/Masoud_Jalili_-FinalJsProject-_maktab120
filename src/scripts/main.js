import {ce} from "../Utils/create-element.js";
import fe from "../Utils/findElements.js";
import layout from "../layout/welcome/layout.js";
import wel1 from "../pages/onboarding-page-1.js";
import wel2 from "../pages/onboarding-page-2.js";
import onboardingPage3 from "../pages/onboarding-page-3.js";
import onboardingPage4 from "../pages/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding-page-5.js";
let welcome=fe("welcome");
welcome.className="w-full h-dvh";
welcome.appendChild(onboardingPage5());

