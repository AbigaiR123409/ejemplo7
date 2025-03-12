import { Component } from '@angular/core';

import { Pelicula } from '../../models/pelicula.model';
import { PeliculaService } from '../../services/pelicula.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  imports: [FormsModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  peliculas:any;
  pelicula = new Pelicula();

  constructor(private peliculaService:PeliculaService){
    this.getPeliculas();
  }

  async getPeliculas():Promise < void > {
    this.peliculas = await firstValueFrom(this.peliculaService.getPeliculas());
  }

  insertarPelicula(){
    this.peliculaService.agregarPelicula(this.pelicula);
    this.getPeliculas();
    this.pelicula = new Pelicula();
    
  }

  selectPelicula(peliculaSeleccionado:Pelicula){
    this.pelicula = peliculaSeleccionado;
  }

  updatePelicula(){
    this.peliculaService.modificarPelicula(this.pelicula);
    this.getPeliculas();
    this.pelicula = new Pelicula();
  }

  deletePelicula(){
    this.peliculaService.eliminarPelicula(this.pelicula);
    this.getPeliculas();
    this.pelicula = new Pelicula();
  }

  validarPelicula(): boolean {
    if (!this.pelicula.titulo || this.pelicula.titulo.trim().length < 10) {
        alert("El título debe tener al menos 10 caracteres.");
        return false;
    }
    if (!this.pelicula.genero || this.pelicula.genero.trim().length === 0) {
        alert("El genero es obligatorio.");
        return false;
    }
    if (!this.pelicula.anios || this.pelicula.anios < 0) {
        alert("El año es obligatorio");
        return false;
    }
    return true;
  }

}
