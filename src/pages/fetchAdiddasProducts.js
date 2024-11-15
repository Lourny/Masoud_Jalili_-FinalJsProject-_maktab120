
import {ce} from "../Utils/create-element.js";
import cardElement from "../components/card.js";
import getAdiddasProductsList from "../api/addidas.api.js";


export default function fetchAdiddasProducts(endpoint) {
    let home=ce("div",{
        className:"w-full pt-6 flex flex-wrap  justify-center items-center gap-4"
    });
    getAdiddasProductsList(endpoint).then(products=>{
        products.forEach(product=>{
            let card=cardElement(product);
            home.appendChild(card);
        })
    })
    return home;
}

