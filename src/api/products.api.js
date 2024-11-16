export default async function getProductsList({data}){
if (data==undefined||data.brand=="all"){
     let response=await fetch("http://localhost:5173/products");
    const res= await response.json();
    return res;
}
    let response=await fetch(`http://localhost:5173/products?brand=${data.brand}`);
    const res= await response.json();
    return res;
}