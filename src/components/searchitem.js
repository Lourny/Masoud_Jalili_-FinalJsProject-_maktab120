import { ce } from "../Utils/create-element.js";

export default function searchItem() {
  let searchitem = ce("div", {
    className: "w-full h-10 flex flex-row justify-between items-center gap-1 pt-5",
    children: [
      ce("div", {
        className:"flex flex-row gap-4",
        children: [
          ce("img", {
            className: "w-3 h-6 ",
            restAttrs: { src: "./src/assets/image/logoDark.png" },
          }),
          ce("h1", {
            className: "text-black text-lg font-semibold ",
            innerText: "My Cart",
          }),
        ],
      }),

      ce("i", {
        className: "fa-solid fa-search text-[#6C757D] w-1/12 text-end",
      }),
    ],
  });
  return searchitem;
}
