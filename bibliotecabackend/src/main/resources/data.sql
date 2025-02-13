CREATE TABLE IF NOT EXISTS BOOK (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100)
);

INSERT INTO BOOK (title, author, genre) VALUES ('Inferno', 'Dan Brown', 'mistery');
                                                --('Angels And Demons', 'Dan Brown', 'mistery');
select * from book;