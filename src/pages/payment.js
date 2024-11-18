import { ce } from "../Utils/create-element.js";
import searchInput from "../components/searchInput.js";
import fetchAllLogo from "./fetchLogo.js";
import most from "./homeMostNav.js";
import fetchAllProducts from "./fetchAllProducts.js";
import searchItem from "../components/searchitem.js";
import paymentCart from "../components/paymentcrat.js";
import footer from "./footer.js";
import footerCart from "../components/footerCart.js";
import cardElementPayment from "../components/cardElementPayment.js";
import fetchFromBasket from "../api/basket.api.js";
import fetchCardFromBasket from "./fetchFromBasket.js";

export default function payment() {
  let payment = ce("div", {
    className:
      "paymentContainer w-full h-screen px-6 flex flex-col justify-between items-center  relative",
    children: [
        //searchBox
      searchItem(),
        //fetch cards from basket
      fetchCardFromBasket(),
        //footer and total price
        ce("div",{
          className:"w-full h-2/8",
          children:[
            paymentCart() , footerCart()
          ]
        })
    ],
  });
  return payment;
}