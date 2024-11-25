import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";

export default function shippingTypeNav() {
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
        className: "w-full  h-14 flex px-6 justify-between items-center ",
        children: [
          ce("div", {
            className: "justify-start items-center gap-3 flex",
            children: [
              ce("i", {
                className: "fa-solid fa-truck-fast text-2xl ",
              }),
              ce("h1", {
                innerText: "Choose Shipping Type ",
                className: "font-bold text-lg",
              }),
            ],
          }),
          ce("i", {
            className: "fa-solid fa-chevron-right text-slate-500",
          }),
        ],
        events: { click: goToShippingType },
      }),
    ],
  });
  return hero;
}
