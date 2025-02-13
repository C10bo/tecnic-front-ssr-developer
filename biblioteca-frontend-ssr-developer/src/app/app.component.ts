import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  providers: [BooksService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblioteca-frontend-ssr-developer';
}
