export class Pokeinfo{

   // Creando las caracteristicas que no son comunes a todas las pokeInfo
   constructor(id, image, information, name) {
      this.id = id;
      this.image = image;
      this.information = information;
      this.name = name;

      this.display();
   }
   
   display(){
      
   }

}

// en otra parte del mundo


const pokeinfo = new PokeInfo(1, "http", {info: 3}, "pepito");
console.log("mucho codigo bla bla bla")


pokeinfo.display();