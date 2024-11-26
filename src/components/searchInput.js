import { ce } from "../Utils/create-element.js";
import fe from "../Utils/findElements.js";
import clog from "../Utils/logdata.js";
import input from "./input.js";

export default function searchInput() {
  function getInputValue() {
    let endpoint = fe("searchBox").value;
    localStorage.setItem("searchKey", endpoint);
    location.reload();
  }

  let searchInput = ce("div", {
    className:
      "w-full h-10 flex flex-row justify-center items-center gap-1  border-2 border-slate-400 rounded-xl bg-[#FAFAFA] overflow-hidden",
    children: [
      ce("i", {
        className:
          "fa-solid fa-search text-[#6C757D] w-1/12 text-end cursor-pointer ",
        events: {
          click: getInputValue,
        },
      }),
      input(),
    ],
  });
  return searchInput;
}
