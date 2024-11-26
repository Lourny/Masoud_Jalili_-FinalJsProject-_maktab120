import searchItem from "../../components/searchitem";
import fetchFromBasket from "../fetchFromBasket";
import { ce } from "../../Utils/create-element";
import footerCart from "../../components/footerCart";
import input from "./../../components/input";
import clog from "../../Utils/logdata";
import EmptyOrderPage from "./EmptyOrderPage";
import cardActiveOrder from "../../components/cardActiveOrder";
import cardCompletedOrder from "../../components/cardCompletedOrder";

function checkDataBase() {
  let test = ce("div", {
    className: "w-full h-full bg-slate-50 ",
  });
  fetch("http://localhost:5173/basket")
    .then((res) => res.json())
    .then((data) => {
      if (data && Object.keys(data).length === 0) {
        test.append(EmptyOrderPage());
      } else {
        data.forEach((products) => {
          let product = products[0];
          test.append(cardActiveOrder(product, products));
        });
      }
    });
  return test;
}

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
              "w-[49%] h-full flex justify-center items-end border-b-2 rounded hover:border-b-black",
            children: [
              ce("p", {
                className:
                  "font-semibold text-lg cursor-pointer flex justify-center items-end pb-2 text-slate-500 hover:text-black ",
                innerText: "Active",
                events: {
                  click: () => {
                    router.navigate("/cardActiveOrder");
                  },
                },
              }),
            ],
          }),
          //completed box----------------------------------
          ce("div", {
            className:
              "w-[49%] h-full flex justify-center items-end  border-b-2 rounded hover:border-b-black",
            children: [
              ce("p", {
                className:
                  "font-semibold text-lg cursor-pointer flex justify-center items-end pb-2 text-slate-500 hover:text-black ",
                innerText: "Completed",
                events: {
                  click: () => {
                    router.navigate("/cardCompletedOrder");
                  },
                },
              }),
            ],
          }),
        ],
      }),
      //show ordered products----------------------
      checkDataBase(),

      //footer----------------------------------------
      footerCart(),
    ],
  });

  return ordersPage;
}
