import {ce} from "../Utils/create-element.js";
import input from "./input.js";

export default function searchInput() {
    let searchInput = ce("div", {
        className: "w-full h-10 flex flex-row justify-center items-center gap-1",
        children: [
            ce("i",{
                className:"fa-solid fa-search text-[#6C757D] w-1/12 text-end"
            })
            , input()]

    })
    return searchInput;
}