CREATE TABLE IF NOT EXISTS BOOK (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    available INT NOT NULL
);

INSERT INTO BOOK (title, author, genre,available) VALUES ('Inferno', 'Dan Brown', 'mistery', 1),
                                                ('Angels And Demons', 'Dan Brown', 'mistery', 1);

CREATE TABLE IF NOT EXISTS LOAN (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_book BIGINT NOT NULL,
    loan_date VARCHAR(100) NOT NULL,
    end_date VARCHAR(100),
    client_name VARCHAR(255) NOT NULL
);
