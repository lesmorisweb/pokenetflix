export class Pokeapi {

   baseURL = "https://pokeapi.co/api/v2"
   headers = {
      "content-type": "json"
   }


   config = {
      method: "GET",
      headers: this.headers
   }

   constructor() {
      this.queryParam = "";
   }

   getPokemonsByType(type) {
      this.queryParam = "type";
      const request = new Request(`${this.baseURL}/${this.queryParam}/${type}`, this.config);


    return fetch(request)
      .then((respuesta)=> respuesta.json())
   }

   getAllTypes(){
      this.queryParam = "type";
      const typeRequest = new Request(`${this.baseURL}/${this.queryParam}`, this.config);

      return fetch(typeRequest)
         .then((respuesta)=> respuesta.json())
   }

}

///  https://www.pokeapi.co/api/v2/element/rock
///  {         base }        queryparam}{item} 




