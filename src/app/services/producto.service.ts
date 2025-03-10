import { Injectable,inject } from '@angular/core';

import { Producto } from '../models/producto.model';
import { collection, collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private db : Firestore = inject(Firestore);

  constructor() { }

  getProductos(){
    const productosCollection = collection(this.db, 'productos');
    return collectionData((productosCollection), {idField: 'id'}).pipe(first());
  }

  agregarProducto(producto:Producto){
    const productosCollection = collection(this.db, 'productos');
    const productoData = {
      descripcion: producto.descripcion,
      precio: producto.precio
    };
    addDoc(productosCollection, productoData);
  }

  modificarProducto(producto:Producto){
    const documentRef = doc(this.db, 'productos', producto.id);
    updateDoc(documentRef, {
      descripcion: producto.descripcion,
      precio: producto.precio
    });
  }

  eliminarProducto(producto:Producto){
    const documentRef = doc(this.db, 'productos', producto.id);
    deleteDoc(documentRef);
  }
}
