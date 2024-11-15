
import {ce} from "../Utils/create-element.js";
import getProductsList from "../api/products.api.js";
import cardElement from "../components/card.js";


export default function fetchAllProducts() {
    let home=ce("div",{
        className:"w-full pt-6 flex flex-wrap  justify-center items-center gap-4"
    });
    getProductsList().then(products=>{
        products.forEach(product=>{
            let card=cardElement(product);
            home.appendChild(card);
        })
    })
    return home;
}

