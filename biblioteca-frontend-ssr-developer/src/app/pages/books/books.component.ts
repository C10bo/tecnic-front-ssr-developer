import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  standalone: true,
  imports:[ReactiveFormsModule,FormsModule]
})
export class BooksComponent implements OnInit{
  

  public bookFormGroups: FormGroup;
  createRes: any = {};
  messageCorrecto: Boolean = false;

  ngOnInit(): void {
  }

  constructor(private _formBuilder: FormBuilder,private booksService: BooksService, private router: Router) {

    this.bookFormGroups = this._formBuilder.group({
      titulo: ["", Validators.compose([Validators.required])],
      autor: ["", Validators.compose([Validators.required])],
      genero: ["", Validators.compose([Validators.required])],
      disponibilidad: [true],
    }); 
  }
  assignDate(): void {
    this.createRes = {
      titulo: this.bookFormGroups.value.titulo,
      autor: this.bookFormGroups.value.autor,
      genero: this.bookFormGroups.value.genero,
      disponibilidad: this.bookFormGroups.value.disponibilidad,
    }
    console.log('esto es el rest'+ JSON.stringify(this.createRes))
  }

  createBook(): void {
    this.assignDate();
    this.messageCorrecto =  true;
    this.bookFormGroups.reset();
    setTimeout(() => {
      this.messageCorrecto = false;
    }, 5000);
  }
}
