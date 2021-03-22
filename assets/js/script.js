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
  {
    question: "Who is Jerry's nemisis?",
    answers: ["Newman", "Mr. Pit", "Kramer", "Banyon"],
    correctAnswer: "Kramer",
  },
];

// Variables
let totalTime = 10;
let secondsLeft = totalTime;

let timerDisplay = document.querySelector("#timer");
let startButton = document.querySelector("#start");
let container = document.querySelector(".container");

//*** Javascript and function calls

console.log(questionBank);

//*** Function definitions

// Set timer interval with set Interval
function countDown() {
  let timerInterval = setInterval(function () {
    if (secondsLeft > 0) {
      timerDisplay.textContent = "Timer: " + secondsLeft;
      secondsLeft--;
    } else {
      timerDisplay.textContent = "Timer: " + secondsLeft;
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      secondsLeft = totalTime; // reset so it can run again
    }
  }, 1000);
}

// The following function renders questions as <li> elements
function renderList() {
    countDown();
    
    // Clear todoList element and update todoCountSpan
    // todoList.innerHTML = "";
    // todoCountSpan.textContent = todos.length;
  
    // Render a new li for each answer
    // for (var i = 0; i < todos.length; i++) {
    //   var todo = todos[i];
  
    //   var li = document.createElement("li");
    //   li.textContent = todo;
    //   li.setAttribute("data-index", i);
  
    //   var button = document.createElement("button");
    //   button.textContent = "Complete ✔️";
  
    //   li.appendChild(button);
    //   todoList.appendChild(li);
    //}
  }

//*** Event listeners
// Listen for a click event on start button
startButton.addEventListener("click", renderList);

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
