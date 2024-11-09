import {ce} from "../Utils/create-element.js";

export default function btn() {
    const btn = ce("button", {
        innerText: "test",
        className: "bg-slate-400 px-3 py-2 rounded-md text-white w-[120px] font-bold text-xl hover:bg-slate-600"
    });
    return btn;
}