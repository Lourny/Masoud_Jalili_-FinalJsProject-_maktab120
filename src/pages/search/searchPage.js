import searchInput from "../../components/searchInput";
import { router } from "../../routes/router";
import fe from "../../Utils/findElements";
import clog from "../../Utils/logdata";
import { ce } from "./../../Utils/create-element";

export default function searchPage() {
  function showCardDetail(e) {
    let endpoint = e.target.id.toString();
    router.navigate(`card/${endpoint}`);
  }

  let endpoint = localStorage.getItem("searchKey");
  let search = ce("div", {
    className:
      "w-full flex flex-col px-6 py-6 justify-center items-center gap-3",
    // events: {
    //   click: (e) => {
    //     router.navigate("/home");
    //   },
    // },
    children: [
      ce("div", {
        className: "w-full  mb-3  flex flex-col gap-3",
        children: [searchInput()],
      }),
    ],
  });

  fetch(`http://localhost:5173/products?title=${endpoint}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let cardWrapper = ce("div", {
        className:
          "w-full flex flex-row flex-wrap gap-3 justify-center items-center",
        children: [
          ce("div", {
            className:
              "w-full h-10 flex felx-row justify-between items-center ",
            children: [
              ce("h1", {
                className: "font-bold text-lg text-slate-700 ",
                innerText: `Result for "${endpoint} "`,
              }),
              ce("h1", {
                className: "font-bold text-lg text-slate-700 ",
                innerText: ` ${data.length} founds`,
              }),
            ],
          }),
        ],
      });
      if (data.length != 0) {
        data.forEach((product) => {
          let card = ce("div", {
            className:
              "cardContainer w-[45%] h-74 flex flex-col justify-center items-start gap-3 ",
            children: [
              ce("div", {
                className:
                  "imageContainer w-full h-44 rounded-3xl p-5 bg-[#ECEFF1] flex justify-center items-center cursor-pointer hover:bg-slate-200 relative",
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
                    className:
                      "w-full h-1/3  flex flex-row justify-start items-center",
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
                                className:
                                  "font-semibold text-[14px] text-slate-700",
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
                            className:
                              "font-bold text-[11px] text-slate-700 px-20",
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
          cardWrapper.append(card);
        });
        search.append(cardWrapper);
      }

      let img = ce("div", {
        className: "w-full mt-32 flex flex-col justify-center items-center ",
        children: [
          ce("img", {
            restAttrs: {
              src: "./src/assets/image/empty/error.png",
            },
            className: "opacity-10",
          }),
          ce("h1", {
            innerText: "Not Found",
            className: "font-bold text-4xl text-slate-300",
          }),
        ],
      });
      cardWrapper.append(img);
      search.append(cardWrapper);
    });
  return search;
}
