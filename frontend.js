"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
  console.log("frontend is running");

  //register buttons for sort
  document
    .querySelector("button#sort_first")
    .addEventListener("click", clickedSortFirstname);

  document
    .querySelector("button#sort_middle")
    .addEventListener("click", clickedSortMiddlename);
  document
    .querySelector("button#sort_last")
    .addEventListener("click", clickedSortLastname);
}

function clickedSortFirstname() {
  console.log("clickedSortFirstname");
  sortByFirstName();
  displayList(students);
}

function clickedSortMiddlename() {
  console.log("clickedSortMiddlename");
  sortByMiddleName();
  displayList(students);
}

function clickedSortLastname() {
  console.log("clickedSortLastname");
  sortByLastName();
  displayList(students);
}

function displayList(listOfStudents) {
  document.querySelector("table#student_list tbody").innerHTML = "";
  listOfStudents.forEach(function(student) {
    const clone = document
      .querySelector("#student_template")
      .content.cloneNode(true);

    //fill clone with data
    clone.querySelector("[data-firstname]").textContent = student.firstName;
    clone.querySelector("[data-middlename]").textContent = student.middleName;
    clone.querySelector("[data-lastname]").textContent = student.lastName;

    //modal
    const modal = document.querySelector("#modal_container");
    //const modalBTN = document.querySelectorAll(".modalBTN");
    //const closeBTN = document.querySelector(".closeBTN");

    //clone.querySelector(".closeBTN").addEventListener("click", () => {
    // console.log("hello");
    //});
    modal.addEventListener("click", () => (modal.style.display = "none"));
    clone.querySelector(".modalBTN").addEventListener("click", () => {
      console.log("modal pops up");
      modal.style.display = "block";
    });

    //clone.querySelector("#closeBTN").addEventListener("click", () => {
    // console.log("close button");
    //});

    //append clone to table
    document.querySelector("table#student_list tbody").appendChild(clone);
  });
}
