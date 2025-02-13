package com.biblioteca.bibliotecabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biblioteca.bibliotecabackend.repository.entity.LoanEntity;

public interface LoanRepository extends JpaRepository<LoanEntity, Long> {
    
}
