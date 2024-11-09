import {ce} from "../Utils/create-element.js";
import Header from "./header.js";
export default function layout(){
    const layout=ce("div",{
        children:[Header()],
        className:"w-full"
    })
    return layout;
}