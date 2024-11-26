import { ce } from "../../Utils/create-element";
import clog from "../../Utils/logdata";
import getProductsLogo from "../../api/logo.api";
import header from "../../components/checkout/checkout-header";
import navbarTitle from "../../components/navbarTitle";
import { router } from "../../routes/router";
function showCardDetail(e) {
  let endpoint = e.target.id.toString();
  router.navigate(`card/${endpoint}`);
}

export default function cardElementWishList() {
  let titlesContainer = ce("div", {
    className:
      "w-full flex flex-row justify-start items-center gap-3 overflow-x-auto ",
    children: [
      ce("div", {
        className:
          "h-10 flex justify-center cursor-pointer items-center px-5 py-2.5 border-2 border-[#343A40] bg-[#343A40] rounded-3xl text-white ",
        children: [
          ce("h1", {
            innerText: "All",
            className: "font-semibold leading-5 text-base ",
            // events: {
            //   click: allProductsByTitle,
            // },
          }),
        ],
      }),
    ],
  });
  getProductsLogo().then((logos) => {
    clog(logos);
    logos.forEach((logo) => {
      let navbarTitleElements = navbarTitle(logo);
      titlesContainer.appendChild(navbarTitleElements);
    });
    main.append(titlesContainer);
  });

  let main = ce("div", {
    className: "w-full h-screen  px-6 py-3 flex flex-col gap-5",
    children: [
      header("Wish List", true, "fa-solid fa-magnifying-glass", "home"),
    ],
  });

  fetch("http://localhost:5173/wishList")
    .then((res) => res.json())
    .then((data) => {
      let cardWrapper = ce("div", {
        className:
          "w-full flex flex-row flex-wrap gap-3 justify-center items-center",
      });
      data.forEach((products) => {
        let product = products["0"];

        let card = ce("div", {
          className:
            "cardContainer w-[45%] h-74 flex flex-col justify-center items-start gap-3 ",
          children: [
            ce("div", {
              className:
                "imageContainer w-full h-44 rounded-3xl p-5 bg-[#ECEFF1] flex justify-center items-center cursor-pointer hover:bg-slate-200 relative",
              children: [
                ce("i", {
                  className:
                    "fa-solid fa-heart absolute top-5 right-5 text-lg bg-slate-400 rounded-full p-2 text-slate-100  ",
                }),
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
      main.append(cardWrapper);
    });
  return main;
}
