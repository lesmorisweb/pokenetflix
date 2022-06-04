import {Card} from "./card/Card.class.js";

export class CardPage{
    container = document.getElementById("cards-container");

    constructor(id, pokeArrayInfo){
        console.log(pokeArrayInfo);
        this.cards = pokeArrayInfo.map(pokeInfo => (new Card(pokeInfo.id, pokeInfo.sprites.front_default, pokeInfo.name)));

        this.displayCards();
    }

    displayCards(){
        let textHTML = ""
        this.cards.forEach(card => {
            textHTML += card.display()
        });
        this.container.innerHTML = textHTML
    }
}