// CodeAQuiz - Seinfeld Trivia Quiz

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

// Create high score object
let highScoreObject = {
  hsName: "",
  hsScore: 0,
}

// let highScoreObjectArray = [highScoreObject];

// Variables
let directions = true;
let scoreboardFromMenu = false;
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
let returnButton = document.querySelector("#returnBtn");
let clearButton = document.querySelector("#clearBtn");
let submitButton = document.querySelector("#submitBtn");
let inputName = document.querySelector("#inputName");
let labelID = document.querySelector("#labelID");
let orderedList = document.querySelector(".ordered-list");
let containerHeader = document.querySelector(".container-header");
let sbForm = document.querySelector(".scoreForm");
let correctTag = document.querySelector("h3");
let listItems = document.querySelectorAll("li");

// Function calls
setWelcome();

// Function definitions
function resetValues() {
  secondsLeft = totalTime;
  timerDisplay.textContent = "Timer: " + secondsLeft;
  directions = true;
  scoreboardFromMenu = false;
  currentQuestion = 0;
  correctCount = 0;

  startButton.setAttribute("style", "visibility:visible");
  sbForm.setAttribute("style", "visibility:hidden");
  hideFormInputs();
  correctTag.textContent = "";  

  return;
}
function setWelcome() {
  resetValues();

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

  // Get clicked answer
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
        setScoreBoard();
        return;
      }
    }

    // If there are more questions set next question
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
      setQuestion();
    } else {
      // Set score board
      setScoreBoard();
    }
  }
  return;
}

function setSBFromMenu() {
  scoreboardFromMenu = true;
  setScoreBoard();
}

function hideFormInputs() {
  submitButton.setAttribute("style", "visibility: hidden");
  inputName.setAttribute("style", "visibility: hidden");
  labelID.setAttribute("style", "visibility: hidden");

  return;
}

function showFormInputs() {
  submitButton.setAttribute("style", "visibility: visible");
    inputName.setAttribute("style", "visibility: visible");
    labelID.setAttribute("style", "visibility: visible");

  return;
}

function setScoreBoard() {
  displayTimer();
  clearInterval(timerInterval);

  containerHeader.textContent = "Score Board";
  // Clear questions and hover style from list items
  for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];

    element.classList.remove("hoverList1");
    element.textContent = "";
  }

  // Scores from localStorage
  let scoreObject = JSON.parse(localStorage.getItem("highScore"));
  if (scoreObject !== null) {
    listItems[0].textContent = scoreObject.hsName + " ---------- Score: " + scoreObject.hsScore;
  }

  // If there is a new score
  if (!scoreboardFromMenu && secondsLeft < 60) {
    correctTag.textContent = "Your Score is " + secondsLeft + ".  You correctly answered " + correctCount + " question(s).";

    showFormInputs();
  } else {
    correctTag.textContent = "";
    hideFormInputs();
  }

  startButton.setAttribute("style", "visibility:hidden");
  sbForm.setAttribute("style", "visibility:visible");
  inputName.value = "";
  return;
}

function displayTimer() {
  timerDisplay.textContent = "Timer: " + secondsLeft;
}

function countDown() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    displayTimer();

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      setScoreBoard();
    }
  }, 1000);

  return;
}

function setQuestions() {
  directions = false;

  startButton.setAttribute("style", "visibility:hidden");
  countDown();
  setQuestion();

  return;
}

function addScore() {
  
  highScoreObject.hsName = inputName.value;
  highScoreObject.hsScore = secondsLeft;

  listItems[0].textContent = highScoreObject.hsName + " ---------- Score: " + highScoreObject.hsScore;

  localStorage.setItem("highScore", JSON.stringify(highScoreObject));

  return;
}

function clearScores() {
  for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];
    element.textContent = "";
  }
  inputName.value = "";
  localStorage.clear();
  return;
}

// Event listeners
startButton.addEventListener("click", setQuestions);
orderedList.addEventListener("click", answerQuestion);
scoreMenu.addEventListener("click", setSBFromMenu);
submitButton.addEventListener("click", addScore);
clearButton.addEventListener("click", clearScores);
returnButton.addEventListener("click", setWelcome);


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
// Handle out of time ***

// Create scoreboard button listeners ***
// Store name and high score in localStorage
// Loop through high scored in localStorage and display in list
// Display high score object for all users' fastest times (use localStorage)
// On high score screen create buttons to go back to start screen and to clear high score ***

// On submit - add name and score to list
// On clear - clear score list and localStorage
// On cancel - return to game start page ***

// Create more questions
// Randomize 5 questions displayed
