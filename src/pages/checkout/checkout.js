import header from "../../components/checkout/checkout-header";
import orderList from "../../components/checkout/checkout-orderList";
import shipingAddressNav from "../../components/checkout/checkout-shipping";
import shippingTypeNav from "../../components/checkout/checkout-shippingType";
import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";
import fe from "../../Utils/findElements";
import clog from "../../Utils/logdata";

export default function checkout() {
  function goToChoose() {
    fe("errorMessage").remove();
    router.navigate("/shippingType");
  }

  function error() {
    let confirmationDialog = ce("div", {
      children: [
        ce("div", {
          className:
            "fixed inset-0 bg-gray-800 bg-opacity-50 felx flex-col justify-center items-center px-12 w-full h-screen",
          children: [
            ce("div", {
              className:
                "bg-white rounded-[40px] p-5 w-100 flex flex-col justify-center items-center gap-4 w-full h-1/2 mt-60",
              children: [
                ce("div", {
                  className:
                    "w-44 h-44 bg-red-700 rounded-full flex justify-center items-center ",
                  children: [
                    ce("i", {
                      className: "fa-solid fa-truck text-[70px] text-white",
                    }),
                  ],
                }),
                ce("h1", {
                  className: "text-xl font-bold mb-4 text-center",
                  innerText: "Please choose the shipping type ",
                }),

                ce("div", {
                  className: "flex flex-col  justify-end gap-4 w-full ",
                  children: [
                    ce("button", {
                      className:
                        "bg-black text-white px-5 py-4  w-full rounded-[40px]",
                      innerText: "Choose Now",
                      events: { click: goToChoose },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      restAttrs: { id: "errorMessage" },
    });
    //for showing confarmation----------------------------
    document.body.appendChild(confirmationDialog);
  }

  let checkout2 = ce("div", {
    className: "w-full h-screen flex flex-col px-6 justify-between gap-3 py-6 ",
    children: [
      ce("div", {
        children: [
          header("checkout", true, "fa-solid fa-ellipsis", "bag"),
          shipingAddressNav(),
          orderList(),
          shippingTypeNav(),
        ],
      }),
      ce("button", {
        innerText: "countinue to Payment",
        className:
          "w-full bg-black text-white px-3 py-3 rounded-[35px]   font-bold text-lg hover:bg-slate-600 ",
        events: {
          click: error,
        },
      }),
    ],
  });
  return checkout2;
}
