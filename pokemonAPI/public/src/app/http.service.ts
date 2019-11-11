import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }
  getPokemon(){
    let charzard = this._http.get('https://pokeapi.co/api/v2/pokemon/6');
    charzard.subscribe((data) => { console.log("Pokemon",data)})
    charzard.subscribe((data: any) => {
      for (var i = 0; i < data.abilities.length; i++) {
          console.log(data.abilities[i].ability.name)
    }
    let blaze = data.abilities[1].ability.name
    this.getAbility(blaze);
  })
}
getAbility(blaze){
  let ability = this._http.get('https://pokeapi.co/api/v2/ability/66');
  ability.subscribe(data => {
    console.log("ability",data)
  })
  ability.subscribe((data:any ) => {
    for( let i = 0; i < data.pokemon.length; i++){
      console.log(data.pokemon[i].pokemon.name)
    }
  })
}
}

