import {ce} from "../Utils/create-element.js";

export default function login() {
    const login =
        ce("div", {
            className: "w-full h-full pt-32 pb-8 px-6 flex flex-col items-center",
            children:[
                ce("img",{
                    className:"w-14 h-20 ",
                    restAttrs:{src:"./src/assets/image/logoDark.png"}

                }),
                ce("h1",{
                    innerText:"Login to Your Account",
                    className:"font-bold text-4xl mt-28"
                }),
                ce("div",{
                    className:"w-full flex felx-col "
                })
            ]
        })
    ;
    return login;
}