const table =
  'CREATE TABLE RESTAURANT (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, email varchar(255) NOT NULL, location varchar(255) NOT NULL, phone varchar(255) NOT NULL, opening varchar(255) NOT NULL, cuisineOffered varchar(255) NOT NULL, deliveryAreas varchar(255) NOT NULL,minOrderRequirements varchar(255) NOT NULL, password varchar(255) NOT NULL, PRIMARY KEY (id));';

module.exports = table;
