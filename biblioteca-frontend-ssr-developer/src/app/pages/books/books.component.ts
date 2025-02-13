import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule]
})
export class BooksComponent implements OnInit{
  

  public bookFormGroups: FormGroup;
  createRes: any = {};
  messageCorrecto: Boolean = false;

  ngOnInit(): void {
  }

  constructor(private _formBuilder: FormBuilder,private booksService: BooksService, private router: Router) {

    this.bookFormGroups = this._formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      author: ["", Validators.compose([Validators.required])],
      genre: ["", Validators.compose([Validators.required])],
      available: [true],
    }); 
  }
  assignDate(): void {
    this.createRes = {
      title: this.bookFormGroups.value.title,
      author: this.bookFormGroups.value.author,
      genre: this.bookFormGroups.value.genre,
      available: this.bookFormGroups.value.available,
    }
  }

  createBook(): void {
    this.assignDate();
    this.booksService.createBooks(this.createRes);
    this.messageCorrecto =  true;
    this.bookFormGroups.reset();
    setTimeout(() => {
      this.messageCorrecto = false;
    }, 5000);

    
  }
}
