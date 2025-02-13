import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    
  ]
})
export class ProductsModule { }