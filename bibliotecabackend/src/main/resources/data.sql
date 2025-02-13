CREATE TABLE IF NOT EXISTS BOOK (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    available INT NOT NULL
);

INSERT INTO BOOK (title, author, genre,available) VALUES ('Inferno', 'Dan Brown', 'mistery', 1);
                                                --('Angels And Demons', 'Dan Brown', 'mistery');
select * from book;