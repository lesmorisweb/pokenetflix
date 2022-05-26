import {NavBar} from "./NavBar.class.js"

export class MainPage{

    title= "PokeNetflix";
    constructor(pokemonTypesFromIndex){
        this.navBar = new NavBar(pokemonTypesFromIndex)
    }

}