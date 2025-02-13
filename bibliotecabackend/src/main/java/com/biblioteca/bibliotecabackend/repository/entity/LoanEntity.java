package com.biblioteca.bibliotecabackend.repository.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "LOAN")
public class LoanEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "id_book")
    private long bookId;
    @Column(name = "loan_date")
    private String loanDate;
    @Column(name = "end_date")
    private String endDate;
    @Column(name = "client_name")
    private String clientName;
    
}
