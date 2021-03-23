const hsLink = document.getElementById("highscores");
const timeEl = document.getElementById("timer");
const questions = document.getElementById("questions");
const ansSec = document.getElementById("answer_sec");
const quesResponse = document.getElementById("response");
const startBtn = document.getElementById("startBtn");
const ansDiv = document.getElementById("answers");
const title = document.getElementById("quizTitle");
const nameEndInput = document.getElementById("nameEnd");
const highScoresList = document.getElementById("highScoresUl");

let secondsLeft = 40;
let quesArray = [
  {
    question: "Which of the following is NOT a datatype",
    answerA: "boolean",
    answerB: "string",
    answerC: "number",
    answerD: "variable",
    correct: "answer_d",
  },
  {
    question: "What is used primarily to add styling to a web page?",
    answerA: "HTML",
    answerB: "CSS",
    answerC: "Python",
    answerD: "React.js",
    correct: "answer_b",
  },
  {
    question: "What does WWW stand for?",
    answerA: "Web World Workings",
    answerB: "Weak Winter Wind",
    answerC: "World Wide Web",
    answerD: "Wendy Wants Waffles",
    correct: "answer_c",
  },
  {
    question: "What HTML attribute references an external JavaScript file?",
    answerA: "href",
    answerB: "src",
    answerC: "class",
    answerD: "index",
    correct: "answer_b",
  },
  {
    question: "What does DOM stand for?",
    answerA: "Document Object Model",
    answerB: "Display Object Management",
    answerC: "Digital Ordinance Model",
    answerD: "Desktop Oriented Mode",
    correct: "answer_a",
  },
];
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let ansA = document.createElement("button");
let ansB = document.createElement("button");
let ansC = document.createElement("button");
let ansD = document.createElement("button");
let userSubmit = document.createElement("button");
let userName = document.createElement("input");
let quizAgain = document.createElement("button");
let clearScores = document.createElement("button");

ansA.setAttribute("Class", "btn btn-dark text-light");
ansB.setAttribute("Class", "btn btn-dark text-light");
ansC.setAttribute("Class", "btn btn-dark text-light");
ansD.setAttribute("Class", "btn btn-dark text-light");
ansA.setAttribute("id", "answer_a");
ansB.setAttribute("id", "answer_b");
ansC.setAttribute("id", "answer_c");
ansD.setAttribute("id", "answer_d");
userSubmit.setAttribute("Class", "btn btn-dark text-light");
userSubmit.setAttribute("id", "userSub");
userName.setAttribute("id", "currentUser");
quizAgain.setAttribute("Class", "btn btn-dark text-light");
quizAgain.setAttribute("id", "quizAgainBut");
clearScores.setAttribute("Class", "btn btn-dark text-light");

function startQuiz(event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    setTime();
    questionCounter = 0;
    score = 0;
    availableQuestions = [...quesArray];
    getNewQuestion();
    startBtn.style.display = "none";
    ansDiv.appendChild(ansA);
    ansDiv.appendChild(ansB);
    ansDiv.appendChild(ansC);
    ansDiv.appendChild(ansD);
    return;
  }
}

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || secondsLeft < 0) {
      localStorage.setItem("mostRecentScore", score);
      timeEl.textContent = "Time: ";
      clearInterval(timerInterval);
      nameInput();
    }
  }, 1000);
}

function getNewQuestion() {
  console.log(questionCounter);
  if (
    questionCounter >= MAX_QUESTIONS ||
    secondsLeft === 0 ||
    secondsLeft < 0
  ) {
    localStorage.setItem("mostRecentScore", score);
    secondsLeft = 0;
    setTimeout(() => {
      nameInput();
    }, 1000);
  } else {
    const questionIndex = questionCounter;
    currentQuestion = availableQuestions[questionIndex];
    questions.textContent = currentQuestion.question;
    ansA.textContent = currentQuestion.answerA;
    ansB.textContent = currentQuestion.answerB;
    ansC.textContent = currentQuestion.answerC;
    ansD.textContent = currentQuestion.answerD;

    let choices = [
      currentQuestion.answerA,
      currentQuestion.answerB,
      currentQuestion.answerC,
      currentQuestion.answerD,
    ];
    acceptingAnswers = true;
    questionCounter++;
  }
}

function checkAnswer(event) {
  event.preventDefault();
  if (!acceptingAnswers) return;

  acceptingAnswers = false;
  const selectedChoice = event.target.id;
  const correctAnswer = currentQuestion.correct;
  if (selectedChoice === correctAnswer) {
    quesResponse.textContent = "Correct!";
    incrementScore(SCORE_POINTS);
  } else {
    quesResponse.textContent = "Incorrect!";
    secondsLeft = secondsLeft - 10;
  }
  setTimeout(() => {
    getNewQuestion();
  }, 1000);
}

function incrementScore(num) {
  score += num;
}

function nameInput() {
  title.textContent = "Quiz Finished";
  questions.style.display = "none";
  nameEndInput.textContent =
    "Your final score is " + score + ". Enter your username below.";
  ansA.style.display = "none";
  ansB.style.display = "none";
  ansC.style.display = "none";
  ansD.style.display = "none";
  ansSec.appendChild(userName);
  ansSec.appendChild(userSubmit);
  userSubmit.textContent = "Submit";
  quesResponse.textContent = "Congrats on finishing!";
}

function logScore(event) {
  event.preventDefault();
  localStorage.setItem(
    "mostRecentUser",
    document.getElementById("currentUser").value
  );
  let currentUser = localStorage.getItem("mostRecentUser");
  let currentScore = localStorage.getItem("mostRecentScore");
  let scoreObj = {
    name: currentUser,
    score: currentScore,
  };
  highScores.push(scoreObj);
  highScores.sort((a, b) => {
    return b.score - a.score;
  });
  localStorage.setItem("highScores", JSON.stringify(highScores));

  ansSec.appendChild(quizAgain);
  quizAgain.textContent = "Take Quiz Again";
  nameEndInput.textContent =
    "Click Take Quiz Again button to restart or Highscores button to see the scores.";

  questions.style.display = "none";
  ansA.style.display = "none";
  ansB.style.display = "none";
  ansC.style.display = "none";
  ansD.style.display = "none";
  userName.style.display = "none";
  userSubmit.style.display = "none";

  return;
}

function showScores(event) {
  event.preventDefault();
  title.textContent = "Highscores";
  nameEndInput.style.display = "none";
  questions.style.display = "none";
  ansA.style.display = "none";
  ansB.style.display = "none";
  ansC.style.display = "none";
  ansD.style.display = "none";
  userName.style.display = "none";
  userSubmit.style.display = "none";
  startBtn.style.display = "none";
  ansSec.appendChild(quizAgain);
  quizAgain.textContent = "Take Quiz Again";
  ansSec.appendChild(clearScores);
  clearScores.textContent = "Clear Scores";
  quesResponse.textContent = "Get the top score!";
  secondsLeft = 0;

  if (highScoresList.children.length === 0) {
    for (let i = 0; i < highScores.length; i++) {
      let highScoresLi = document.createElement("li");
      highScoresLi.setAttribute("Class", "list-group-item");
      highScoresLi.append(highScores[i].name + ": " + highScores[i].score);
      highScoresList.appendChild(highScoresLi);
    }
  } else {
  }
}

function resetQuiz(event) {
  event.preventDefault();
  location.reload();
}

function clear(event) {
  event.preventDefault();
  localStorage.clear();
  location.reload();
}

startBtn.addEventListener("click", startQuiz);
ansDiv.addEventListener("click", checkAnswer);
userSubmit.addEventListener("click", logScore);
hsLink.addEventListener("click", showScores);
quizAgain.addEventListener("click", resetQuiz);
clearScores.addEventListener("click", clear);
