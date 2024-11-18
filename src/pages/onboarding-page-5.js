import {ce} from "../Utils/create-element.js";
import {router} from "../routes/router";
function toNextPage() {
    router.navigate("/login")
}
export default function onboardingPage5() {
    const login = ce("div", {
        className: "w-full h-full bg-sky-800 flex flex-col justify-end ",
        children: [ce("div",{
            className:"h-2/3 w-full relative after:absolute after:z-10 after:inset-0 after:bg-[url('./src/assets/image/onboarding-page-4.jpeg')]  after:bg-cover after:left-[-2px] after:top-[-42px]  after:pointer-events-none"
        })
            ,
            ce("div",
                {
                    className: "h-1/3 w-full bg-white flex flex-col justify-between px-6 py-8",
                    children: [ce("h1",
                        {
                            className: "text-center w-full text-[32px] font-bold pb-4",
                            innerText: "Let’s fulfill your fashion needs with shoearight now!"
                        }
                    ),
                       ce("div",{
                           className:"w-full flex flex-row items-center justify-center gap-1.5 ",
                           children:[
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
                               }),
                               ce("div", {
                                   className: "navigation w-[30px] h-[23px] py-2.5",
                                   children: [
                                       ce("div", {
                                           className: " bg-black  py-0.5"
                                       })
                                   ]
                               })
                           ]
                       }),
                    ce("button",{
                        className:"w-full h-12 bg-black text-white text-sm font-medium px-4 py-3 rounded-[30px]",
                        innerText:"Get Started",
                        events: {
                            "click": toNextPage
                        }
                    })
                    ]
                })
        ]
    })
    return login;
}