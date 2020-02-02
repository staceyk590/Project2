DROP DATABASE IF EXISTS hotelReview_db;

CREATE DATABASE hotelReview_db;
USE hotelReview_db;

CREATE TABLE author (
    id int AUTO_INCREMENT NOT NULL,
    author_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Hotel (
    id int AUTO_INCREMENT NOT NULL,
    hotelName VARCHAR(50) NOT NULL,
    hotelAddress VARCHAR(50) NOT NULL,
    hotelCity VARCHAR(30) NOT NULL,
    reviewText VARCHAR(250) NOT NULL,
    hotelRatings int,
    user_id int,
    authorReview VARCHAR(50) NOT NULL,
    createdAt date,
    updatedAt date,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES author(id)
);

