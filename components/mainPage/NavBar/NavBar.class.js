export class NavBar {
    container = document.querySelector(".navBar");

    constructor(pokemonTypesFromMainPage) {
        this.pokemonTypes = pokemonTypesFromMainPage;
        this.display();
    }

    display() {
        let temporalHTMLText = "<div class='navBar-types-container'>";
        this.pokemonTypes.forEach(element => {
            temporalHTMLText += `<button class="navbar-type-button">
                                    ${element.name}
                                 </button>` ;
        });
        temporalHTMLText += "</div>"
        this.container.innerHTML = temporalHTMLText;
    }
}