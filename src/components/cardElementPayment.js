import { ce } from "../Utils/create-element.js";
import { router } from "../routes/router.js";

function showCardDetail(e) {
  let endpoint = e.target.id.toString();
  router.navigate(`card/${endpoint}`);
}

export default function cardElementPayment(product) {
  let card = ce("div", {
    className:
      " w-96 h-44 p-3 rounded-xl bg-white flex flex-row justify-center items-start gap-3 ",
    children: [
      ce("div", {
        className:
          "imageContainer w-1/3 h-full rounded-3xl p-2 bg-[#ECEFF1] flex justify-center items-center",
        children: [
          ce("img", {
            restAttrs: { src: product.images, id: product.id },
            className: "w-36 h-36",
            events: {
              click: showCardDetail,
            },
          }),
        ],
      }),
      ce("div", {
        className:
          "detailContainer flex flex-col justify-between items-start gap-2 w-2/3",
        children: [
          ce("div", {
            className: "flex flex-row justify-between items-center w-full",
            children: [
              ce("h1", {
                className: "productName font-bold text-2xl leading-6 ",
                innerText: product.title,
              }),
              ce("i", {
                className: "fa-solid fa-trash text-xl",
              }),
            ],
          }),

          ce("div", {
            className: "flex flex-row justify-between items-center w-full",
            children: [
              ce("div", {
                className:
                  "flex flex-row justify-center items-center pb-3 h-1/4 relative after:absolute py-3 ml-3 after:w-full after:h-6 after:left-0 after:border-r-2 after:border-b-solid after:border-r-slate-100 ",
                children: [
                  ce("ul", {
                    children: ["color"],
                  }),
                  ce("p", {
                    innerText: "name color",
                  }),
                ],
              }),
              ce("div", {
                children: [
                    ce("h5",{
                        innerText: `Size=${"number"}`
                    })
                ],
              }),
            ],
          }),

          ce("div", {
            className:
              "numberSection flex gap-3 w-full h-10 justify-between items-center mt-5",
            children: [
              ce("p", {
                className: "productPrice font-semibold text-base leading-5",
                innerText: `$ ${product.price}.00`,
              }),
              ce("div", {
                className:
                  "w-1/3 rounded-2xl bg-slate-300 flex justify-center items-center px-2 py-[4.5px]",
                children: [
                  ce("i", {
                    className: "fa-solid fa-minus text-xs",
                  }),
                  ce("div", {
                    className: "w-2/4 text-center font-bold",
                    innerText: "3",
                  }),
                  ce("i", {
                    className: "fa-solid fa-plus text-xs",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return card;
}
