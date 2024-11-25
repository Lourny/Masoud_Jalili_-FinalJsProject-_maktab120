import fetchFromBasket from "../../api/basket.api";
import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";
import clog from "../../Utils/logdata";
import cardElementPayment from "../confirmationDeleteCard";

export default function orderList() {
  //events---------------
  function goToOrders() {
    router.navigate("/cart");
  }

  let main = ce("div", {
    className: "w-full  h-1/5 ",
    children: [
      ce("h1", {
        className: "font-bold text-lg mb-3 ",
        innerText: "Order List",
        events: {
          click: goToOrders,
        },
      }),
    ],
  });
  fetchFromBasket().then((products) => {
    products.forEach((element) => {
      let product = element[0];
      let card = cardElementPayment(product, element);
      main.append(card);
    });
  });

  return main;
}
