const http = require('http');
const path = require('path');
const countStudents = require('./3-read_file_async'); // Ensure the correct path to your module

// Define the host and port
const hostname = '127.0.0.1';
const port = 1245;

// Create the server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(path.resolve(__dirname, 'database.csv'), true);
      res.end(data);
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
});

// Listen on the specified port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
