
import { ce } from "../Utils/create-element.js";
import { router } from "../routes/router.js";

function showCardDetail(e) {
  let endpoint = e.target.id.toString();
  router.navigate(`card/${endpoint}`);
}

export default function cardElement(product) {
  let card = ce("div", {
    className:
      "cardContainer w-44 h-74 flex flex-col justify-center items-start gap-3 ",
    children: [
      ce("div", {
        className:
          "imageContainer w-full h-44 rounded-3xl p-5 bg-[#ECEFF1] flex justify-center items-center cursor-pointer hover:bg-slate-200",
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
          "detailContainer flex flex-col justify-center items-start gap-2",
        children: [
          ce("h1", {
            className: "productName font-bold text-2xl leading-6 ",
            innerText: product.title,
          }),
          ce("div", {
            className: "w-full h-1/3  flex flex-row justify-start items-center",
            children: [
              ce("div", {
                className:
                  "flex flex-row justify-center items-center gap-2",
                children: [
                  ce("div", {
                    children: [
                      ce("i", {
                        className: "fa-solid fa-star",
                      }),
                    ],
                  }),
                  ce("div", {
                    className:
                      "relative mr-5 after:absolute  after:w-full after:h-full  after:top-0 after:left-1.5 after:border-r-2 after:border-r-solid after:border-r-slate-400 after:pointer-events-none",
                    children: [
                      ce("p", {
                        className: "font-semibold text-[14px] text-slate-700",
                        innerText: "4.3",
                      }),
                    ],
                  }),
                ],
              }),

              ce("div", {
                className:
                  "w-1/4  bg-slate-200 rounded-lg flex justify-center items-centers py-1",
                children: [
                  ce("p", {
                    className: "font-bold text-[11px] text-slate-700 px-20",
                    innerText: "5,371sold",
                  }),
                ],
              }),
            ],
          }),

          ce("p", {
            className: "productPrice font-semibold text-base leading-5",
            innerText: `$ ${product.price}.00`,
          }),
        ],
      }),
    ],
  });
  return card;
}
