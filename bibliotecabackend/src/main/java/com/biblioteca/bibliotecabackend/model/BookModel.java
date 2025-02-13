package com.biblioteca.bibliotecabackend.model;

import lombok.Data;

@Data
public class BookModel {
    
    private String title;
    private String author;
    private String genre;
    private int available;
}
