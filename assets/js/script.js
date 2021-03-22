//**************** */
// CodeAQuiz
//**************** */

//*** Global declarations
let timerDisplay = document.querySelector("#timer");
let startButton = document.querySelector("#start");
let container = document.querySelector(".container");
let secondsLeft = 10;
let startClicked = false;


//*** Javascript and function calls

setTime(secondsLeft);

//*** Function definitions

function setTime() {
  timerDisplay.textContent = "Timer: " + secondsLeft;
  return;
}

// Set timer interval with set Interval
function countDown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerDisplay.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
  return;
}


//*** Event listeners
// Listen for a click event on toggle switch
startButton.addEventListener("click", function() {
    // Start countdown timer
    if (!startClicked) {
        countDown();
        startClicked = true;        
    }
  });

// Create title ***
// Create "start" "cancel" buttons ***
// Create menu to show high score ***
// Create countdown timer ***
// Display countdown ***
// Create question bank object
// Create question array
// Read question array for 5 questions
// For each question display question and create a li to display answer choices
// Check if correct
// If correct display "correct" and show next question
// If incorrect display "incorrect", deduct 10 seconds, show next question
// After 5 questions have been answered (at end of question loop), prompt for initials
// Display high score object for all users' fastest times (use localStorage)
// On high score screen create buttons to go back to start screen and to clear high score
