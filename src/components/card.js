import {ce} from "../Utils/create-element.js";
import {router} from "../routes/router.js";

function showCardDetail(e){
    let endpoint=(e.target.id).toString();
    router.navigate(`card/${endpoint}`);
}

export default function cardElement(product) {
    let card = ce("div", {
        className: "cardContainer w-44 h-60  flex flex-col justify-center items-start gap-3 ",
        children: [
            ce("div", {
                className: "imageContainer w-full h-44 rounded-3xl p-5 bg-[#ECEFF1] flex justify-center items-center",
                children: [ce("img", {
                    restAttrs: {src: product.images,
                    id:product.id
                    },
                    className: "w-36 h-36",
                    events:{
                        "click":showCardDetail
                    }
                })]
            }),
            ce("div", {
                className: "detailContainer flex flex-col justify-center items-start gap-2",
                children: [
                    ce("h1", {
                        className: "productName font-bold text-2xl leading-6 ",
                        innerText: product.title
                    }),
                    ce("p", {
                        className: "productPrice font-semibold text-base leading-5",
                        innerText: `$ ${product.price}.00`
                    })

                ]
            })
        ]
    });
    return card;
}