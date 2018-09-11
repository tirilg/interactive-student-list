//"use strict";

let template = document.querySelector("#studentTemp").content;

//fetch
function fetchStudents() {
  fetch("studentlist.json")
    .then(e => e.json())
    .then(showStudents);
}

function showStudents(data) {
  console.log(data);
  data.forEach(showSingleStudent);
}

function showSingleStudent(aStudent) {
  let clone = template.cloneNode(true);
}

fetchStudents();
