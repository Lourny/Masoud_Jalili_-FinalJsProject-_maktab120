import { ce } from "../Utils/create-element.js";

export default function searchItem(str) {
  let searchitem = ce("div", {
    className:
      "w-full h-1/8 cursor-pointer flex flex-row justify-between items-center gap-1 pt-5",
    children: [
      ce("div", {
        className: "flex flex-row gap-5",
        children: [
          ce("img", {
            className: "w-3 h-6  ",
            restAttrs: { src: "./src/assets/image/logoDark.png" },
          }),
          ce("h1", {
            className: "text-black text-xl font-bold ",
            innerText: str,
          }),
        ],
      }),

      ce("i", {
        className: "fa-solid fa-search text-[#6C757D] w-1/12 text-end text-3xl",
      }),
    ],
  });
  return searchitem;
}
