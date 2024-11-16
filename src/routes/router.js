import Navigo from "navigo";

//import onboarding
import loadingPage from "../pages/LoadingPage.js";
import onboardingPage2 from "../pages/onboarding-page-2.js";
import onboardingPage3 from "../pages/onboarding-page-3.js";
import onboardingPage4 from "../pages/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding-page-5.js";
import productFilterByLogo from "../pages/filterByLogoProducts.js";
//import loading
import login from "../pages/login.js";

//import home
import home from "../pages/home.js";
import fe from "../Utils/findElements.js";
import fetchByTitle from "../pages/fetchByTitle.js";


export const router = new Navigo("/");

const changeContents = (target,data) => {
    const root = fe("rootsEl");
    root.innerHTML = "";
    root.append(target(data));
};
const changeContents2 = (page, data) => {
    page(data).then((response => {
        const root = document.getElementById("rootsEl");
        root.innerHTML = "";
        root.append(response);
    }))
};

router
    //router onboarding
    .on("/", () => {
        changeContents(loadingPage);
    })

    .on("/page2", () => {
        changeContents(onboardingPage2);
    })

    .on("/page3", () => {
        changeContents(onboardingPage3);
    })

    .on("/page4", () => {
        changeContents(onboardingPage4);
    })

    .on("/page5", () => {
        changeContents(onboardingPage5);
    })

    //router login
    .on("/login", () => {
        changeContents(login);
    })

    //router home
    .on("/home/:brand", (params) => {
        changeContents(home,params);
    })
    .on("/home", () => {
        changeContents(home);
    })

    .on("/test/:brand", (params) => {
        changeContents2(productFilterByLogo,params);
    })

.on("filterbytitle/:brand",(params)=>{
    changeContents(fetchByTitle,params);
});
