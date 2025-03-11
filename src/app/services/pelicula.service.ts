import { Injectable, inject } from '@angular/core';

import { Pelicula } from '../models/pelicula.model';
import { collection, collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private db : Firestore = inject(Firestore);

  constructor() { }

  getPeliculas(){
    const peliculasCollection = collection(this.db, 'pelicula');
    return collectionData((peliculasCollection), {idField: 'id'}).pipe(first());
  }

  agregarPelicula(pelicula:Pelicula){
    const peliculasCollection = collection(this.db, 'pelicula');
    const peliculaData = {
      titulo: pelicula.titulo,
      estado: pelicula.estado !== undefined ? pelicula.estado : false, 
      genero: pelicula.genero,
      anios: pelicula.anios
    };
    addDoc(peliculasCollection, peliculaData);
  }

  modificarPelicula(pelicula:Pelicula){
    const documentRef = doc(this.db, 'pelicula', pelicula.id);
    updateDoc(documentRef,{
      titulo: pelicula.titulo,
      estado: pelicula.estado,
      genero: pelicula.genero,
      anios: pelicula.anios
    });
  }

  eliminarPelicula(pelicula:Pelicula){
    const documentRef = doc(this.db, 'pelicula', pelicula.id);
    deleteDoc(documentRef);
  }
}
