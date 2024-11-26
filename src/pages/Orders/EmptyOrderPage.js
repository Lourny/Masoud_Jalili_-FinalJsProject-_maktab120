//empty order
import { ce } from "../../Utils/create-element";
export default function EmptyOrderPage() {
  let EmptyOrder = ce("div", {
    className:
      "w-full h-full felx flex-col justify-items-center content-center",
    children: [
      ce("img", {
        className: "w-[80%] opacity-20",
        restAttrs: {
          src: "../../../src/assets/image/clipboard.webp",
        },
      }),
      ce("h2", {
        className: "font-bold text-lg text-slate-800",
        innerText: "You don't have an order yet",
      }),
      ce("h5", {
        lassName: "font-semibold text-base text-slate-500",
        innerText: "You don't have an active order at this time",
      }),
    ],
  });
  return EmptyOrder;
}
