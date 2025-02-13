package com.biblioteca.bibliotecabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.biblioteca.bibliotecabackend.repository.entity.BookEntity;

public interface BookRepository extends JpaRepository<BookEntity,Long> {
    
    BookEntity findById(int id);
}
