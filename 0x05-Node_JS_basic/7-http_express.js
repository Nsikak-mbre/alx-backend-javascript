const express = require('express');
const path = require('path');
const countStudents = require('./3-read_file_async'); // Ensure this points to the correct path

const app = express();
const port = 1245;

// Home route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students route
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  // Name of the database file should be passed as an argument
  const databasePath = path.resolve(__dirname, 'database.csv');

  try {
    const data = await countStudents(databasePath, true);
    res.end(data);
  } catch (error) {
    res.status(500).end(error.message);
  }
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
