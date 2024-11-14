
import {ce} from "../Utils/create-element.js";
import getProductsList from "../api/products.api.js";


export default function home() {
    let home=ce("div");
    getProductsList().then(products=>{
        products.forEach(product=>{
            let img=ce("img",{
                className:"w-10 h-10",
                restAttrs:{src:product.images}
            });
            home.appendChild(img);
            console.log(product.images)
        })
    })
    return home;
}

