import clog from "../Utils/logdata.js";


export default async function fetchCardById(data) {
    let card = await fetch(`http://localhost:5173/products?id=${data}`);
    let res = await card.json();
    return res;
}
