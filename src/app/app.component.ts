import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { MenuComponent } from "./pages/menu/menu.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejem2';
}
