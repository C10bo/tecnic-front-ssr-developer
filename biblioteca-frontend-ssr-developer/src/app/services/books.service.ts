import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
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

  createBooks(datos: any){
    const url = this.BASE_URL + "/api/books";
    let response: Book[] = [];
    this.httpClient.post<Book>(url, datos).subscribe(
      (data) => {
        //response = data
      } 
    );
    return response;
  }

  editBook(dato: any): Observable<any> {
    const url = this.BASE_URL + "/api/books";
    let response: Book[] = [];
    this.httpClient.put(url,dato);
    return this.httpClient.put(url,dato);
  }
}
