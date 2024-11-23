import { ce } from "../Utils/create-element.js";
import fetchAdiddasProducts from "./fetchAdiddasProducts.js";
import { router } from "../routes/router.js";
import clog from "../Utils/logdata.js";

export default  function productFilterByLogo({data}) {
  let product =  ce("div", {
    className:
      " container w-full h-full px-6 flex flex-col justify-start items-center",
    children: [
      ce("div", {
        className:
          "w-full h-14 flex flex-row justify-start items-center gap-3 py-4 px-6",
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
            children: [data.brand],
          }),
        ],
      }),
      fetchAdiddasProducts(data.brand)

    ],

  });
  return product;
}
