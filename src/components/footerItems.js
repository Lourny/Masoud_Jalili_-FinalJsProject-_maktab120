import {ce} from "../Utils/create-element.js";
import clog from "../Utils/logdata.js";
import {router} from "../routes/router.js";


function routeToOwnPage(e){
    let path=e.target.className;
    let path2=path.split(" ")[1];
    let path3=path2.split("-").at(-1);
    router.navigate(`/${path3}`);
}

export default function footerItems(item) {
    let footerItem = ce("div",{
        className:"w-7 h-10 flex flex-col justify-center items-center gap-0.5 cursor-pointer",
        children:[
           ce("i",{
               className:`${item.icon} text-black w-6 h-6 text-center hover:text-slate-400 `
            }),
            ce("p",{
                innerText:item.title,
                className:"text-xs font-semibold leading-3 "
            })
        ],
        events:{
            "click":routeToOwnPage
        }
    })
    return footerItem;
}
