import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";

export default function header(
  text,
  more = false,
  icon = "fa-solid fa-ellipsis"
) {
  function backToCheckout() {
    router.navigate("/checkout");
  }

  let header = "";
  if (more == true) {
    header = ce("div", {
      className:
        "flex flex-row justify-between items-center w-full h-2/12 py-3",
      children: [
        ce("div", {
          className: "title flex flex-row justify-center items-center gap-3",
          children: [
            ce("i", {
              className: "fa-solid fa-backward",
              events: { click: backToCheckout },
            }),
            ce("h1", {
              className: "text-2xl font-semibold",
              innerText: text,
            }),
          ],
        }),
        ce("i", {
          className: `${icon} text-2xl`,
        }),
      ],
    });
  } else {
    header = ce("div", {
      className:
        "flex flex-row justify-between items-center w-full h-2/12 py-3",
      children: [
        ce("div", {
          className: "title flex flex-row justify-center items-center gap-3",
          children: [
            ce("i", {
              className: "fa-solid fa-backward ",
              events: { click: backToCheckout },
            }),
            ce("h1", {
              className: "text-2xl font-semibold",
              innerText: text,
            }),
          ],
        }),
      ],
    });
  }

  return header;
}
