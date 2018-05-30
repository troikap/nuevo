import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PeliculaService } from './pelicula.service';

import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent
  ],
  imports: [HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
