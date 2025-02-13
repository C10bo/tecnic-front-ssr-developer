import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public books: Book[] = [];
  public selectedProduct: Book | undefined;

  constructor(private booksService: BooksService){
    
  }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  edit(): void {
    console.log(this.books);
  }


}
