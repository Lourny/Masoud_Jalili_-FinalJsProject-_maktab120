import header from "../../components/checkout/checkout-header";
import { ce } from "../../Utils/create-element";
import clog from "../../Utils/logdata";

export default function checkout() {
  let checkout2 = ce("div", {
    className: "w-full h-full bg-pink-600 flex flex-col",
    children: [header("checkout", true)],
  });
  return checkout2;
}
