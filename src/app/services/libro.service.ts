import { Injectable, inject } from '@angular/core';

//AGREGAR IMPORTS
import { Libro } from '../models/libro.model';
import { collection, collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private db : Firestore = inject(Firestore);

  constructor() { }

  //METODO PARA OBTENER TODOS LOS DOCUMENTOS DE LA COLECCION
  getLibros(){
    const librosCollection = collection(this.db, 'libros');//el de libros es la id que pusimos en firebase
    return collectionData((librosCollection), {idField: 'id'}).pipe(first());
  }

  //METODO PARA AGREGAR UN NUEVO DOCUMENTO
  agregarLibro(libro:Libro){
    const librosCollection = collection(this.db, 'libros');
    const libroData = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    };
    addDoc(librosCollection, libroData);
  }

  //METODO PARA MODIFICAR UN DOCUMENTO
  modificarLibro(libro:Libro){
    const documentRef = doc(this.db, 'libros', libro.id);
    updateDoc(documentRef, {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    });
  }

  //METODO PARA BORRAR UN DOCUMENTO
  eliminarLibro(libro:Libro){
    const documentRef = doc(this.db, 'libros', libro.id);
    deleteDoc(documentRef);
  }
}
