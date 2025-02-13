package com.biblioteca.bibliotecabackend.service;

import java.util.List;

public interface IBookService {
    
    List<?> getBooks();
    Object getBookById(String id);
}
