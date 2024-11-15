export default async function getAdiddasProductsList(endpoint){
    const response=await fetch(`http://localhost:5173/products?brand=${endpoint}`);
    const data= await response.json();
    return data;
}