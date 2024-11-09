import {ce} from "../Utils/create-element.js";
import btn from "../components/button.js";
import input from "../components/input.js";
import logo from "../components/logo";

function Header() {
    const header = ce("div", {
        className: 'flex flex-row items-center justify-between w-full bg-orange-500 px-4', children: [logo(), input(), btn()]
    });

    return header;
}

export default Header;