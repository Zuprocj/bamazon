DROP DATABASE IF EXISTS productsDB;
CREATE DATABASE productsDB;

USE productsDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NUll,
    price DECIMAL(10,4) NOT NULL,
    stock_quantity INT NOT NULL,
    product_sales DECIMAL (10,2) NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR (45) NOT NULL,
    over_head_costs DECIMAL (10,2),
    PRIMARY KEY (department_id)
);
