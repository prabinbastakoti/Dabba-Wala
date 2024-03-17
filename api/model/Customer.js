const table =
  'CREATE TABLE Customer (id int NOT NULL AUTO_INCREMENT,firstName varchar(255) NOT NULL,lastName varchar(255) NOT NULL, accountType varchar(255) NOT NULL, username varchar(255) NOT NULL,email varchar(255) NOT NULL,password varchar(255) NOT NULL,PRIMARY KEY (id));';

module.exports = table;
