//"use strict";

//let template = document.querySelector("#temp").content;

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

  data.forEach(person => {
    let temp = Object.create(studentTemp);
    temp.splitName(person);
    students.push(temp);
  });

  console.table(students);

  const byFirstName = students.sort(sortByFirstName); //sort students by first name
  show(byFirstName, "#studentName"); //run function show(), which displays the sorted list by first name
}

function sortByFirstName(a, b) {
  if (a.firstName < b.firstName) {
    //if value of a.firstName is smaller than value of b.firstName (in this case the value of the letter), then move the name up (value of letters is smallest at A and biggest at Z)
    return -1; //means move it up
  } else {
    return 1; //means move it down
  }
}

//function that sorts by last name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}

function show(data, selector) {
  data.forEach(person => {
    const h1 = document.createElement("h1"); //creates listed items for each of the persons
    h1.textContent = person; //adds text content from person into the li (the names and house)
    document.querySelector(selector).appendChild(h1); //append the data into #first and #last in html
  });
}

fetchStudents();

const studentTemp = {
  firstName: "", //insert first name
  lastName: "", //insert last name
  toString() {
    //converts to string and adds the objects of what it is running through
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    //splits the name into first and last
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};
