import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule]
})
export class LoanComponent {

  public selectedBook: Book | undefined;
  public loanFormGroups: FormGroup;
  messageCorrecto: Boolean = false;


  constructor(private booksService: BooksService, private _formBuilder: FormBuilder) {
  
      this.loanFormGroups = this._formBuilder.group({
        nombre: ["", Validators.compose([Validators.required])],
        fechaPrestamo: ["", Validators.compose([Validators.required])],
        libro: ["", Validators.compose([Validators.required])],
        fechaDevolucion: ["", Validators.compose([Validators.required])],
      }); 
    }

    editBook() {
    
      this.booksService.editBook({
        "id": this.loanFormGroups.get('libro')!.value,
        "initDate": this.loanFormGroups.get('fechaPrestamo')!.value,
        "endDate": this.loanFormGroups.get('fechaDevolucion')!.value,
        "clientName": this.loanFormGroups.get('nombre')!.value,
        "available": 0
      }).subscribe((data) => {
      }, (error) => {
        console.log(error.error.message);
      });
      this.messageCorrecto =  true;
    this.loanFormGroups.reset();
    setTimeout(() => {
      this.messageCorrecto = false;
    }, 5000);
  
  
  
    }



}
