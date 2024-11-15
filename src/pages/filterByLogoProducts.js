import {ce} from "../Utils/create-element.js";
import fetchAdiddasProducts from "./fetchAdiddasProducts.js";

export default async function productFilterByLogo({data}){
   console.log(data);
    let product= await ce("div",{
        className:" container w-full h-full px-6 flex flex-col justify-center items-center",
        children:[
            ce("div",{
                className:'w-full h-14 flex flex-row justify-center items-center gap-3',
                children:[
                    ce("i",{
                        className:"fa-solid fa-back"
                    }),
                    ce("h1",{
                        className:"font-bold text-xl",
                        children:[
                            data.brand
                        ]
                    })
                ]
            }), fetchAdiddasProducts(data.brand)
        ]
    });
return product;
}