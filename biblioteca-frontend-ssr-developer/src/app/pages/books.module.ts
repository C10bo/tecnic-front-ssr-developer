import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    
  ]
})
export class ProductsModule { }