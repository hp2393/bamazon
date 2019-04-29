-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;

-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(11) NOT NULL,
    PRIMARY KEY (item_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Samsung Televison", "ELECTRONICS", 749.99, 70);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Premium Headphones", "ELECTRONICS", 250.00, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Kitchen Aid", "HOME & KITCHEN", 278.00, 37);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Dinnerware sets", "HOME & KITCHEN", 39.99, 45);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Sectional Sofas", "HOME & KITCHEN", 675.89, 40);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Dressers", "HOME & KITCHEN", 79.99, 25);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Athletic Apparel", "SPORTS &  OUTDOORS", 29.99, 22);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Hunting", "SPORTS &  OUTDOORS", 56.00, 12);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("iPhone X", "CELL PHONES", 999.99, 26);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Samsung S10", "CELL PHONES", 899.99, 19);
    
    
SELECT * FROM products;

