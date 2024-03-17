const table =
  'CREATE TABLE MenuItem (id int, name varchar(255),price varchar(255),category varchar(255),restaurantID int,PRIMARY KEY (id),FOREIGN KEY (restaurantID) REFERENCES Restaurant(id))';

module.exports = table;
