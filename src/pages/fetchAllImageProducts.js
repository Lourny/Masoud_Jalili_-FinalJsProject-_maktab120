
import {ce} from "../Utils/create-element.js";
import getProductsList from "../api/products.api.js";
import cardElementPayment from "../components/cardElementPayment.js";


export default function fetchAllImageProducts(data) {
    let home=ce("div",{
        className:"w-full pt-6 flex flex-col justify-center items-center gap-4"
    });
    getProductsList(data).then(products=>{
        products.forEach(product=>{
            let card=cardElementPayment(product);
            home.appendChild(card);
        })
    })
    return home;
}

