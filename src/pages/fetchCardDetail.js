import fetchCardByImage from "../api/fetchCardByImage.js";
import clog from "../Utils/logdata.js";
import { ce } from "../Utils/create-element.js";
import getAdiddasProductsList from "../api/addidas.api.js";
import cardElement from "../components/card.js";
import { router } from "../routes/router.js";
import fetchCardById from "../api/fetchCardById.js";
import addData from "../Utils/addData.js";
// function check(e){
//     let classEl=e.target.className;
//     e.target.className=" ";
//     let lastEl=classEl+"relative  after:top-0 after:left-0 after:bg-[url('./src/assets/image/check-mark.png')] after:bg-cover after:pointer-events-none ";
//     e.target.className=lastEl;
// }
function createSize(product) {
  function setSizeToLocalStorage(e) {
    let clickedSize = e.target.innerText;
    localStorage.setItem("orderedSize", JSON.stringify(clickedSize));
  }
  //closure reading ------------
  let sizeContainer = ce("div", {
    className: "w-full flex flex-row justify-center items-center gap-2",
  });
  product.size.forEach((sizeNum) => {
    let sizeElem = ce("div", {
      className:
        "rounded-full w-5 h-5 p-3 border-solid border-[2px] border-slate-400 flex justify-center items-center cursor-pointer hover:bg-slate-400",
      children: [
        ce("p", {
          innerText: sizeNum,
          className: "text-xs font-bold text-slate-500",
        }),
      ],
      events: {
        click: setSizeToLocalStorage,
      },
    });
    sizeContainer.appendChild(sizeElem);
  });

  return sizeContainer;
}

function createColor() {
  function selectedSize(e) {
    let targetClassName = e.target.className.split("bg")[1];
    let orderedColor = targetClassName.split("-")[1];
    localStorage.setItem("orderedColor", JSON.stringify(orderedColor));
  }

  let colorContainer = ce("div", {
    className: "w-full flex flex-row justify-center items-center gap-2",
    children: [
      ce("div", {
        className: `rounded-full bg-rose-500 w-5 h-5 p-3 border-solid border-2  flex justify-center items-center cursor-pointer hover:bg-slate-400`,
        children: [],
        events: { click: selectedSize },
      }),
      ce("div", {
        className: `rounded-full bg-sky-500 w-5 h-5 p-3 border-solid border-2  flex justify-center items-center cursor-pointer hover:bg-slate-400`,
        children: [],
        events: { click: selectedSize },
      }),
      ce("div", {
        className: `rounded-full bg-indigo-500 w-5 h-5 p-3 border-solid border-2  flex justify-center items-center cursor-pointer hover:bg-slate-400`,
        children: [],
        events: { click: selectedSize },
      }),
      ce("div", {
        className: `rounded-full bg-green-500 w-5 h-5 p-3 border-solid border-2  flex justify-center items-center cursor-pointer hover:bg-slate-400`,
        children: [],
        events: { click: selectedSize },
      }),
    ],
  });

  return colorContainer;
}

async function addToBasket(e) {
  e.stopPropagation();
  let endpoint = e.target.id.toString();
  await fetchCardById(endpoint).then((res) => {
    let orderedSize = Number(JSON.parse(localStorage.getItem("orderedSize")));
    let orderedColor = String(JSON.parse(localStorage.getItem("orderedColor")));
    let ress = res[0];
    ress.size = [orderedSize];
    ress.color = [orderedColor];
    let ressArr = [ress];
    addData(ressArr);
    alert("your product add to card successfully");
  });
}

export default function fetchCardDetail(data = {}) {
  let test2 = ce("div", {
    className: "w-ful h-screen ",
  });
  fetchCardByImage(data).then((products) => {
    products.forEach((product) => {
      let test3 = ce("div", {
        className: "detailContainer w-full h-screen flex flex-col gap-5  ",
        children: [
          ce("div", {
            className: "w-full h-3/8",
            children: [
              ce("i", {
                className:
                  "fa-solid fa-backward cursor-pointer absolute top-2 left-2 ",
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
            className: "infoContainer w-full h-full px-6 ",
            children: [
              ce("div", {
                className:
                  "w-full h-1/4 relative mb-3 after:absolute pb-3 after:w-full after:h-full  after:top-0 after:left-0 after:border-b-2 after:border-b-solid after:border-b-slate-100 after:pointer-events-none",
                children: [
                  //div for heart
                  ce("div", {
                    className:
                      "w-full flex flex-row justify-start items-center h-2/3",
                    children: [
                      ce("h1", {
                        innerText: product.title,
                        className: "font-bold text-4xl w-full  ",
                      }),
                      ce("a", {
                        className: "hover:text-pink-600 active:text-pink-600",
                        children: [
                          ce("i", {
                            className:
                              "fa-regular fa-heart text-2xl block w-10 h-10  text-center p-2 cursor-pointer ",
                          }),
                        ],
                      }),
                    ],
                  }),
                  ce("div", {
                    className:
                      "w-full h-1/3  flex flex-row justify-start items-center",
                    children: [
                      ce("div", {
                        className:
                          "w-1/4  bg-slate-200 rounded-lg flex justify-center items-center px-1 py-1",
                        children: [
                          ce("p", {
                            className: "font-bold text-[11px] text-slate-700",
                            innerText: "5,371sold",
                          }),
                        ],
                      }),
                      ce("div", {
                        className:
                          "pl-3 flex flex-row justify-center items-center gap-2",
                        children: [
                          ce("div", {
                            children: [
                              ce("i", {
                                className: "fa-solid fa-star",
                              }),
                            ],
                          }),
                          ce("p", {
                            className:
                              "font-semibold text-[14px] text-slate-700",
                            innerText: "4.3(5.389 reviews)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ce("div", {
                className:
                  "detailMiddlePart  flex flex-col justify-between pb-3 h-2/4 ",
                children: [
                  ce("div", {
                    className: "",
                    children: [
                      ce("h1", {
                        className: "font-bold",
                        innerText: "Description",
                      }),
                      ce("p", {
                        className: "font-semibold text-sm text-slate-700",
                        innerText:
                          "lorem ipsum dolor sit amet, consectatur adipiscing elit,sad do eiusmod tempor incididunt ut labore et ",
                      }),
                    ],
                  }),
                  ce("div", {
                    className: "selectSection ",
                    children: [
                      ce("div", {
                        className: "w-full mt-2 flex ",
                        children: [
                          //size
                          ce("div", {
                            className:
                              "w-1/2 flex flex-col justify-center items-start gap-2 ",
                            children: [
                              ce("h3", {
                                className: "font-bold",
                                innerText: "Size",
                              }),
                              ce("ul", {
                                children: [createSize(product)],
                              }),
                            ],
                          }),
                          //color
                          ce("div", {
                            className:
                              "colorsSection w-1/2 flex flex-col justify-center items-start gap-2 ",
                            children: [
                              ce("h3", {
                                className: "font-bold",
                                innerText: "Color",
                              }),
                              ce("div", {
                                className: "",
                                innerText: "",
                                children: [createColor(product)],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  ce("div", {
                    className:
                      "numberSection flex gap-3 w-full h-10 justify-start items-center mt-5",
                    children: [
                      ce("h3", {
                        className: "font-bold",
                        innerText: "Quantity",
                      }),
                      ce("div", {
                        className:
                          "w-1/3 rounded-2xl bg-slate-300 flex justify-center items-center px-2 py-[4.5px]",
                        children: [
                          ce("i", {
                            className:
                              "fa-solid fa-plus text-xs cursor-pointer",
                          }),
                          ce("div", {
                            className: "w-2/4 text-center font-bold",
                            innerText: "3",
                          }),
                          ce("i", {
                            className:
                              "fa-solid fa-minus text-xs cursor-pointer",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ce("div", {
                className:
                  "payment pb-3 h-1/4 relative after:absolute py-3 mt-3 after:w-full after:h-full  after:top-0 after:left-0 after:border-t-2 after:border-b-solid after:border-t-slate-100 after:pointer-events-none ",
                children: [
                  ce("div", {
                    className: "flex w-full h-20 justify-between items-center",
                    children: [
                      ce("div", {
                        className: "flex flex-col justify-center w-1/3 h-full",
                        children: [
                          ce("div", {
                            className: "flex flex-col justify-center gap-1",
                            children: [
                              ce("h5", {
                                className: "font-bold text-slate-400 text-xs",
                                innerText: "Total price",
                              }),
                              ce("h5", {
                                className: "font-bold text-lg",
                                innerText: `$${product.price}.00`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      ce("div", {
                        className:
                          "bg-black w-2/3 h-4/5 rounded-[40px] flex justify-center items-center shadow-md shadow-slate-500/50 cursor-pointer",
                        events: {
                          click: addToBasket,
                        },
                        restAttrs: { id: product.id },
                        children: [
                          ce("div", {
                            className:
                              "text-white flex justify-center items-center gap-3",
                            events: {
                              click: addToBasket,
                            },
                            restAttrs: { id: product.id },
                            children: [
                              ce("i", {
                                className:
                                  "fa-solid fa-bag-shopping text-white",
                                events: {
                                  click: addToBasket,
                                },
                                restAttrs: { id: product.id },
                              }),
                              ce("p", {
                                events: {
                                  click: addToBasket,
                                },
                                restAttrs: { id: product.id },
                                className: "text-lg font-semibold",
                                innerText: "Add to Cart",
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
        ],
      });
      test2.append(test3);
    });
    return test2;
  });
  return test2;
}
