"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = [];
let helper = document.querySelector(".helper");
let visibleScore = document.querySelector(".score span");
let visibleHighscore = document.querySelector(".highscore span");
let randomNumberPlace = document.querySelector(".random-number");

// adding event on check button to check if user input is equal to random number
document.querySelector(".check > button").addEventListener("click", () => {
  const userInput = Number(document.querySelector(".user-input").value);
  // checking if user input has a value or not if not No Number ⭕ will be shown
  if (!userInput) {
    helper.textContent = "No Number ⭕";
    //checking if user input is greater than random number and less than 21 if it is, Too High 📈 will be shown
  } else if (userInput > randomNumber && userInput < 21) {
    helper.textContent = "Too High 📈";
    //decreasing score by 1 on wrong guess
    score--;
    //showing decreased score on each check
    visibleScore.textContent = score;
  } else if (userInput < randomNumber && userInput > 0) {
    helper.textContent = "Too Low 📉";
    //decreasing score by 1 on wrong guess
    score--;
    //showing decreased score on each check
    visibleScore.textContent = score;
    //checkin if user input is less than 0 or equal to 0 if either one is true "Enter the Number in the given range 🙂" will be shown
  } else if (userInput < 0 || userInput === 0) {
    helper.textContent = "Enter the Number in the given range 🙂";
    //checking if user input is actually in given range or greater 
  } else if (userInput > 20) {
    helper.textContent = "Enter the Number in the given range 🙂";
    //checking if user input is actually equal to the random number if it is Correct Number 🎇 will be shown
  } else if (userInput === randomNumber) {
    helper.textContent = "Correct Number 🎇";
    //adding current score in the highScore array
    highScore.push(score);
    //function for finding max number (score) in highScore array
    function maxFinder() {
      let max = highScore[0];
      for (let i = 1; i < highScore.length; ++i) {
        if (highScore[i] > max) {
          max = highScore[i];
        }
      }
      //returning max score
      return max;
    }
    //updating visuals on winning
    visibleHighscore.textContent = maxFinder();
    randomNumberPlace.textContent = randomNumber;
    randomNumberPlace.style.backgroundColor = "green";
    randomNumberPlace.style.color = "white";
  }
});

//restoring initial visuals on clicking play again button
document.querySelector(".play-again button").addEventListener("click", () => {
  score = 10;
  visibleScore.textContent = score;
  helper.textContent = "Start Guessing ✌";
  randomNumberPlace.textContent = "?";
  randomNumberPlace.style.color = "black";
  document.querySelector("input").value = "";
  randomNumberPlace.style.backgroundColor = "white";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
