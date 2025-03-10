import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LibroComponent,ProductoComponent,PeliculaComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejem2';
}
