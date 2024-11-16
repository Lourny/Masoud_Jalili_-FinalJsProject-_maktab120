import fetchCardByImage from "../api/fetchCardByImage.js";
import clog from "../Utils/logdata.js";
import { ce } from "../Utils/create-element.js";
import getAdiddasProductsList from "../api/addidas.api.js";
import cardElement from "../components/card.js";

export default function fetchCardDetail(data = {}) {
  let test2 = ce("div", {
    className: "w-ful h-screen ",
  });
  fetchCardByImage(data).then((products) => {
    products.forEach((product) => {
      clog(product);

      let test3 = ce("div", {
        className: "detailContainer w-full h-screen flex flex-col ",
        children: [
          ce("div", {
            className: "w-full h-1/3",
            children: [
              ce("i", {
                className: "fa-solid fa-backward cursor-pointer ",
                events: {
                  click: () => {
                    router.navigate("/home");
                  },
                },
              }),
              ce("img", {
                className: "w-full h-full ",
                restAttrs: { src: product.images },
              }),
            ],
          }),
          ce("div", {
            className: "infoContainer w-full h-2/3 px-6",
            children: [
              ce("div", {
                className: "width-full h-1/4  py-7",
                children: [
                  ce("h1", {
                    innerText: product.title,
                    className: "font-bold text-4xl w-full h-2/3 ",
                  }),
                  ce("i", {
                    className: "popularHeart",
                  }),
                  ce("div", {
                    className:
                      "w-full h-1/3  flex flex-row justify-start items-center",
                    children: [
                      ce("div", {
                        className:
                          "w-1/5 h-full bg-slate-200 rounded-lg flex justify-center items-center px-2 py-1",
                        children: [
                          ce("p", {
                            className: "font-bold text-[11px] text-slate-700",
                            innerText: "5 ,371 solid",
                          }),
                          ce("div", {
                            className: "",
                            children: [
                              ce("i", {
                                className: "starNumber",
                              }),
                              ce("p", {
                                className:
                                  "font-semibold text-[11px] text-slate-700",
                                innerText: "4.3(5.389 reviews)",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          ce("div", {
            className: "detailMiddlePart",
            children: [
              ce("div", {
                className: "",
                children: [
                  ce("h1", {
                    className: "",
                    innerText: "Description",
                  }),
                  ce("p", {
                    className: "",
                    innerText:
                      "lorem ipsum dolor sit amet, consectatur adipiscing elit,sad do eiusmod tempor incididunt ut labore et ",
                  }),
                ],
              }),
              ce("div", {
                className: "selectSection",
                children: [
                  ce("div", {
                    className: "sizingSection",
                    children: [
                      ce("h3", {
                        className: "",
                        innerText: "Size",
                      }),
                      ce("", {
                        className: "",
                        innerText,
                      }),
                    ],
                  }),
                  ce("div", {
                    className: "colorsSection",
                    children: [
                      ce("h3", {
                        className: "",
                        innerText: "Color",
                      }),
                      ce("", {
                        className: "",
                        innerText,
                      }),
                    ],
                  }),
                ],
              }),
              ce("div", {
                className: "numberSection",
                children: [
                  ce("h3", {
                    className: "",
                    innerText: "Quantity",
                  }),
                  ce("div", {
                    className: "",
                    children: [
                      ce("i", {
                        className: "",
                      }),
                      ce("div", {
                        className: "",
                      }),
                      ce("i", {
                        className: "",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          ce("div", {
            className: "payment",
            children: [
              ce("div", {
                className: "",
                children: [
                  ce("h5", {
                    className: "",
                    innerText: "Total price",
                  }),
                  ce("h5", {
                    className: "",
                    innerText: `$${257}.00`,
                  }),
                ],
              }),
              ce("div", {
                className: "",
                children: [
                  ce("i", {
                    className: "",
                  }),
                  ce("p", {
                    className: "",
                    innerText: "Add to Cart",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
      test2.append(test3);
    });
    return test2;
  });
  return test2;
}
