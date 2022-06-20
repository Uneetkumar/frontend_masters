import { useState } from "react";


const SearchParameters = () =>{
    const ANIMALS = ["cat","dog","rat"]
    const BREED = ["somthing","something","something"]
    const [breed , setbreed] = useState();
    const[ location, setlocation ]= useState(""); 
    const [animals, setanimals] = useState("");
    return (
        <div>
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location } onChange={(e)=>setlocation(e.target.value)} placeholder="location"/>
                </label>
                <h4>{location}</h4>
                <label htmlFor="animals">animals
                <select
                id="animals"
                value={animals}
                onChange={
                    (e) => {setanimals(e.target.value)
                   }}
                >
                    <option />
                    {
                        ANIMALS.map(animals => {
                            return(
                                <option key={animals} value={animals}>
                                    {animals}
                                </option>
                            )
                        })
                    }
                </select>
                </label>
                <label htmlFor="breed">breed
                <select
                 id="animals"
                 value={breed}
                 onChange={
                     (e) => {setbreed(e.target.value)
                    }}
                >
                    <option/>
                {
                        BREED.map(
                            breed => {
                                return(
                                    <option key={breed} value={breed}>
                                        {breed}
                                    </option>
                                )
                            }
                        )
                    }
                </select>
                
                </label>
                <button >Submit</button>
            </form>
        </div>
    )
}
export default SearchParameters;