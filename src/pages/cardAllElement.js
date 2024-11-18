import fetchAllImageProducts from "./fetchAllImageProducts.js";

export default function cardAllElement(data = {}) {
    let cardAllElement = ce("div", {
      className:
        " homeContainer bg-slate-50 p-3 flex flex-col justify-center items-center relative",
      children: [
        ce("div", {
          className: "p-2 w-1/3 h-full",
          children: [fetchAllImageProducts(data)],
        }),
      ],
    });
    return cardAllElement;
  }