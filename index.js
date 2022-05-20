import { Pokeapi } from "./services/Pokeapi.class.js";


const pokeApi = new Pokeapi();

pokeApi.getPokemonsByType("water")
   .then((data) => {
      console.log(data);
   })