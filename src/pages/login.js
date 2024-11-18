import {ce} from "../Utils/create-element.js";
import clog from "../Utils/logdata.js";
import fe from "../Utils/findElements.js";
import {router} from "../routes/router.js";
function signIn(){
    let userEmail=fe("userEmail").value;
    let userPassword=fe("userPassword").value;
    let data=JSON.parse(localStorage.getItem('user'));
    if (data.email==userEmail&&data.password==userPassword){
        router.navigate("/home");
    }
}
export default function login() {
    const login =
        ce("div", {
            className: "w-full h-full  flex flex-col",
            children: [
               ce("div",{
                   className:"w-full h-5/6  pt-32 pb-8 px-6 flex flex-col items-center",
                   children:[
                       ce("img", {
                           className: "w-14 h-20 ",
                           restAttrs: {src: "./src/assets/image/logoDark.png"}

                       }),
                       ce("h1", {
                           innerText: "Login to Your Account",
                           className: "font-bold text-4xl mt-28 mb-12"
                       }),
                       ce("div", {
                           className: "w-full flex flex-col gap-5 ",
                           children: [
                               ce("div", {
                                   className: "w-full h-[37px] flex flex-row justify-center items-center bg-[#FAFAFA]",
                                   children: [
                                       ce("i", {
                                           className: " w-1/12 fa-solid fa-envelope text-slate-500 flex items-center justify-center pl-3 "
                                       }),
                                       ce("input", {
                                           className: "w-11/12 h-9 py-2.5 placeholder:text-slate-500 focus:border-pink-500 bg-[#FAFAFA]",
                                           restAttrs: {placeholder: "Email",id:"userEmail"}
                                       })
                                   ]
                               }),
                               ce("div", {
                                   className: "w-full h-[37px] flex flex-row justify-center items-center bg-[#FAFAFA]",
                                   children: [
                                       ce("i", {
                                           className: " w-1/12 fa-solid fa-lock text-slate-500 flex items-center justify-center pl-3 "
                                       }),
                                       ce("input", {
                                           className: "w-11/12  h-9 py-2.5 placeholder:text-slate-500 focus:border-pink-500 bg-[#FAFAFA]",
                                           restAttrs: {placeholder: "Password", type: "password",id:"userPassword"}
                                       })
                                   ]
                               }),

                           ]
                       }),
                       ce("div", {
                           className: "w-full h-12 flex flex-row justify-center items-center gap-2 mt-10",
                           children: [
                               ce("input", {
                                   restAttrs: {
                                       type: "checkbox"
                                   },
                               }),
                               ce("h1", {
                                   innerText:"Remember me"
                               })
                           ]

                       }),
                   ]
               }),
                ce("div",{
                    className:"w-full h-1/6  flex flex-col justify-end items-center px-6 pb-8 cursor-pointer",
                    children:[
                        ce("button",{
                            className:"w-full h-12 bg-black text-white text-sm font-medium px-4 py-3 rounded-[30px]",
                            innerText:"Sign In",
                            events:{
                                "click":signIn
                            }
                        })
                    ]
                })

            ]
        })
    ;
    return login;
}