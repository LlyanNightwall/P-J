import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http : HttpClient){
  }

  async getClassesNames(array: string[]){
    const api = "https://www.dnd5eapi.co/api/classes/";
    const data = await firstValueFrom(this.http.get(api)) as {count: number, results : any[]};
    console.log(data);
    for(let classe of data.results){
      array.push(classe.index);
    }
  }

  async getClasseInfo(classe : string){
    const api = `https://www.dnd5eapi.co/api/classes/${classe}/`;
    const data = await firstValueFrom(this.http.get(api));
    console.log(data);
  }

}
