import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'books',
        loadChildren: () => import('./pages/books-routing.module').then(m => m.BooksRoutingModule)
    },
    {
        path: '**',
        redirectTo: 'books'
    }

];
