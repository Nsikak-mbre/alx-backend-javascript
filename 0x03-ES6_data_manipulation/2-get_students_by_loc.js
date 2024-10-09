const getStudentsByLocation = (students, city) => {
  if (Array.isArray(students) && students.length > 0 && typeof city === 'string') {
    return students.filter((student) => student.location === city);
  }
  return [];
};

export default getStudentsByLocation;
