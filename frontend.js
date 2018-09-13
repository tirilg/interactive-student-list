"use strict";

//after HTML loads, run function initFrontend
window.addEventListener("DOMContentLoaded", initFrontend);

//register buttons for sorting. When clicked, run the "clickedSort__"-functions
function initFrontend() {
  document
    .querySelector("button#sort_first") //get first name button
    .addEventListener("click", clickedSortFirstname); //run function when button is clicked

  document
    .querySelector("button#sort_middle") //get middle name button
    .addEventListener("click", clickedSortMiddlename); //run function when button is clicked

  document
    .querySelector("button#sort_last") //get last name button
    .addEventListener("click", clickedSortLastname); //run function when  button is clicked
}

//function for sorting when clicking first name button
function clickedSortFirstname() {
  sortByFirstName(); //run function that sorts the students by first name
  displayList(students); //display list of students sorted by first name
}

//function for sorting when clicking middle name button
function clickedSortMiddlename() {
  sortByMiddleName(); //run function that sorts the students by middle name
  displayList(students); //display list of students sorted by middle name
}

//function for sorting when clicking last name button
function clickedSortLastname() {
  sortByLastName(); //run function that sorts the students by last name
  displayList(students); //display list of students sorted by last name
}

//function for displaying students and clone template
function displayList(listOfStudents) {
  document.querySelector("table#student_list tbody").innerHTML = ""; //remove all HTML elements for the user to see
  listOfStudents.forEach(function(student) {
    //in the list of students, for each student, clone the content inside template
    const clone = document
      .querySelector("#student_template") //id of template
      .content.cloneNode(true);

    //fill clone with data
    clone.querySelector("[data-firstname]").textContent = student.firstName; //display first name
    clone.querySelector("[data-middlename]").textContent = student.middleName; //display middle name
    clone.querySelector("[data-lastname]").textContent = student.lastName;
    //display last name

    //modal
    const modal = document.querySelector("#modal_container"); //get modal
    clone.querySelector(".infoBTN").addEventListener("click", () => {
      modal.style.display = "block"; //get info button and when clicked, show modal
    });
    modal.addEventListener("click", () => (modal.style.display = "none")); //when clicking the modal(and area around it), close it

    //append clone to table
    document.querySelector("table#student_list tbody").appendChild(clone);
  });
}
