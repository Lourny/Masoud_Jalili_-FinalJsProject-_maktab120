import searchItem from "../../components/searchitem";
import fetchCardFromBasket from "../fetchFromBasket";
import { ce } from "../../Utils/create-element";
import footerCart from "../../components/footerCart";
import input from "./../../components/input";

export default function ordersPage() {

  //div contain hole page of orders
  let ordersPage = ce("div", {
    className:
      "ordersPage-container w-full h-screen px-6 flex flex-col items-center justify-between  ",
    children: [
      //searchBox------------------------------------
      searchItem("My Orders"),
      //navbar for active or comleted---------------
      ce("div", {
        //div contain active or comleted-------------
        className: "w-full h-20 mt-5  flex justify-between items-center",
        children: [
          //active box----------------------------------
          ce("div", {
            className:
              "w-[49%] h-full flex justify-center items-end border-b-2 rounded ",
            children: [
              ce("p", {
                className:
                  "font-semibold text-lg flex justify-center items-end pb-2 text-slate-500 ",
                innerText: "Active",
              }),
            ],
          }),
          //completed box----------------------------------
          ce("div", {
            className:
              "w-[49%] h-full flex justify-center items-end  border-b-2 rounded",
            children: [
              ce("p", {
                className:
                  "font-semibold text-lg flex justify-center items-end pb-2 text-slate-500 ",
                innerText: "Completed",
              }),
            ],
          }),
        ],
      }),
      //show ordered products----------------------
      fetchCardFromBasket(),
      //footer----------------------------------------
      footerCart(),
    ],
  });
  return ordersPage;
}
