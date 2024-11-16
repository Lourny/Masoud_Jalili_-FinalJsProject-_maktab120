import {ce} from "../Utils/create-element.js";

export default function fetchByTitle({data}){
    let test=ce("div",{
        className:"w-full h-full bg-sky-800 rounded",
       children:[
           ce("img",{
               restAttrs:{
                   src:"./public/logo/adidas.png"
               }
           })
           ,ce("h1",{
               className:"w-full h-10 mx-auto my-20  text-center text-white text-4xl font-bold",
               innerText:data.brand
           })
       ]
    });
    return test;
}