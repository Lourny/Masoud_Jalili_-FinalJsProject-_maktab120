import {ce} from "../Utils/create-element.js";
import btn from "../components/button.js";

function Header() {
    const header = ce("div", {
        className: 'flex flex-row items-center justify-start w-full bg-orange-500', children: [ce("div",{className:"logoContainer flex px-3 py-2",children:[ce("img",{restAttrs:{src:"./src/assets/image/img.png"},className:"w-12 h-12"}),
                ce("div", {innerText: 'DigiKala', className: 'p-3  rounded-xl text-white text-xl font-bold '}),btn()]})]
    });

    return header;
}

export default Header;