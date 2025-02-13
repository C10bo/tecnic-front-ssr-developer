package com.biblioteca.bibliotecabackend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.biblioteca.bibliotecabackend.repository.BookRepository;
import com.biblioteca.bibliotecabackend.service.IBookService;

@Service
public class BookService implements IBookService{
 
    @Autowired
    private BookRepository repository;

    @Override
    public List<?> getBooks(){
        return repository.findAll();
    }

    @Override
    public Object getBookById(String id){
        int parseId = Integer.parseInt(id);
        return repository.findById(parseId);
    }
}
