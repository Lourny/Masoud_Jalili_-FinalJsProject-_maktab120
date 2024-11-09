import {ce} from "../Utils/create-element.js";

export default function input(){
    let input=ce("input",{
        className:"px-3 py-2 bg-white rounded-md focus:outline-2 outline-sky-500 ring-4 "
    })
    return input;
}