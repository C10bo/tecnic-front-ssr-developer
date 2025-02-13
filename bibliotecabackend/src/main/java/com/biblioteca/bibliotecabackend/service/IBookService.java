package com.biblioteca.bibliotecabackend.service;

import java.util.List;

import com.biblioteca.bibliotecabackend.model.BookModel;
import com.biblioteca.bibliotecabackend.model.LoanModel;
import com.biblioteca.bibliotecabackend.repository.entity.BookEntity;

public interface IBookService {
    
    List<?> getBooks();
    Object getBookById(String id);
    Object createBook(BookModel request);
    Object updateBook(LoanModel request);
}
