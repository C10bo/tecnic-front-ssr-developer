package com.biblioteca.bibliotecabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.bibliotecabackend.controller.api.IBookApi;
import com.biblioteca.bibliotecabackend.service.impl.BookService;


@RestController
public class BookController implements IBookApi {

    @Autowired
    private BookService service;
     
    @Override
    public ResponseEntity<?> getBooks(){
        return ResponseEntity.ok(service.getBooks());
    }

    @Override
    public ResponseEntity<?> getBooksById(String id){
        return ResponseEntity.ok(service.getBookById(id));
    }

}
