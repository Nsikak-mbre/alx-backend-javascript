const fs = require('fs').promises;

const countStudents = async (path, returnOutput = false) => {
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

    const totalStudents = Object.values(studentCountByField).reduce((acc, count) => acc + count, 0);
    let result = `Number of students: ${totalStudents}\n`;

    // Format the number of students in each field
    for (const field in studentCountByField) {
      if (Object.prototype.hasOwnProperty.call(studentCountByField, field)) {
        result += `Number of students in ${field}: ${studentCountByField[field]}. List: ${studentNamesByField[field].join(', ')}\n`;
      }
    }

    if (returnOutput) {
      return result.trim();
    } else {
      console.log(result.trim());
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
