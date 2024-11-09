import {ce} from "../Utils/create-element.js";

export default function logo(){
    let logo=ce("div",{className:"logoContainer flex px-3 py-2",children:[ce("img",{restAttrs:{src:"./src/assets/image/img.png"},className:"w-12 h-12"}),
            ce("div", {innerText: 'DigiKala', className: 'p-3  rounded-xl text-white text-xl font-bold '}),]});
    return logo;
}