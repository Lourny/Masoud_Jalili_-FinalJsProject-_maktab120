import {ce} from "../Utils/create-element.js";

export default function spiner() {
    let spin = ce("div", {
        className: "loading-ring w-[50px] h-[50px] border-8 border-slate-800 border-solid   border-t-[6px] border-t-white rounded-full animate-spin fixed top-[80%]"
    });
    return spin;
}