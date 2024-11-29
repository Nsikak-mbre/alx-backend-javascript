const express = require('express');

const app = express();
const port = 1245;

// Define the route /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// define the route /students
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

module.exports = app;
