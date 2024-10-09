const getStudentIdsSum = (students) => {
  if (Array.isArray(students) && students.length > 0) {
    return students.reduce((acc, curr) => acc + curr.id, 0);
  }
  return 0;
};

export default getStudentIdsSum;
