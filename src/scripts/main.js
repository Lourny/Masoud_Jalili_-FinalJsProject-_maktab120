import {ce} from "../Utils/create-element.js";
import layout from "../layout/layout.js";
const layout1=layout();
console.log(layout1);
document.getElementById("app").appendChild(layout());
document.getElementById("app").appendChild(ce("div",{
        className:"w-[150px] h-[150px] bg-slate-500 text-white font-bold text-2xl text-center pt-10 mt-4 mx-auto rounded-full hover:ring-8 ring-pink-500 ring-offset-4 cursor-pointer "
    ,innerText:"JUST FOR TEST",events:{
            "click":function () {
              let msg=  prompt("test is passed").toString();
              alert(msg);
            }
    }})
);

