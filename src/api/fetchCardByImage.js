import clog from "../Utils/logdata.js";


export default async function fetchCardByImage({data}) {
    let card = await fetch(`http://localhost:5173/products?id=${data.id}`);
    let res = await card.json();
    return res;
}
