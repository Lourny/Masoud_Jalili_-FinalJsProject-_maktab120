import {ce} from "../Utils/create-element.js";

export default function input(){
    let input=ce("input",{
        className:"px-3 py-2 bg-white rounded-tr-md rounded-br-md focus:outline-0 ",
        restAttrs:{id:"inputTest"}
    })
    return input;
}