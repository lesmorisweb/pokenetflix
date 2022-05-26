
import {Pokeapi} from "./services/Pokeapi.class.js"
import {MainPage} from "./components/mainPage/MainPage.class.js"
const pokeApi = new Pokeapi();
const pokemonTypes = await pokeApi.getAllTypes();
console.log(pokemonTypes);
const mainPage = new MainPage(pokemonTypes.results);

