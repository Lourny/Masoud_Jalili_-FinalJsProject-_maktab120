import { ce } from "../Utils/create-element.js";

import getFooterItems from "../api/fotter.api.js";
import footerItems from "../components/footerItems";

export default function footer() {
  let footerContainer = ce("div", {
    className:
      " w-full h-1/8 footerContainer px-6 py-3 flex flex-row justify-center items-center gap-10 mt-10 bottom-0 bg-white fixed",
  });
  getFooterItems().then((items) => {
    items.forEach((item) => {
      let footerItem = footerItems(item);
      footerContainer.appendChild(footerItem);
    });
  });
  return footerContainer;
}
