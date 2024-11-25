import btn from "../../components/button";
import header from "../../components/checkout/checkout-header";
import shipingNav from "../../components/checkout/checkout-shipping";
import shipingTypeNav from "../../components/checkout/checkout-shippingType-card";
import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";

export default function shippingTypePage() {
  function goToShipping() {
    router.navigate("/shippingAdress");
  }
  function goToCheckoutPay() {
    router.navigate("/checkoutPay");
  }

  let MainPage = ce("div", {
    className:
      " w-full h-screen px-6 relative py-6 flex flex-col justify-between items-center",
    children: [
      ce("div", {
        className: "w-full",
        children: [
          header("Choos Shipping", false),
          ce("form", {
            className: "w-full ",
            children: [
              shipingTypeNav(false, "Economy", "fa-solid fa-boxes-stacked"),
              shipingTypeNav(false, "Regular", "fa-solid fa-box"),
              shipingTypeNav(false, "Cargo", "fa-solid fa-truck"),
              shipingTypeNav(false, "Express", "fa-solid fa-truck-fast"),
            ],
          }),
        ],
      }),
      ce("button", {
        innerText: "Apply",
        className:
          "w-full bg-black text-white px-3 py-3 rounded-[35px]   font-bold text-lg hover:bg-slate-600 ",
        events: { click: goToCheckoutPay },
      }),
    ],
  });

  return MainPage;
}
