"use strict";

//empty array to add all students by push()
let students = [];

//fetch students
function fetchStudents() {
  fetch("studentlist.json")
    .then(result => result.json())
    .then(createList);
}

//create a list of the students
function createList(data) {
  //get the student names
  const names = Object.values(data);

  //template to apply for each student
  const studentTemp = {
    firstName: "", //insert first name
    middleName: "", //insert middle name
    lastName: "", //insert last name
    toString() {
      //converts the object to a string, and returns a first name, middle name and last name
      return this.firstName + " " + this.middleName + " " + this.lastName;
    },
    splitName(fullName) {
      //splits full name into first, middle and last name
      //when using substring(start, end), the end is up to but not including
      const firstSpace = fullName.indexOf(" "); //find the index of the first space in the full name
      const lastSpace = fullName.lastIndexOf(" "); //find the index of the last space in the full name
      this.firstName = fullName.substring(0, firstSpace); //create a substring firstName by "splitting" the fullName from the first character at index (0)until the first space
      this.middleName = fullName.substring(firstSpace + 1, lastSpace); //create a substring middleName by "splitting" the fullName from the firstSpace + every character until the last space
      this.lastName = fullName.substring(lastSpace + 1); //create a substring lastName by "splitting" the fullName from the lastspace until the last character
    }
  };

  data.forEach(person => {
    let temp = Object.create(studentTemp); //for each person(student), create a object from the template
    temp.splitName(person); //apply the function inside the template to split name into first, middle and last
    students.push(temp); //apply the function inside the template to push the object into the empty array students
    temp.id = generateUUID(); //="" + students.length; //assign this student a unique id
  });

  displayList(students); //display the list of all the students in the order they are fetched
  console.table(students); //see table of students in the console log
}

//https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/8809472#8809472
//function to generate unique id. makes a new one every time the page refrehes to never experience the same id being uses twice
function generateUUID() {
  let d = new Date().getTime(); //there is no way i can explain what is happening here so just look at the link above
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); //use high-precision timer if available
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

//function to delete the student with the right id
function deleteStudent(studentId) {
  const index = students.findIndex(findStudent); //find the index of the student with studentId
  //console.log("found index: " + index); //console log the index of the specific student
  students.splice(index, 1); //remove the "1" student from the index pressed

  //function to find student
  function findStudent(student) {
    if (student.id === studentId) {
      return true;
    } else {
      return false;
    }
  }
}

function sortByFirstName() {
  //function that sorts by first name by seeing if a (the first object) is smaller than b(the second object)
  function byFirstName(a, b) {
    if (a.firstName < b.firstName) {
      //if value of a.firstName is smaller than value of b.firstName (in this case the value of the letter), then move the name to the top of the list (value of letters is smallest at A and biggest at Z)
      return -1; //means move it up
    } else {
      return 1; //means move it down
    }
  }
  students.sort(byFirstName); //sort students by first name
}

function sortByMiddleName() {
  //function that sorts by middle name by seeing if a (the first object) is smaller than b(the second object)
  function byMiddleName(a, b) {
    if (a.middleName < b.middleName) {
      return -1; //move it up
    } else {
      return 1; //move it down
    }
  }
  students.sort(byMiddleName); //sort students by middle name
}

function sortByLastName() {
  //function that sorts by last name by seeing if a (the first object) is smaller than b(the second object) (watch robot video for visual example)
  function byLastName(a, b) {
    if (a.lastName < b.lastName) {
      return -1; //move it up
    } else {
      return 1; //move it down
    }
  }
  students.sort(byLastName); //sort students by last name
}

fetchStudents(); //run the function fetchStudents
