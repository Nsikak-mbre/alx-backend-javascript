const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const lines = data.trim().split('\n');
    lines.shift(); // Remove the header

    const studentCountByField = {};
    const studentNamesByField = {};

    // Process the lines
    lines.forEach((line) => {
      const [firstName, lastName, age, field] = line.split(',');

      // Ensure the line is valid
      if (firstName && lastName && age && field) {
        if (!studentCountByField[field]) {
          studentCountByField[field] = 0;
          studentNamesByField[field] = [];
        }
        studentCountByField[field] += 1;
        studentNamesByField[field].push(firstName);
      }
    });

    // Log the total number of students
    const totalStudents = Object.values(studentCountByField).reduce((acc, count) => acc + count, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const field in studentCountByField) {
      if (Object.prototype.hasOwnProperty.call(studentCountByField, field)) {
        console.log(`Number of students in ${field}: ${studentCountByField[field]}. List: ${studentNamesByField[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
