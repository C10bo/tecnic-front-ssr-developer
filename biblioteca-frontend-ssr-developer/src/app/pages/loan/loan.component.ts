import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule]
})
export class LoanComponent {

  public loanFormGroups: FormGroup;
  messageCorrecto: Boolean = false;


  constructor(private _formBuilder: FormBuilder) {
  
      this.loanFormGroups = this._formBuilder.group({
        nombre: ["", Validators.compose([Validators.required])],
        fechaPrestamo: ["", Validators.compose([Validators.required])],
        libro: ["", Validators.compose([Validators.required])],
        fechaDevolucion: ["", Validators.compose([Validators.required])],
      }); 
    }

}
