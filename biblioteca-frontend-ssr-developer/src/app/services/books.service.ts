import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private BASE_URL = "http://localhost:8080";
  
  constructor(private httpClient: HttpClient) { 
  }

  getBooks(): Book[]{
    const url = this.BASE_URL + "/api/books";
    let response: Book[] = [];
    this.httpClient.get<Book[]>(url).subscribe(
      (data) => {
        response = data
      }
    );
    return response;
  }
}
