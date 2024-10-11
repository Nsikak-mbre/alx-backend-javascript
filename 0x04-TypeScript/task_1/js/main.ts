interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Index signature to allow additional properties
  }

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  // Create an instance of Directors
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log(director1);
  
  // Implementing the Teacher interface
  const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: false // Additional property
  };
  
  const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "Los Angeles",
    yearsOfExperience: 5,
    contract: true // Additional property
  };
  
  console.log(teacher1, teacher2);
  