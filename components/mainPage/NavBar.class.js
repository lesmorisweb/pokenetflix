export class NavBar{
    constructor(pokemonTypes){
        this.pokemonTypes = pokemonTypes;
        this.display();

        this.container = document.getQuerySelector(".navBar");

        console.log("Se creo el navbar");
        console.log(pokemonTypes);
    }

    display() {
        
    }
}