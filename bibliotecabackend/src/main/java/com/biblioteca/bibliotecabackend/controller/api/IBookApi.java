package com.biblioteca.bibliotecabackend.controller.api;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

public interface IBookApi{

    @GetMapping(path = "/api/books", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> getBooks();

    @GetMapping(path = "api/books/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> getBooksById(@PathVariable String id);
}