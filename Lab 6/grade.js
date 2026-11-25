/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



// Check student name and mark
function checkMark() {

    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // Validate student name
    if (name.trim() === "") { // Error 4: Added trim() to prevent empty spaces from being accepted.
        alert("Name must be filled out.");
        return false;
    }

    // Part 2: Check for an empty mark
    if (mark.trim() === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Validate numeric mark
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = Number(mark); // Error 5: Replaced parseInt() with Number() to prevent partially numeric values such as 72abc from being accepted.

    // Validate mark range
    if (mark < 0 || mark > 100) { // Error 6: Replaced && with || because a mark cannot be below 0 OR above 100.
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Determine student grade
    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 65) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Display student result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change result colour according to grade
    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green"; // Error 7: Corrected style.colour to style.color.
    } else if (grade === "C") {
        document.getElementById("result").style.color = "orange";
    } else {
        document.getElementById("result").style.color = "red";
    }

    // Part 2: Display date and time when grade was checked
    let currentDate = new Date();

    document.getElementById("checkTime").innerHTML =
        "Checked on: " + currentDate.toLocaleString();

    return false; // Error 8: Changed return true to return false to prevent the form from refreshing and removing the result.
}


// Display grade table
function showTable() {

    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    let tableHTML = "<table>";

    // Part 2: Added table headings
    tableHTML += "<tr><th>Grade</th><th>Mark Range</th></tr>";

    // Generate table rows using a loop
    for (let i = 0; i < grades.length; i++) {

        tableHTML += "<tr><td>" + grades[i] +
            "</td><td>" + ranges[i] + "</td></tr>";

    }

    tableHTML += "</table>";

    document.getElementById("tableContainer").innerHTML = tableHTML; // Error 9: Corrected innerHtml to innerHTML because JavaScript is case-sensitive.
}


// Part 2: Generate a random whole number between 0 and 100
function randomMark() {

    let randomNumber = Math.floor(Math.random() * 101);

    document.getElementById("mark").value = randomNumber;

}


