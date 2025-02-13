package com.biblioteca.bibliotecabackend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.biblioteca.bibliotecabackend.model.BookModel;
import com.biblioteca.bibliotecabackend.model.LoanModel;
import com.biblioteca.bibliotecabackend.repository.BookRepository;
import com.biblioteca.bibliotecabackend.repository.LoanRepository;
import com.biblioteca.bibliotecabackend.repository.entity.BookEntity;
import com.biblioteca.bibliotecabackend.repository.entity.LoanEntity;
import com.biblioteca.bibliotecabackend.service.IBookService;

@Service
public class BookService implements IBookService{
 
    @Autowired
    private BookRepository repository;

    @Autowired
    private LoanRepository loanRepository;

    @Override
    public List<?> getBooks(){
        return repository.findAll();
    }

    @Override
    public Object getBookById(String id){
        int parseId = Integer.parseInt(id);
        return repository.findById(parseId);
    }

    @Override
    public Object createBook(BookModel request) {
        BookEntity book = new BookEntity();
        book.setTitle(request.getTitle());
        book.setAuthor(request.getAuthor());
        book.setGenre(request.getGenre());
        book.setAvailable(request.getAvailable());
        repository.save(book);
        return request;
    }

    @Override
    public Object updateBook(LoanModel request) {
        BookEntity book = repository.findById(request.getId());

        if(book.getAvailable() == 0)
            throw new RuntimeException("Libro prestado");

        book.setAvailable(request.getAvailable());
        repository.save(book);

        

        LoanEntity loanEntity = new LoanEntity();
        loanEntity.setBookId(request.getId());
        loanEntity.setLoanDate(request.getInitDate());
        loanEntity.setEndDate(request.getEndDate());
        loanEntity.setClientName(request.getClientName());
        loanRepository.save(loanEntity);
        return loanEntity;
    }
}
