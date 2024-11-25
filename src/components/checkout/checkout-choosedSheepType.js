import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";
import shipingTypeNav from "./checkout-shippingType-card";

export default function choosedShippingTypeNav() {
  function goToShippingType() {
    router.navigate("/shippingType");
  }

  let hero = ce("div", {
    className: "w-full   flex flex-col",
    children: [
      ce("h1", {
        innerText: "Choose Shipping",
        className: "font-bold text-lg",
      }),
      ce("div", {
        className: "w-full  h-14 flex mt-3 justify-between items-center ",
        children: [
          shipingTypeNav(false, "Regular", "fa-solid fa-box"),
          ce("i", {
            className: "fa-solid fa-pen-to-square text-lg text-slate-500",
          }),
        ],
        events: { click: goToShippingType },
      }),
    ],
  });
  return hero;
}
