//**************** */
// CodeAQuiz
//**************** */

//*** Global declarations

// Create question objects
let questionBank = [
  {
    question: "Who is Jerry's Neighbor?",
    answers: ["Elaine", "George", "Kramer", "Banyon"],
    correctAnswer: "Kramer",
  },
];

// Variables
let timerDisplay = document.querySelector("#timer");
let startButton = document.querySelector("#start");
let container = document.querySelector(".container");
let totalTime = 10;
let secondsLeft = totalTime;
let startClicked = false;

//*** Javascript and function calls

resetVariables();
setTime(secondsLeft);
console.log(questionBank);

//*** Function definitions
function resetVariables() {
  secondsLeft = totalTime;
  startClicked = false;
}

function setTime() {
  timerDisplay.textContent = "Timer: " + secondsLeft;
  return;
}

// Set timer interval with set Interval
function countDown() {
  var timerInterval = setInterval(function () {
    if (secondsLeft > 0) {
      timerDisplay.textContent = "Timer: " + secondsLeft;
      secondsLeft--;
    } else {
      timerDisplay.textContent = "Timer: " + secondsLeft;
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      resetVariables();
    }
  }, 1000);

  return;
}

//*** Event listeners
// Listen for a click event on start button
startButton.addEventListener("click", function () {
  // Start countdown timer if not already started
  if (!startClicked) {
    countDown();
    startClicked = true;
  }
});

// Create title ***
// Create "start" "cancel" buttons ***
// Create countdown timer ***
// Create menu to show high score ***

// On click of start button, start countdown ***
// Display countdown ***

// Create question bank object
// Create question array
// Read question array for 5 questions
// For each question display question and create a li to display answer choices
// Check if correct
// If correct display "correct" and show next question
// Record time
// Count correct answers by incrementing correct variable
// If incorrect display "incorrect", deduct 10 seconds, show next question
// After 5 questions have been answered (at end of question loop), prompt for initials
// Display high score object for all users' fastest times (use localStorage)
// On high score screen create buttons to go back to start screen and to clear high score
