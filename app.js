//get the buttons
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let reset = document.querySelector(".reset");
let playerWinCount = 0;
let computerWinCount = 0;
let playerWinText = document.querySelector(".player-wins-count");
let compWinText = document.querySelector(".computer-wins-count");

playerWinText.textContent = 0;
compWinText.textContent = 0;

// create a function that returns a random string "Rock", "Paper", "Scissors"
const computerPlay = () => {
  //Create an array of strings
  const arryOfStrings = ["rock", "paper", "scissors"];

  //Get array length
  let lengthOfArray = arryOfStrings.length;

  //set the limit of the random variable to the length of the array
  let randNum = Math.random() * lengthOfArray;

  //round it down to get an Integer
  let roundedRandNum = Math.floor(randNum);

  //In order the values in the array randomly we use the round num as our key
  let randomStrings = arryOfStrings[roundedRandNum];
  return randomStrings;
};

// //A function that plays a single round of RPS.
//A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.
const playSingleRound = (playerSelection, computerSelection) => {
  //player wins = 0, computer wins= 1
  let winner = null;
  //get players input
  let playerInputInLowerCase = playerSelection.toLowerCase();

  let result = document.querySelector(".result");

  //If players input is correct then return the winner
  if (playerInputInLowerCase == "rock" || "paper" || "scissors") {
    if (computerSelection === "rock" && playerInputInLowerCase === "scissors") {
      result.textContent = "You Lose Rock beats Scissors";
      winner = 1;
      compWinText.textContent = computerWinCount++;
    } else if (
      computerSelection === "rock" &&
      playerInputInLowerCase === "paper"
    ) {
      result.textContent = "You Win Paper beats Rock";
      winner = 0;
      playerWinText.textContent = playerWinCount++;
    } else if (
      computerSelection === "rock" &&
      playerInputInLowerCase === "rock"
    ) {
      result.textContent = "no  winner";
      winner = "no winner";
    } else if (
      computerSelection === "paper" &&
      playerInputInLowerCase === "rock"
    ) {
      result.textContent = "You Lose Paper beats Rock";
      winner = 1;
      compWinText.textContent = computerWinCount++;
    } else if (
      computerSelection === "paper" &&
      playerInputInLowerCase === "scissors"
    ) {
      result.textContent = "You Win Scissors beats Paper";
      winner = 0;
      playerWinText.textContent = playerWinCount++;
    } else if (
      computerSelection === "paper" &&
      playerInputInLowerCase === "paper"
    ) {
      result.textContent = "no winner";
      winner = "no winner";
    } else if (
      computerSelection === "scissors" &&
      playerInputInLowerCase === "paper"
    ) {
      result.textContent = "You Lose Scissors beats Paper";
      winner = 1;
      compWinText.textContent = computerWinCount++;
    } else if (
      computerSelection === "scissors" &&
      playerInputInLowerCase === "rock"
    ) {
      result.textContent = "You Win Rock beats Paper";
      winner = 0;
      playerWinText.textContent = playerWinCount++;
    } else if (
      computerSelection === "scissors" &&
      playerInputInLowerCase === "scissors"
    ) {
      result.textContent = "no winner";
      winner = "no winner";
    }
  } else {
    result.textContent = "Please make a Selection!";
  }

  return winner;
};

rock.addEventListener("click", function () {
  if (playerWinText.textContent == 5) {
    const winner = document.querySelector(".winner");
    winner.textContent = "Congratulations You Beat Computer";
  }

  if (compWinText.textContent == 5) {
    const winner = document.querySelector(".winner");
    winner.textContent = "Computer Wins";
  }
  playSingleRound("rock", computerPlay());
});
paper.addEventListener("click", function () {
  if (playerWinText.textContent == 5) {
    const winner = document.querySelector(".winner");
    winner.textContent = "Congratulations You Beat Computer";
  }

  if (compWinText.textContent == 5) {
    const winner = document.querySelector(".winner");
    winner.textContent = "Computer Wins";
  }
  playSingleRound("paper", computerPlay());
});
scissors.addEventListener("click", function () {
  if (playerWinText.textContent == 5) {
    const winner = document.querySelector(".winner");
    winner.textContent = "Congratulations You Beat Computer";
  }

  if (compWinText.textContent == 5) {
    const winner = document.querySelector(".winner");
    winner.textContent = "Computer Wins";
  }
  playSingleRound("scissors", computerPlay());
});
reset.addEventListener("click", function () {
  playerWinText.textContent = "";
  compWinText.textContent = "";
  result.textContent = "";
  winner.textContent = "";
  window.location.href = window.location.href;
});
