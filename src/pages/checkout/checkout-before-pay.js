import choosedShippingTypeNav from "../../components/checkout/checkout-choosedSheepType";
import header from "../../components/checkout/checkout-header";
import orderList from "../../components/checkout/checkout-orderList";
import shipingAddressNav from "../../components/checkout/checkout-shipping";
import shippingTypeNav from "../../components/checkout/checkout-shippingType";
import { ce } from "../../Utils/create-element";
import clog from "../../Utils/logdata";

export default function checkoutBeforePay() {
  let checkout2 = ce("div", {
    className: "w-full h-screen flex flex-col px-6 justify-around ",
    children: [
      header("checkout", true),
      shipingAddressNav(),
      orderList(),
      choosedShippingTypeNav(),
      ce("button", {
        innerText: "countinue to Payment",
        className:
          "w-full bg-black text-white px-3 py-3 rounded-[35px]   font-bold text-lg hover:bg-slate-600 ",
      }),
    ],
  });
  return checkout2;
}
