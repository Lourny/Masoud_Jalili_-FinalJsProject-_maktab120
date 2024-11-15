import {ce} from "../Utils/create-element.js";
import fetchAdiddasProducts from "../pages/fetchAdiddasProducts.js";
import {router} from "../routes/router.js";
import productFilterByLogo from "../pages/filterByLogoProducts";

async function filterByLogo2(e) {
    let path = (e.target.src).toString();
    let nameWithPrefix = path.split("/").at(-1);
    let endpoint = (nameWithPrefix.split(".").at(0)).toString();
    router.navigate(`/test/${endpoint}`);

}

export default function logoElements(logo) {
    let logoelem = ce("div", {
        className: "w-16 h-24 flex flex-col justify-between items-center gap-3 cursor-pointer",
        events: {"click": filterByLogo2}
        ,
        children: [
            ce("div", {
                className: "w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center",
                children: [ce("img", {
                    restAttrs: {src: logo.images},
                    className: "w-8"
                })]
            }),
            ce("div", {
                children: [
                    ce("p", {
                        className: "font-bold text-sm leading-4",
                        innerText: logo.brand
                    })
                ]
            })
        ]
    })
    return logoelem;
}