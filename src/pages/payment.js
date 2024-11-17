import { ce } from "../Utils/create-element.js";
import searchInput from "../components/searchInput.js";
import fetchAllLogo from "./fetchLogo.js";
import most from "./homeMostNav.js";
import fetchAllProducts from "./fetchAllProducts.js";
import searchItem from "../components/searchitem.js";
import paymentCart from "../components/paymentcrat.js";
import footer from "./footer.js";

export default function payment() {
  let payment = ce("div", {
    className:
      "paymentContainer px-6 flex flex-col justify-center items-center relative",
    children: [
      searchItem(),
      ce("div", {
        className: " w-full",
        children: [paymentCart()],
      }),
      footer(),
    ],
  });
  return payment;
}