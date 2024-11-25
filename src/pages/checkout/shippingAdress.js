import btn from "../../components/button";
import header from "../../components/checkout/checkout-header";
import shipingNav from "../../components/checkout/checkout-shipping";
import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";

export default function shippingAdressPage() {
  //events--------------------------
  function goToShipping() {
    router.navigate("/shippingAdress");
  }
  function backToCheckout() {
    router.navigate("/checkout");
  }

  let MainPage = ce("div", {
    className:
      " w-full h-screen px-6 relative py-6 flex flex-col justify-between items-center",
    children: [
      ce("div", {
        className: "w-full",
        children: [
          header("Shipping Address", false),
          ce("form", {
            className: "w-full ",
            children: [
              shipingNav(false),
              shipingNav(false, "Office"),
              shipingNav(false, "Apartment"),
              shipingNav(false, "Parents House"),
            ],
          }),
          ce("button", {
            innerText: "Add New Address",
            className:
              "w-full bg-slate-300 px-3 py-3 rounded-[35px]   font-bold text-lg hover:bg-slate-600 ",
          }),
        ],
      }),
      ce("button", {
        innerText: "Apply",
        className:
          "w-full bg-black text-white px-3 py-3 rounded-[35px]   font-bold text-lg hover:bg-slate-600 ",
        events: { click: backToCheckout },
      }),
    ],
  });

  return MainPage;
}
