import { ce } from "../Utils/create-element.js";

export default function btn(innerTxt, full = false, theme) {
  let btn = "";
  if (full == true) {
    btn = ce("button", {
      innerText: innerTxt,
      className:
        "w-full bg-slate-400 px-3 py-3 rounded-[35px] text-white  font-bold text-lg hover:bg-slate-600 ",
    });
  } else {
    btn = ce("button", {
      innerText: innerTxt,
      className:
        "bg-slate-400 px-3 py-2 rounded-md text-white w-[120px] font-bold text-xl hover:bg-slate-600",
    });
  }

  return btn;
}
