import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { LoanComponent } from './loan/loan.component';


const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'book',
      component: BooksComponent
    },
    {
      path: 'loan',
      component: LoanComponent
    },
    {
      path: '**',
      redirectTo: 'home'
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BooksRoutingModule { }