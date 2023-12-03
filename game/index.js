// For this challenge you will create a Rock, Paper, and Scissors game in Vanilla JS.

// In the Rock, Paper and Scissors game the goal is to create a simple game where a user has the option to choose between Rock, Paper and Scissors, by clicking the correspondent buttons, and if the user wins the result is shown.

// The Winning Rules are as follows:

// Rock smashes Scissors.
// Paper covers Rock.
// Scissors cut Paper.
// Key concepts for this challenge exercise:

// Variables and constants.
// Control flow (if statements).
// Loops (for each loop).
// Event listeners.
// Functions.
// The DOM:
// document.getElementById.
// document.querySelectorAll.

const rockEl = document.querySelector(".Rock");
const scissorsEl = document.querySelector(".Scissors");
const paperEl = document.querySelector(".Paper");

const pUserEl = document.querySelector(".user_choise");
const pPcEl = document.querySelector(".pc_choise");
const pResultEl = document.querySelector(".result");
console.log(pUserEl, pPcEl, pResultEl);

const variants = ["rock", "scissors", "paper"];

rockEl.onclick = function () {
  checkWinner("rock");
};

scissorsEl.onclick = function () {
  checkWinner("scissors");
};
paperEl.onclick = function () {
  checkWinner("paper");
};

function pcChoise() {
  return variants[randomInteger(0, variants.length - 1)];
}

function checkWinner(user) {
  const pc = pcChoise();

  pUserEl.innerHTML = user;
  pPcEl.innerHTML = pc;
  

  // Paper covers Rock.
  // Scissors cut Paper.
  // Key concepts for this challenge exercise:

if (user==pc){
    console.log("draw")
  }
   else if (user == "paper" && pc == "rock") {
    console.log("win");
  } else if (user == "scissors" && pc == "paper") {
    console.log("win");
  } else if (user == "rock" && pc == "scissors"){
    console.log("win")
  } else "lose"  
  console.log("lose")
     
 }

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
