import { ce } from "../Utils/create-element.js";
import searchInput from "../components/searchInput.js";
import fetchAllLogo from "./fetchLogo.js";
import most from "./homeMostNav.js";
import fetchAllProducts from "./fetchAllProducts.js";
import searchItem from "../components/searchitem.js";
import paymentCart from "../components/paymentcrat.js";
import footer from "./footer.js";
import footerCart from "../components/footerCart.js";

export default function payment() {
  let payment = ce("div", {
    className:
      "paymentContainer w-full h-screen px-6 flex flex-col justify-between items-center  relative",
    children: [
      searchItem(),
      ce("div", {
        className: " w-full flex flex-col h-6/8 bg-red-800",
        children: [],
      }),
        ce("div",{
          className:"w-full",
          children:[
            paymentCart() , footerCart()
          ]
        })
    ],
  });
  return payment;
}