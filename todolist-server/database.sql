-- psql -U postgres
-- password: king6123

CREATE DATABASE perntodo;

CREATE TABLE todo(
    Todo_id SERIAL PRIMARY KEY,
    Description VARCHAR(255)
);