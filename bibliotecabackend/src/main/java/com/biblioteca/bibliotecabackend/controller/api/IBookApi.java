package com.biblioteca.bibliotecabackend.controller.api;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.biblioteca.bibliotecabackend.model.BookModel;
import com.biblioteca.bibliotecabackend.model.LoanModel;
import com.biblioteca.bibliotecabackend.repository.entity.BookEntity;

public interface IBookApi{

    @GetMapping(path = "/api/books", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> getBooks();

    @GetMapping(path = "api/books/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> getBooksById(@PathVariable String id);

    @PostMapping(path = "/api/books", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> createBook(@RequestBody BookModel request);

    @PutMapping(path = "/api/books", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> updateBook(@RequestBody LoanModel request);
}