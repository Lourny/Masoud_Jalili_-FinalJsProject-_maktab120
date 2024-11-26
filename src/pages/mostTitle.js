import {ce} from "../Utils/create-element.js";
import {router} from "../routes/router.js";
import MostPopularpage from "../pages/Mostpage.js";



function titleChange(e){
    e.target.className+="bg-[#343A40] text-white";
   let endpoint=e.target.innerText.toLowerCase();
   router.navigate(`MostPopularpage/${endpoint}`);

}

export default function mostTitle(logo) {

    const isActive=window.location.pathname.includes(logo.brand);

    let items = ce("div",{
        className:"h-10 flex justify-center items-center px-5 py-2.5 border-2 border-[#343A40] rounded-3xl cursor-pointer hover:bg-slate-700 hover:text-white",
        children:[
            ce("h1",{
                innerText:logo.brand,
                className:"font-bold leading-5 text-base "
            })
        ],
        events:{
            "click":titleChange
        }
    })
    return items;
}