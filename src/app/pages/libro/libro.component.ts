import { Component } from '@angular/core';

//agregamos estos imports
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import {FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libro',
  imports: [FormsModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

  //PROPIEDADES
  libros:any;
  libro = new Libro();

  constructor(private libroService:LibroService){
    this.getLibros();
  }

  //METODO PARA OBTENER EL LISTADO DE LIBROS
  async getLibros():Promise < void > {
    this.libros = await firstValueFrom(this.libroService.getLibros());
  }

  //METODO PARA INSERTAR UN LIBRO DESDE EL FORM
  insertarLibro(){
    this.libroService.agregarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

  //METODO PARA SELECCIONAR UN LIBRO DE LA TABLA
  selectLibro(libroSeleccionado:Libro){
    this.libro = libroSeleccionado;
  }

  //METODO PARA MODIFICAR UN LIBRO
  updateLibro(){
    this.libroService.modificarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

  //METODO PARA ELIMINAR UN LIBRO
  deleteLibro(){
    this.libroService.eliminarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

}
