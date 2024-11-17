import { ce } from "../Utils/create-element.js";

export default function paymentCart() {
  let paymentCart = ce("div", {
    className:
      "w-full h-20 px-2 bg-black flex flex-row justify-between items-center gap-0.5 cursor-pointer",
    children: [
      ce("div", {
        className: " w-1/3 ",
        children: [
          ce("div", {
            className: "flex flex-col justify-center",
            children: [
              ce("h5", {
                className: "font-bold text-slate-400 text-lg",
                innerText: "Total price",
              }),
              ce("h5", {
                className: "font-bold text-xl ",
                innerText: `$.00`,
              }),
            ],
          }),
        ],
      }),
      ce("div", {
        className: "w-2/3",
        children: [
          ce("div", {
            className:
              "bg-black w-full p-4 rounded-[40px] flex justify-center h-12 items-center shadow-md shadow-slate-500/50",
            children: [
              ce("div", {
                className: "text-white flex justify-center items-center gap-3",
                children: [
                  ce("p", {
                    className: "text-lg font-semibold text-wight",
                    innerText: "Checkout",
                  }),
                  ce("i", {
                    className: "fa-solid fa-arrow-right text-white",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return paymentCart;
}
