import clog from "../Utils/logdata.js";


export default async function fetchFromBasket() {
    let card = await fetch(`http://localhost:5173/basket`);
    let res = await card.json();
    return res;
}