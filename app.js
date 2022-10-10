//create a function that returns a random string "Rock", "Paper", "Scissors"
const computerPlay = () => {
  //Create an array of strings
  let arryOfStrings = ["rock", "paper", "scissors"];

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

//A function that plays a single round of RPS.
//A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.
const playSingleRound = (playerSelection, computerSelection) => {
  //player wins = 0, computer wins= 1
  let winner = null;
  //get players input
  let playerInputInLowerCase = playerSelection.toLowerCase();

  //Validate players input
  //check if the user inputs the right input
  //   if (playerInputInLowerCase != "rock" && "paper" | "scissors") {
  //     alert("Please choose only either 'Rock', 'Paper, 'Scissors'");
  //   }

  //If players input is correct then return the winner
  if (playerInputInLowerCase == "rock" || "paper" || "scissors") {
    if (computerSelection === "rock" && playerInputInLowerCase === "scissors") {
      alert("You Lose Rock beats Scissors");
      winner = 1;
    } else if (
      computerSelection === "rock" &&
      playerInputInLowerCase === "paper"
    ) {
      alert("You Win Paper beats Rock");
      winner = 0;
    } else if (
      computerSelection === "rock" &&
      playerInputInLowerCase === "rock"
    ) {
      alert("no  winner");
      winner = "no winner";
    } else if (
      computerSelection === "paper" &&
      playerInputInLowerCase === "rock"
    ) {
      alert("You Lose Paper beats Rock");
      winner = 1;
    } else if (
      computerSelection === "paper" &&
      playerInputInLowerCase === "scissors"
    ) {
      alert("You Win Scissors beats Paper");
      winner = 0;
    } else if (
      computerSelection === "paper" &&
      playerInputInLowerCase === "paper"
    ) {
      alert("no winner");
      winner = "no winner";
    } else if (
      computerSelection === "scissors" &&
      playerInputInLowerCase === "paper"
    ) {
      alert("You Lose Scissors beats Paper");
      winner = 1;
    } else if (
      computerSelection === "scissors" &&
      playerInputInLowerCase === "rock"
    ) {
      alert("You Win Rock beats Paper");
      winner = 0;
    } else if (
      computerSelection === "scissors" &&
      playerInputInLowerCase === "scissors"
    ) {
      alert("no winner");
      winner = "no winner";
    }
  } else {
    alert("Please insert a Value!");
  }

  return winner;
};
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// playSingleRound(playerSelection, computerSelection)
const game = () => {
  let computerSelection = computerPlay();
  let round = 5;
  for (let i = 0; i < round; i++) {
    let playerSelection = prompt(
      "Please Choose a Value between: 'Rock', 'Paper', and 'Scissors' "
    );

    playSingleRound(playerSelection, computerSelection);
  }
};

window.addEventListener("load", () => {
  alert("Welcome!");
  alert("Lets play a game called Rock, Paper and Scissors!");
  game();
});
