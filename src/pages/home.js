import { ce } from "../Utils/create-element.js";
import searchInput from "../components/searchInput.js";
import fetchAllLogo from "./fetchLogo.js";
import most from "./homeMostNav.js";
import fetchAllImageProducts from "./fetchAllImageProducts.js";
import footer from "./footer.js";
import fetchAllProducts from "./fetchAllProducts.js";
import header from "./header.js";

export default function home(data={}){
    let home=ce("div",{
        className:" homeContainer px-6 flex flex-col justify-center items-center relative",
        children:[
            header(),
            searchInput(),
            fetchAllLogo(),
            most(),
            fetchAllProducts(data),
            footer()
        ]
    });
    return home;
}





