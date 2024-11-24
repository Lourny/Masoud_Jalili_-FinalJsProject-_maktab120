import { ce } from "../../Utils/create-element";
import clog from "../../Utils/logdata";

export default function checkout() {
  let test = ce("h1", {
    className: "font-bold text-red-900 text-3xl",
    innerText: "hello motherFucker",
  });
  return test;
}
