import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Pelicula } from './Pelicula'

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http:Http) { }

  paginaActual(p:number): Promise<Pelicula[]>{
      const url = 'https://tv-v2.api-fetch.website/movies/'+p.toString()+'?sort=trending';
    return this.http.get(url).toPromise().then(response => response.json() as Pelicula[]).catch(this.handleError);
  }

  cantPaginas(): Promise<number>{
     const url = 'https://tv-v2.api-fetch.website/movies/';
    return this.http.get(url).toPromise().then(response => response.json.length as number).catch(this.handleError);

  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 
}
