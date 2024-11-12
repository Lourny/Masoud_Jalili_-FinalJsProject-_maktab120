import {ce} from "../Utils/create-element.js";

export default function login() {
    const login = ce("div", {
        className: "w-full h-full bg-sky-800 flex flex-col justify-end ",
        children: [
            ce("div",
                {
                    className: "h-1/3 w-full bg-white flex flex-col px-6",
                    children: [ce("h1",
                        {
                            className: "text-center w-full text-[32px] font-semibold py-8",
                            innerText: "We provide high quality products just for you"
                        }
                    ),
                       ce("div",{
                           className:"w-full flex flex-row items-center justify-center gap-1.5",
                           children:[
                               ce("div", {
                                   className: "navigation w-[30px] h-[23px] py-2.5",
                                   children: [
                                       ce("div", {
                                           className: " bg-black py-0.5"
                                       })
                                   ]
                               }),
                               ce("div", {
                                   className: "navigation w-[30px] h-[23px] py-2.5",
                                   children: [
                                       ce("div", {
                                           className: " bg-black opacity-50 py-0.5"
                                       })
                                   ]
                               }),
                               ce("div", {
                                   className: "navigation w-[30px] h-[23px] py-2.5",
                                   children: [
                                       ce("div", {
                                           className: " bg-black opacity-50 py-0.5"
                                       })
                                   ]
                               })
                           ]
                       })]
                })
        ]
    })
    return login;
}