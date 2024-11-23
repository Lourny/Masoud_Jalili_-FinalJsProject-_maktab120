import clog from "../Utils/logdata.js";

export default async function fetchFromBasket(endpoint = "") {
  if (endpoint != "") {
    let card = await fetch(`http://localhost:5173/basket/${endpoint}`);
    let res = await card.json();
    return res;
  } else {
    let card = await fetch(`http://localhost:5173/basket`);
    let res = await card.json();
    return res;
  }
}
