import {ce} from "../Utils/create-element.js";
import getProductsLogo from "../api/logo.api.js";
import logoElements from "../components/logoElements.js";
import navbarTitle from "../components/navbarTitle.js";

export default function most() {
    let most = ce("div", {
        className: " mostContainer w-full flex flex-col items-center justify-between gap-5 ",
        children: [
            ce("div", {
                className: "typo w-full flex flex-row justify-between items-center",
                children: [
                    ce("h1", {
                        className: "font-bold leading-5 text-xl",
                        innerText: "Most Popular"
                    }), ce("h1", {
                        className: "font-semibold leading-5 text-lg",
                        innerText: "See All"
                    }),
                ]
            })

        ]
    });
    let titlesContainer=ce("div",{
        className:"w-full flex flex-row justify-start items-center gap-3 overflow-x-auto ",
        children:[
            ce("div",{
                className:"h-10 flex justify-center items-center px-5 py-2.5 border-2 border-[#343A40] bg-[#343A40] rounded-3xl text-white ",
                children:[
                    ce("h1",{
                        innerText:"All",
                        className:"font-semibold leading-5 text-base "
                    })
                ]
            })
        ]

    });
    getProductsLogo().then(logos=>{
        logos.forEach(logo=>{
            let navbarTitleElements=navbarTitle(logo);
            titlesContainer.appendChild(navbarTitleElements);
        })
    })
    most.appendChild(titlesContainer);
    return most;
}

