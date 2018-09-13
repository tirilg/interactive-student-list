"use strict";

let students = [];

//fetch
function fetchStudents() {
  fetch("studentlist.json")
    .then(result => result.json())
    .then(createList);
}

function createList(data) {
  const names = Object.values(data);
  //console.log(names);

  const studentTemp = {
    firstName: "", //insert first name
    middleName: "", //insert middle name
    lastName: "", //insert last name
    toString() {
      //converts to string and adds the objects of what it is running through
      return this.firstName + " " + this.middleName + " " + this.lastName;
    },
    splitName(fullName) {
      //splits the name into first and last
      const firstSpace = fullName.indexOf(" ");
      const lastSpace = fullName.lastIndexOf(" ");
      this.firstName = fullName.substring(0, firstSpace);
      this.middleName = fullName.substring(firstSpace + 1, lastSpace);
      this.lastName = fullName.substring(lastSpace + 1);
    }
  };

  data.forEach(person => {
    let temp = Object.create(studentTemp);
    temp.splitName(person);
    students.push(temp);
  });

  displayList(students);
  console.table(students);
  //const byFirstName = students.sort(sortByFirstName); //sort students by first name //add event to a button to sort
}

function sortByFirstName() {
  //function that sorts by first name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
  function byFirstName(a, b) {
    if (a.firstName < b.firstName) {
      //if value of a.firstName is smaller than value of b.firstName (in this case the value of the letter), then move the name up (value of letters is smallest at A and biggest at Z)
      return -1; //means move it up
    } else {
      return 1; //means move it down
    }
  }
  students.sort(byFirstName);
}

function sortByMiddleName() {
  //function that sorts by last name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
  function byMiddleName(a, b) {
    if (a.middleName < b.middleName) {
      return -1;
    } else {
      return 1;
    }
  }
  students.sort(byMiddleName);
}

function sortByLastName() {
  //function that sorts by last name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
  function byLastName(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  }
  students.sort(byLastName);
}

fetchStudents();

/*const studentTemp = {
  firstName: "", //insert first name
  lastName: "", //insert last name
  toString() {
    //converts to string and adds the objects of what it is running through
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    //splits the name into first and last
    const firstSpace = fullName.indexOf(" ");
    const lastSpace = fullName.lastIndexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.middleName = fullName.substring(firstSpace + 1, lastSpace);
    this.lastName = fullName.substring(lastSpace + 1);
  }
};*/
