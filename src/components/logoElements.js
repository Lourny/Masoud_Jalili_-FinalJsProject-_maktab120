import {ce} from "../Utils/create-element.js";


export default function logoElements(logo) {
    let logoelem = ce("div",{
        className:"w-16 h-24 flex flex-col justify-between items-center gap-3",
        children:[
            ce("div",{
                className:"w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center",
                children:[ce("img",{
                    restAttrs:{src:logo.images},
                    className:"w-8"
                })]
            }),
            ce("div",{
                children:[
                    ce("p",{
                        className:"font-bold text-sm leading-4",
                        innerText:logo.brand
                    })
                ]
            })
        ]
    })
    return logoelem;
}