import {ce} from "../Utils/create-element.js";


export default function navbarTitle(logo) {
    let items = ce("div",{
        className:"h-10 flex justify-center items-center px-5 py-2.5 border-2 border-[#343A40] rounded-3xl ",
        children:[
            ce("h1",{
                innerText:logo.brand,
                className:"font-bold leading-5 text-base "
            })
        ]
    })
    return items;
}