import { Component } from '@angular/core';

import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  productos:any;
  producto = new Producto();

  constructor(private productoService:ProductoService){
    this.getProductos();
  }

  async getProductos():Promise < void > {
    this.productos = await firstValueFrom(this.productoService.getProductos());
  }

  insertarProducto(){
    this.productoService.agregarProducto(this.producto);
    this.getProductos();
    this.producto = new Producto();
  }

  selectProducto(productoSeleccionado:Producto){
    this.producto = productoSeleccionado;
  }

  updateProducto(){
    this.productoService.modificarProducto(this.producto);
    this.getProductos();
    this.producto = new Producto();
  }

  deleteProducto(){
    this.productoService.eliminarProducto(this.producto);
    this.getProductos();
    this.producto = new Producto();
  }


}
