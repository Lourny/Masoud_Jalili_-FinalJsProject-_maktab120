import {ce} from "../../Utils/create-element.js";
import logo from "../../components/logo.js";
import spiner from "../../components/loading.js";
import {router} from "../../routes/router.js";

export default function loadingPage(){
    setTimeout(()=>{
        fetch("http://localhost:5173/userEntry").then(res => {
            res.json().then(res2=>{
                res2.forEach(obj=>{
                    if (obj.entry==0){
                        router.navigate("/page2")
                    } else{
                        router.navigate("/home")
                    }
                })

            })
        });

    },3000);
    const loadingPage=ce("div",{
        children:[logo(),spiner()],
        restAttrs:{id:"loading"},
        className:" loading h-full w-full flex flex-col justify-center items-center"
    })
    return loadingPage;
}