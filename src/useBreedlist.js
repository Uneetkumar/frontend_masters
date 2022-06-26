import { useState,useEffect } from "react";

const localCach ={}
export default function useBreedList(animals){
    const [breedList , setBreedList] =useState([])
    // const [status, setStatus] = useState("unloaded")

// useEffect(()=> {
//     alert(status);
// },[status]);

    useEffect(()=>{
    if (!animals) {
        setBreedList([]);
    }else if(localCach[animals]){
        setBreedList(localCach[animals])
    }
    else {
        RequestBreedList();
    }
    async function RequestBreedList(){
        setBreedList([]);
        // setStatus("loading")
        const res = await fetch(
           `http://pets-v2.dev-apis.com/breeds?animal=${animals}`
        );
        const json = await res.json();
        localCach[animals] = json.breeds || [];
        setBreedList(localCach[animals]);
        // setStatus("loaded");
    }
},[animals]);
return [breedList];
}