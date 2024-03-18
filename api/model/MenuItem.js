const table =
  'CREATE TABLE MenuItem (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL,price varchar(255) NOT NULL,category varchar(255) NOT NULL,restaurantID int NOT NULL,PRIMARY KEY (id),FOREIGN KEY (restaurantID) REFERENCES Restaurant(id))';

module.exports = table;
