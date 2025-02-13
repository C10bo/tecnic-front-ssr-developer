package com.biblioteca.bibliotecabackend.exception.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class BookModelException {

    private String code;
    private String message;
    
}
