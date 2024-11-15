import {ce} from "./Utils/create-element.js";

export const App = () => {
     let a=ce("div",{
        restAttrs:{id: "rootsEl"},
        className: " w-full h-full flex flex-col",
        children: [""],
    });
    return a;
};