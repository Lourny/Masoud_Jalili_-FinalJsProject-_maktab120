import { ce } from "../Utils/create-element";

export default function header() {
  let header = ce("div", {
    className: "w-full flex justify-between items-center m-5",
    children: [
      ce("div", {
        className: "flex justify-start items-center w-2/3 gap-4",
        children: [
          ce("div", {
            className:
              "w-1/6 h-11 bg-[#EAEAEA] rounded-full flex justify-center items-center",
            children: [
              ce("i", {
                className: "fa-solid fa-user text-xl cursor-pointer",
              }),
            ],
          }),
          ce("div", {
            className:"font-bold text-sm leading-4 flex flex-col gap-2",
            children: [
              ce("h2", {
                innerText: "Good Morning 👋",
              }),
              ce("h2", {
                innerText: "King Masoud",
              }),
            ],
          }),
        ],
      }),
      ce("div", {
        className:"flex flex-row gap-4 text-xl cursor-pointer",
        children: [
          ce("div", {
            children: [
              ce("i", {
                className: "fa-regular fa-bell  hover:text-[#EAEAEA]",
              }),
            ],
          }),
          ce("div", {
            children: [
              ce("i", {
                className: "fa-regular fa-heart  hover:text-[#EAEAEA]",
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return header;
}
