const app = require('./app');
const config = require('./utils/config');

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

// Connect to the MySQL database
config.Connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + config.Connection.threadId);
});
