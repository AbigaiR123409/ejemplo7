import { Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {   path: 'libro', 
        component: LibroComponent
    },
    {
        path: 'producto', 
        component: ProductoComponent
    },
    {
        path: 'pelicula', 
        component:PeliculaComponent
    },
    {
        path: 'about', 
        component:AboutComponent
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
