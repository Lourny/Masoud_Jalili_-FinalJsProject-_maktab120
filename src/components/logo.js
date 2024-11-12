import {ce} from "../Utils/create-element.js";

export default function logo(){
    let logo=ce("div",{className:"logoContainer flex justify-center items-center gap-[12px]",children:[ce("div",{className:"w-[60px] h-[60px] rounded-full bg-[#000000] flex  pl-[16.96px] pt-[8.75px] pr[15.49px] pb-[10.31]",children:[ce("img",{restAttrs:{src:"./src/assets/image/logo.png"},className:"w-[26.54px] h-[39.93px]"})]}),

            ce("h1", {innerText: 'Shoea', className: 'text-[52px] font-bold '}),]});

    return logo;
}