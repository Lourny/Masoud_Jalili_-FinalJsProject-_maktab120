import {ce} from "../Utils/create-element.js";
import fe from "../Utils/findElements.js";
import loadingPage from "../pages/LoadingPage.js";
import onboardingPage2 from "../pages/onboarding-page-2.js";
import onboardingPage3 from "../pages/onboarding-page-3.js";
import onboardingPage4 from "../pages/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding-page-5.js";
import login from "../pages/login.js";
import fetchAllProducts from "../pages/fetchAllProducts.js";
import getProduct from "../api/products.api.js";
let welcome = fe("welcome");
welcome.className = "w-full h-dvh";
welcome.appendChild(fetchAllProducts());

