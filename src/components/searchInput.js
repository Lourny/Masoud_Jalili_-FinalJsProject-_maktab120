import {ce} from "../Utils/create-element.js";
import input from "./input.js";

export default function searchInput() {
    let searchInput = ce("div", {
        className: "flex flex-row ",
        children: [
            ce("img", {
                restAttrs: {src: "./src/assets/image/search.png", id: "searchBtn"},
                className: "w-[50px] h-[50px] bg-white p-1 rounded-tl-md rounded-bl-md cursor-pointer",
            })
            , input()]

    })
    return searchInput;
}