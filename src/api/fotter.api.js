export default async function getFooterItems(){
    const response=await fetch("http://localhost:5173/footer");
    const data= await response.json();
    return data;
}