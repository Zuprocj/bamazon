DROP DATABASE IF EXISTS productsDB;
CREATE DATABASE productsDB;

USE productsDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NUll,
    price DECIMAL(10,4) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR (45) NOT NULL,
    over_head_costs DECIMAL (10,2),
    PRIMARY KEY (department_id)
);

SELECT B. department_id, A.department_name, b.over_head_costs, SUM(A.product_sales) AS Total_Sales_By_Dept, SUM(A.product_sales) - B.over_head_costs AS Profit
FROM products A, departments B
WHERE a.department_name = b.department_name
GROUP BY department_name
ORDER BY department_id;

SELECT * FROM products;
