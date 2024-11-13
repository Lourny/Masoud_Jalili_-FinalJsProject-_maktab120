import {ce} from "../Utils/create-element.js";
import logo from "../components/logo.js";
import spiner from "../components/loading.js";

export default function loadingPage(){
    const loadingPage=ce("div",{
        children:[logo(),spiner()],
        restAttrs:{id:"loading"},
        className:" loading h-full w-full flex flex-col justify-center items-center"
    })
    return loadingPage;
}