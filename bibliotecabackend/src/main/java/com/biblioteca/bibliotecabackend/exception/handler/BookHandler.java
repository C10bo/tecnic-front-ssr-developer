package com.biblioteca.bibliotecabackend.exception.handler;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.biblioteca.bibliotecabackend.exception.model.BookModelException;


@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class BookHandler {
    
    @ExceptionHandler(value = Exception.class)
    public final ResponseEntity<?> handleGeneralException(final Exception exception){
        BookModelException response = new BookModelException("500", exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

}
