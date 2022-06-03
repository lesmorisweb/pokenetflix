export class Card {
   constructor(id, image, name) {
         this.id = id;
         this.name = name;
         this.image = image;
      }
   
   display() {
      let htmlText =
 `        <div class="card">
            <img alt="${this.name}" src="${this.image}"/>
            <h6>${this.name.toUpperCase()}</h6>
         </div>`


      return htmlText;
   }


  
}



