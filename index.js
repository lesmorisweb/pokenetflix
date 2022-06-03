import { Pokeapi } from "./services/Pokeapi.class.js";
import { MainPage } from "./components/mainPage/MainPage.class.js";

const pokeApi = new Pokeapi();

const pokeTypes = await pokeApi.getAllTypes();
const pokeArray = await pokeApi.getPokemonsInfoByType("fire");

const mainPage = new MainPage(pokeTypes.pokemon, pokeArray);
