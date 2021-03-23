//**************** */
// CodeAQuiz
//**************** */

//*** Global declarations

// Create question bank with an array of objects
let questionBank = [
  {
    question: "Who is Jerry's neighbor across the hall?",
    answers: ["Elaine", "George", "Kramer", "Banyon"],
    correctAnswer: "Kramer",
  },
  {
    question: "Who is Jerry's nemesis?",
    answers: ["Newman", "Mr. Pit", "Kramer", "Banyon"],
    correctAnswer: "Newman",
  },
  {
    question: "What is Elaine's favorite order from Monk's Cafe?",
    answers: ["Grilled Cheese", "Tuna on Rye", "Cereal", "Big Salad"],
    correctAnswer: "Big Salad",
  },
  {
    question: "What winter holiday does Frank Costanza celebrate?",
    answers: ["Christmas", "Festivus", "Dark Solstice", "Hanukkah"],
    correctAnswer: "Festivus",
  },
  {
    question: "What is Kramer's first name?",
    answers: ["Frank", "Kranston", "Cosmo", "Charlie"],
    correctAnswer: "Cosmo",
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
let directions = true;
let totalQuestions = questionBank.length;
let totalTime = 5;
let secondsLeft = totalTime;
let currentQuestion = 0;
let timerInterval = 0;

// Query selectors
let timerDisplay = document.querySelector("#timer");
let startButton = document.querySelector("#start");
let orderedList = document.querySelector(".ordered-list");
let containerHeader = document.querySelector(".container-header");
let correctTag = document.querySelector("h3");
let listItems = document.querySelectorAll("li");

//*** Javascript and function calls
resetValues();
setWelcome();

//*** Function definitions
function resetValues() {
  secondsLeft = totalTime;
  timerDisplay.textContent = "Timer: " + secondsLeft;

  return;
}
function setWelcome() {
  directions = true;
  containerHeader.textContent = "Directions:";

  for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];
    element.textContent = welcomeArray[i];
  }
  return;
}

function setQuestion() {
  containerHeader.textContent = questionBank[currentQuestion].question;

  for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];

    element.classList.add("hoverList1");
    element.textContent = questionBank[currentQuestion].answers[i];
  }
  return;
}

function answerQuestion(event) {
  event.stopPropagation();

  if (!directions && currentQuestion < totalQuestions) {
    let answer = event.target.textContent;

    // Check if correct
    if (answer === questionBank[currentQuestion].correctAnswer) {
      correctTag.textContent = "Correct!";
    } else {
      correctTag.textContent = "Incorrect!";
    }

    // If there are more questions, set next question 
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
      setQuestion();      
    }
  }
  return;
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

  return;
}

function renderQuestions() {
  directions = false;
  clearInterval(timerInterval);
  startButton.setAttribute("style", "visibility:hidden");
  countDown();
  setQuestion();

  return;
}

//*** Event listeners
startButton.addEventListener("click", renderQuestions);
orderedList.addEventListener("click", answerQuestion);

// Create title ***
// Create "start" "cancel" buttons ***
// Create countdown timer ***
// Create menu to show high score ***

// On click of start button, start countdown ***
// Display countdown ***

// Create question bank object ***
// Create question array ***
// Read question array for 5 questions ***
// For each question display question and create a li to display answer choices ***
// Check if correct
// If correct display "correct" and show next question
// Record time
// Count correct answers by incrementing correct variable
// If incorrect display "incorrect", deduct 10 seconds, show next question
// After 5 questions have been answered (at end of question loop), prompt for initials
// Display high score object for all users' fastest times (use localStorage)
// On high score screen create buttons to go back to start screen and to clear high score
