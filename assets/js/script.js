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
    answers: ["Newman", "Mr. Pit", "Kramer", "J. Peterman"],
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
let totalTime = 60;
let secondsLeft = totalTime;
let currentQuestion = 0;
let timerInterval = 0;
let correctCount = 0;

// Query selectors
let timerDisplay = document.querySelector("#timer");
let startButton = document.querySelector("#start");
let scoreMenu = document.querySelector("#score");
let orderedList = document.querySelector(".ordered-list");
let containerHeader = document.querySelector(".container-header");
let sbForm = document.querySelector(".scoreForm");
let correctTag = document.querySelector("h3");
let listItems = document.querySelectorAll("li");

//*** Javascript and function calls
resetValues();
setWelcome();

//*** Function definitions
function resetValues() {
  secondsLeft = totalTime;
  timerDisplay.textContent = "Timer: " + secondsLeft;
  directions = true;

  startButton.setAttribute("style", "visibility:visible");
  sbForm.setAttribute("style", "visibility:hidden");

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
      correctCount++;
    } else {
      correctTag.textContent = "Incorrect!";

      if (secondsLeft > 10) {
        secondsLeft = secondsLeft - 10;
      } else {
        secondsLeft = 0;
        clearInterval(timerInterval);
      }
    }

    // If there are more questions, set next question
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
      setQuestion();
    } else {
      // Stop time and call score board
      clearInterval(timerInterval);
      setScoreBoard();
    }
  }
  return;
}

function setScoreBoard() {
  clearInterval(timerInterval);
  containerHeader.textContent = "High Scores";

  correctTag.textContent = "Your Score is " + secondsLeft + ". You correctly answered " + correctCount + " questions.";
  startButton.setAttribute("style", "visibility:hidden");

  for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];

    element.classList.remove("hoverList1");
    element.textContent = "";
  }

  sbForm.setAttribute("style", "visibility:visible");
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

  startButton.setAttribute("style", "visibility:hidden");
  countDown();
  setQuestion();

  return;
}

//*** Event listeners
startButton.addEventListener("click", renderQuestions);
orderedList.addEventListener("click", answerQuestion);
scoreMenu.addEventListener("click", setScoreBoard);

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
// Check if correct ***
// If correct display "correct" and show next question ***
// Record time ***
// Count correct answers by incrementing correct variable ***
// If incorrect display "incorrect", deduct 10 seconds, show next question ***
// Display current score to user***
// After 5 questions have been answered (at end of question loop), prompt for initials ***

// Create scoreboard listener 
// Store name and high score in localStorage
// Loop through high scored in localStorage and display in list
// Display high score object for all users' fastest times (use localStorage)
// On high score screen create buttons to go back to start screen and to clear high score ***
// Use form listener to act on button clicks
// On submit - add name and score to list
// On clear - clear score list and localStorage
// On cancel - return to game start page

// Create more questions
// Randomize 5 questions displayed
