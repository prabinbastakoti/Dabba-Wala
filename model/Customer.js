const table =
  'CREATE TABLE CUSTOMER (id int NOT NULL AUTO_INCREMENT, fullName varchar(255) NOT NULL, email varchar(255) NOT NULL, phone varchar(255) NOT NULL, delivery varchar(255) NOT NULL, cuisineType varchar(255) NOT NULL, dietaryRestrictions varchar(255) NOT NULL, password varchar(255) NOT NULL, PRIMARY KEY (id));';

module.exports = table;
