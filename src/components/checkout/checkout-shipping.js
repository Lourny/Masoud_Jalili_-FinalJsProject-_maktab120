import { ce } from "../../Utils/create-element";

export default function shipingNav() {
  //events
  function goToShipping() {}

  let hero = ce("div", {
    className: "w-full h-36 flex flex-col justify-center items-center ",
    children: [
      ce("h1", {
        className: "font-bold text-lg w-full  align-bottom",
        innerText: "Shipping Address",
      }),
      ce("div", {
        className: "w-full h-2/3 px-6 py-4",
        children: [
          ce("div", {
            className: "w-full h-full flex flex-row",
            children: [
              ce("div", {
                className: "w-5/6  flex justify-start items-center gap-3",
                children: [
                  ce("div", {
                    className: "w-1/6 h-full flex justify-center items-center",
                    children: [
                      ce("div", {
                        className:
                          "w-12 bg-black h-12 rounded-full flex justify-center items-center",
                        children: [
                          ce("i", {
                            className:
                              "fa-solid fa-location-dot text-2xl text-white",
                          }),
                        ],
                      }),
                    ],
                  }),
                  ce("div", {
                    className:
                      "w-5/6 h-fullbg-slate-100 flex flex-col justify-center",
                    children: [
                      ce("h2", {
                        innerText: "Home",
                        className: "font-bold",
                      }),
                      ce("h3", {
                        innerText: "12548,Humborg Park,F79",
                        className: "text-sm font-bold text-slate-500",
                      }),
                    ],
                  }),
                ],
              }),
              ce("div", {
                className: "w-1/6 h-full flex justify-center items-center",
                children: [
                  ce("i", {
                    className: "fa-solid fa-pen-to-square text-lg",
                    events: { click: goToShipping },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return hero;
}
