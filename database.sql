CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(200),
    PRIMARY KEY (id),
    CONSTRAINT UC_users_email UNIQUE (email),
);

CREATE TABLE news (
    id int NOT NULL,
    title varchar(255) NOT NULL,
    newsUrl varchar(255) not null,
    subtitle varchar(255) not null,
    imgUrl varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE relatedNews (
    id int NOT NULL,
    idNews int NOT NULL ,
    title varchar(255) NOT NULL,
    link varchar(255) not nul,
    PRIMARY KEY (id),
    FOREIGN KEY (idNews) REFERENCES news(id)
);

