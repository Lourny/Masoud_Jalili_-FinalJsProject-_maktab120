import { ce } from "../Utils/create-element.js";
import { router } from "../routes/router.js";
import MostPopular from "./StructureMost.js";
import fetchAllProducts from "./fetchAllProducts.js";

export default  function MostPopularpage(data={}) {
  let product =  ce("div", {
    className:
      " container w-full h-full px-6 flex flex-col justify-start items-center",
    children: [
      ce("div", {
        className:
          "w-full h-14 flex flex-row justify-start items-center gap-3 py-4 px-2",
        children: [
          ce("i", {
            className: "fa-solid fa-backward cursor-pointer",
            events: {
              click: () => {
                router.navigate("/home");
              },
            },
          }),
          ce("h1", {
            className: "font-bold text-xl",
            innerText: "Most Popular",
          }),
        ],
      }),
      MostPopular(),
      fetchAllProducts(data),
    ],

  });
  return product;
}