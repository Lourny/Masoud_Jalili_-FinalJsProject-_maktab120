import shipingTypeNav from "../../components/checkout/checkout-shippingType-card";
import { router } from "../../routes/router";
import { ce } from "../../Utils/create-element";
import fe from "../../Utils/findElements";
import header from "./../../components/checkout/checkout-header";

export default function paymentMethodPage() {
  //events------------------
  function successMessage() {
    //for confarmation dialog------------------------
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
                    "w-44 h-44 bg-black rounded-full flex justify-center items-center ",
                  children: [
                    ce("i", {
                      className:
                        "fa-solid fa-shopping-cart text-[70px] text-white",
                    }),
                  ],
                }),
                ce("h1", {
                  className: "text-2xl font-bold mb-4 text-center",
                  innerText: "Order Successful!",
                }),
                ce("p", {
                  innerText: "you have successfully mode order",
                  className: "text-slate-500 text-lg text-center",
                }),

                ce("div", {
                  className: "flex flex-col  justify-end gap-4 w-full ",
                  children: [
                    ce("button", {
                      className:
                        "bg-black text-white px-5 py-4  w-full rounded-[40px]",
                      innerText: "View Orderl",
                      events: { click: goToOrder },
                    }),
                    ce("button", {
                      className:
                        "bg-slate-400 text-slate-800 px-5 py-4  w-full rounded-[40px] font-bold",
                      innerText: "View E-Receipt",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      restAttrs: { id: "successMessage" },
    });
    //for showing confarmation----------------------------
    document.body.appendChild(confirmationDialog);
  }

  function goToOrder() {
    fe("successMessage").remove();
    router.navigate("/cart");
  }

  let main = ce("div", {
    className: "w-full h-screen px-6 py-6 flex flex-col justify-between",
    children: [
      ce("div", {
        children: [
          header("Payment Methods", true, "fa-solid fa-plus"),
          //title--------------------
          ce("h2", {
            innerText: "Select the payment method you want to use",
            className: "text-[16px] font-bold text-slate-400",
          }),
          //payment methods
          shipingTypeNav(false, "My Wallet", "fa-solid fa-wallet", true),
          shipingTypeNav(false, "PayPal", "fa-brands fa-paypal", true),
          shipingTypeNav(false, "Google Pay", "fa-brands fa-google", true),
          shipingTypeNav(false, "Apple Pay", "fa-brands fa-apple", true),
          shipingTypeNav(
            false,
            ".... .... .... .... 4679",
            "fa-solid fa-credit-card",
            true
          ),
        ],
      }),
      ce("button", {
        innerText: "Confirm Payment",
        className:
          "w-full bg-black text-white px-3 py-3 rounded-[35px]   font-bold text-lg hover:bg-slate-600 ",
        events: { click: successMessage },
      }),
    ],
  });
  return main;
}
