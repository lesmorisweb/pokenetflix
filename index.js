import { Pokeapi } from "./services/Pokeapi.class.js";
import { MainPage } from "./components/mainPage/MainPage.class.js";

const pokeApi = new Pokeapi();
const pokeTypes = await pokeApi.getAllTypes();

const mainPage = new MainPage(pokeTypes.results);