import {NavBar} from "./NavBar/NavBar.class.js"
import {CardPage} from "../card/CardPage.class.js";

export class MainPage{

    title= "PokeNetflix";
    constructor(pokemonTypesFromIndex, pokeArrayInfo){
        // this.navBar = new NavBar(pokemonTypesFromIndex);


        this.cardPage = new CardPage(1, pokeArrayInfo);
    }



}