//**************** */
// CodeAQuiz
//**************** */

//*** Global declarations

// Create question bank with an array of objects
let questionBank = [
  {
    question: "Who is Jerry's neighbor across the hall?",
    answers: ["Elaine", "George", "Kramer", "Banyon"],
    correctAnswer: 3,
  },
  {
    question: "Who is Jerry's nemisis?",
    answers: ["Newman", "Mr. Pit", "Kramer", "Banyon"],
    correctAnswer: 1,
  },
  {
    question: "What is Elaine's favorite order from The Resaurant?",
    answers: ["Grilled Cheese", "Tuna on Rye", "Cereal", "Big Salad"],
    correctAnswer: 4,
  },
  {
    question: "What winter holiday does Frank Costanza celebrate?",
    answers: ["Christmas", "Festivus", "Dark Solstice", "Hanukkah"],
    correctAnswer: 2,
  },
  {
    question: "What is Kramer's first name?",
    answers: ["Frank", "Kranston", "Cosmo", "Charlie"],
    correctAnswer: 3,
  },
];

// Create welcome array
let welcomeArray = [
  "Answer each question by clicking on an option.",
  "You will start with 60 seconds.",
  "Incorrect answers lose 10 seconds.",
  "Try to answer all the questions before time runs out!",
];

// Variables
let totalQuestions = questionBank.length;
let totalTime = 5;
let secondsLeft = totalTime;
let timerInterval = 0;

// Query selectors
let timerDisplay = document.querySelector("#timer");
let startButton = document.querySelector("#start");
let containerMain = document.querySelector(".containers");
let container1 = document.querySelector(".container1");
let containerHeader = document.querySelector(".container-header");
let listItems = document.querySelectorAll("li");

//*** Javascript and function calls
resetValues();
setWelcome();

//*** Function definitions
function setWelcome() {
  containerHeader.textContent = "Directions:";

  for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];
    element.textContent = welcomeArray[i];
  }
}

function resetValues() {
  secondsLeft = totalTime;
  timerDisplay.textContent = "Timer: " + secondsLeft;
  //containerMain.setAttribute("style", "visiblity:visible");
}

function countDown() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerDisplay.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}

function renderQuestions() {
  clearInterval(timerInterval);
  startButton.setAttribute("style", "visibility:hidden");
  countDown();
  //setQuestions();
  

  // secondsLeft = secondsLeft - 10;

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
startButton.addEventListener("click", renderQuestions);

// Create title ***
// Create "start" "cancel" buttons ***
// Create countdown timer ***
// Create menu to show high score ***

// On click of start button, start countdown ***
// Display countdown ***

// Create question bank object ***
// Create question array ***
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
