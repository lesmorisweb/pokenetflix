export class NavBar{
    constructor(pokemonTypesFromMainPage){
        this.pokemonTypes = pokemonTypesFromMainPage;
        this.display();

        this.container = document.getElementsByClassName("navBar");

  
        console.log(this.pokemonTypes);
    }

    display() {

        let htmlText = "<ul>"

        this.pokemonTypes.forEach(type => {
            htmlText += `<button class="navbar-link">${type.name}</button>`
        })
        htmlText+= "</ul>"
        
        this.container.innerHTML = htmlText;

    }
 
    
}