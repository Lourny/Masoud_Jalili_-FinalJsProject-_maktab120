import { ce } from "../Utils/create-element.js";
import getProductsLogo from "../api/logo.api.js";
import logoElements from "../components/logoElements.js";
import mostTitle from "./mostTitle.js";
import { router } from "../routes/router.js";
function allProductsByTitle(e) {
  e.target.className += "bg-[#343A40] text-white";
  let endpoint = e.target.innerText.toLowerCase();
  router.navigate(`MostPopularpage/${endpoint}`);
}
export default function most() {
  let most = ce("div", {
    className:
      " mostContainer w-full flex flex-col items-center justify-between gap-5 ",
    children: [
      ce("div", {
        className: "typo w-full flex flex-row justify-between items-center",
        children: [],
      }),
    ],
  });
  
  
  let titlesContainer = ce("div", {
    className:
      "w-full flex  flex-row justify-start items-center gap-3 overflow-x-auto ",
    children: [
      ce("div", {
        className:
          "h-10 flex justify-center cursor-pointer items-center px-5 py-2.5 border-2 border-[#343A40] bg-[#343A40] rounded-3xl text-white ",
        children: [
          ce("h1", {
            innerText: "All",
            className: "font-semibold leading-5 text-base ",
            events: {
              click: allProductsByTitle,
            },
          }),
        ],
      }),
    ],
  });

  getProductsLogo().then((logos) => {
    logos.forEach((logo) => {
      let mostTitleElements = mostTitle(logo);
      titlesContainer.appendChild(mostTitleElements);
    });
  });
  most.appendChild(titlesContainer);
  return most;
}
