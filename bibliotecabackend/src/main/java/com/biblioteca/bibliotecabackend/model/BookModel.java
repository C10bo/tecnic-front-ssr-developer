package com.biblioteca.bibliotecabackend.model;

import lombok.Data;

@Data
public class BookModel {
    
    private Long id;
    private String titulo;
    private String autor;
    private String genero;
    private Long disponiilada;
}
