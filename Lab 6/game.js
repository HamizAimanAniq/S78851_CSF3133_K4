/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */




// Store game scores and results
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];
let gameStarted = false;

// Start game function
function startGame() {

    let name = document.getElementById("playerName").value;

    // Check whether the player entered a name
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;

    // Display welcome message
    document.getElementById("result").innerHTML =
        "Welcome, " + name + "!";

    // Display start date and time
    let start = new Date();

    document.getElementById("startTime").innerHTML =
        "Game started: " + start.toLocaleString();
}


// Generate random computer choice
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}


// Play one round of the game
function playRound(playerChoice) {

    // Check whether the game has started
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    // Get computer choice
    let computerChoice = getComputerChoice();

    // Change both images
    document.getElementById("playerImg").src =
        playerChoice + ".png";

    document.getElementById("computerImg").src =
        computerChoice + ".png";

    // Determine the winner
    let outcome;

    if (playerChoice === computerChoice) {

        outcome = "Draw";
        draws++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        outcome = "Win";
        wins++;

    } else {

        outcome = "Lose";
        losses++;

    }

    // Store the result in the array
    results.push(outcome);

    // Display result message
    let resultMessage = document.getElementById("result");

    if (outcome === "Win") {

        resultMessage.innerHTML = "You Win!";
        resultMessage.style.color = "green";

    } else if (outcome === "Lose") {

        resultMessage.innerHTML = "You Lose!";
        resultMessage.style.color = "red";

    } else {

        resultMessage.innerHTML = "It's a Draw!";
        resultMessage.style.color = "grey";

    }

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Add new row to history table
    let historyBody = document.getElementById("historyBody");

    historyBody.innerHTML +=
        "<tr>" +
        "<td>" + results.length + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + outcome + "</td>" +
        "</tr>";

}


// Display game summary
function showSummary() {

    // Check whether any rounds have been played
    if (results.length === 0) {
        alert("Please play at least one round first.");
        return;
    }

    // Count the number of wins using a loop
    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }

    }

    // Calculate win percentage
    let percentage = Math.round(
        (totalWins / results.length) * 100
    );

    // Display summary
    document.getElementById("result").innerHTML =
        "You played " + results.length +
        " rounds and won " + percentage + "%.";

}


// Reset game function
function resetGame() {

    // Reset all scores
    wins = 0;
    losses = 0;
    draws = 0;

    // Empty results array
    results = [];

    // Stop the game
    gameStarted = false;

    // Reset scoreboard
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    // Clear history table
    document.getElementById("historyBody").innerHTML = "";

    // Clear result message
    document.getElementById("result").innerHTML = "";

    // Reset images
    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";

    // Clear start time
    document.getElementById("startTime").innerHTML = "";

    // Clear player name
    document.getElementById("playerName").value = "";

}

