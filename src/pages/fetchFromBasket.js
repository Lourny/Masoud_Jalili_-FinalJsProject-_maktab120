import {ce} from "../Utils/create-element.js";
import getProductsList from "../api/products.api.js";
import cardElementPayment from "../components/cardElementPayment.js";
import fetchFromBasket from "../api/basket.api.js";
import paymentCart from "../components/paymentcrat.js";
import clog from "../Utils/logdata.js";

export default function fetchCardFromBasket() {
    let basketCardsContainer=  ce("div", {
        className: " w-full h-5/8 flex flex-col gap-4 mt-5 overflow-y-scroll overflow-x-hidden",
    });
    fetchFromBasket().then(products=>{
        products.forEach(productss=>{
            let product=productss['0'];
            let basketCard=cardElementPayment(product);
            basketCardsContainer.appendChild(basketCard);
        })
    })
    return basketCardsContainer;
}