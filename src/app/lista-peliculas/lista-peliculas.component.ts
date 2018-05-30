import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service';

import {MatCardModule} from '@angular/material/card';

import {Pelicula} from '../Pelicula';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  pagina: number =1;
  totalPagina: number;
  peliculas: Pelicula[];
  constructor(private peliculaservice: PeliculaService) { }

  ngOnInit() {
    this.peliculaservice.paginaActual(this.pagina).then(p => this.peliculas = p);
  }

  paginaSiguiente(): void{

    if (this.pagina==this.totalPagina){
      console.log("ESTAS EN LA ULTIMA PÁGINA")
    }else{
      this.pagina ++;
      console.log(this.pagina);
      this.peliculaservice.paginaActual(this.pagina).then(p => this.peliculas = p);
    }

  }

  paginaAnterior(): void{
    
  }
}
