import {ce} from "../Utils/create-element.js";
import cardElement from "../components/card.js";
import getProductsLogo from "../api/logo.api.js";
import logoElements from "../components/logoElements.js";


export default function fetchAllLogo() {
    let logoContainer=ce("div",{
        className:"logoContainer  py-3 flex flex-row justify-center items-center flex-wrap gap-10 mb-4 mt-2.5"
    });
    getProductsLogo().then(logos=>{
        logos.forEach(logo=>{
            let logoElement=logoElements(logo);
            logoContainer.appendChild(logoElement);
        })
    })
    return logoContainer;
}