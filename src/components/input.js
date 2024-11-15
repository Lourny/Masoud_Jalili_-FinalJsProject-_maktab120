import {ce} from "../Utils/create-element.js";

export default function input(){
    let input=ce("input",{
        className:"pl-0 pr-3 py-2 bg-[#FAFAFA] rounded border-none focus:outline-0 w-11/12 ",
        restAttrs:{placeholder:"Search"}
    })
    return input;
}