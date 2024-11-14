export default async function getProductsList(){
    const response=await fetch("http://localhost:5173/products");
    const data= await response.json();
    return data;
}