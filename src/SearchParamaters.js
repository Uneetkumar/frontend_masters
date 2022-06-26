import { useEffect, useState } from "react";
import Pets from "./Pets";
// import Pets from "./Pets";
import useBreedList from "./useBreedlist";
import Result from "./result";

const ANIMALS = ["cat", "dog", "rat"];

const SearchParameters = () => {
    const [breed, setbreed] = useState();
    const [location, setlocation] = useState("");
    const [animals, setanimals] = useState("");
    const [BREED] = useBreedList(animals);
    const [pets, setPets] = useState([]);

  useEffect(() => {
    RequestPets();
  }, []);

  async function RequestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animals}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div>
      <form
      onSubmit={(e)=>{
        e.preventDefault();
        RequestPets();
      }}>
        <label htmlFor='location'>
          location
          <input
            id='location'
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            placeholder='location'
          />
        </label>
        <h4>{location}</h4>
        <label htmlFor='animals'>
          animals
          <select
            id='animals'
            value={animals}
            onChange={(e) => {
              setanimals(e.target.value);
            }}>
            <option />
            {ANIMALS.map((animals) => {
              return (
                <option key={animals} value={animals}>
                  {animals}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor='breed'>
          breed
          <select
            id='animals'
            value={breed}
            onChange={(e) => {
              setbreed(e.target.value);
            }}>
            <option />
            {BREED.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Result pets ={pets}/>
    </div>
  );
};
export default SearchParameters;
