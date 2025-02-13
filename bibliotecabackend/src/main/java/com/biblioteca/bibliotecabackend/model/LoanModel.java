package com.biblioteca.bibliotecabackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoanModel {

    private int id;
    private String initDate;
    private String endDate;
    private int available;
    private String clientName;
    
}
