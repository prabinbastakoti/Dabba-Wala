const table = `CREATE TABLE Customer (
    id int,
    firstName varchar(255),
    lastName varchar(255),
    username varchar(255),
    email varchar(255),
    password varchar(255),
    PRIMARY KEY (id)
);`;

module.exports = table;
