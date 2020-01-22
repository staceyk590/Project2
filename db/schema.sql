DROP DATABASE IF EXISTS hotelReview_db;

CREATE DATABASE hotelReview_db;
USE hotelReview_db;

CREATE TABLE author (
    id int AUTO_INCREMENT NOT NULL,
    author_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE hotels (
    id int AUTO_INCREMENT NOT NULL,
    hotel_name VARCHAR(50) NOT NULL,
    hotel_address VARCHAR(50) NOT NULL,
    hotel_city VARCHAR(30) NOT NULL,
    review_text VARCHAR(250) NOT NULL,
    hotel_ratings int,
    user_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES author(id)
);

