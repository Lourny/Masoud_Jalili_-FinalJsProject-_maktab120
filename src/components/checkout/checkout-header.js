import { ce } from "../../Utils/create-element";

export default function header(text, more = false) {
  if (more == true) {
    let header = ce("div", {
      className:
        "flex flex-row justify-between items-center bg-orange-300 w-full h-2/12",
      children: [
        ce("div", {
          className:
            "title flex flex-row justify-center items-center gap-3 bg-green-600",
          children: [
            ce("i", {
              className: "fa-solid fa-backward",
            }),
            ce("h1", {
              innerText: text,
            }),
          ],
        }),
        ce("i", {
          className: "fa-solid fa-ellipsis",
        }),
      ],
    });
  }

  let header = ce("div", {
    className: "flex flex-row justify-between items-center bg-orange-300",
    children: [
      ce("div", {
        className:
          "title flex flex-row justify-center items-center gap-3 bg-green-600",
        children: [
          ce("i", {
            className: "fa-solid fa-back",
          }),
          ce("h1", {
            innerText: text,
          }),
        ],
      }),
    ],
  });

  return header;
}
