const fs = require('fs');

const countStudents = (path) => {
  try {
    // read the file synchronously
    const data = fs.readFileSync(path, { encoding: 'utf8' });

    // split the file by lines
    const lines = data.trim().split('\n');

    // remove the headers
    lines.shift();

    // create an object to store the data
    const fieldCounts = {};
    const fieldStudents = {};

    // iterate over the lines
    lines.forEach((line) => {
      const [firstName, lastName, age, field] = line.split(',');

      if (firstName && lastName && age && field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldStudents[field] = [];
        }
        fieldCounts[field] += 1;
        fieldStudents[field].push(firstName);
      }
    });

    // print the data
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    // print the number of students per field
    for (const field in fieldCounts) {
      if (fieldCounts.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldStudents[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
