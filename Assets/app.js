let timeEl = document.getElementById("timer");
let questions = document.getElementById("questions");
let ansAll = document.getElementById("answers");
let quesResponse = document.getElementById("response");
let hsLink = document.getElementById("highscores");
let startBtn = document.querySelector("#startBtn");

let question1 = {
  question: "Which of the following is NOT a datatype",
  answerA: "boolean",
  answerB: "string",
  answerC: "number",
  answerD: "variable",
};
let question2 = {
  question: "What is used primarily to add styling to a web page?",
  answerA: "HTML",
  answerB: "CSS",
  answerC: "Python",
  answerD: "React.js",
};
let question3 = {
  question: "What does WWW stand for?",
  answerA: "Web World Workings",
  answerB: "Weak Winter Wind",
  answerC: "World Wide Web",
  answerD: "Wendy Wants Waffles",
};
let question4 = {
  question: "What HTML attribute references an external JavaScript file?",
  answerA: "href",
  answerB: "src",
  answerC: "class",
  answerD: "index",
};
let question5 = {
  question: "What does DOM stand for?",
  answerA: "Document Object Model",
  answerB: "Display Object Management",
  answerC: "Digital Ordinance Model",
  answerD: "Desktop Oriented Mode",
};

let ansA = document.createElement("button");
let ansB = document.createElement("button");
let ansC = document.createElement("button");
let ansD = document.createElement("button");

ansA.setAttribute("Class", "btn btn-dark text-light btn-block");
ansB.setAttribute("Class", "btn btn-dark text-light btn-block");
ansC.setAttribute("Class", "btn btn-dark text-light btn-block");
ansD.setAttribute("Class", "btn btn-dark text-light btn-block");

let secondsLeft = 45;

function startQuiz(e) {
  if (e.target.matches("button")) {
    console.log("Clicked Start");
    setTime();
    questionFunc();
    startBtn.style.display = "none";
  }
}

function questionFunc() {
  questions.textContent = question1.question;
  ansAll.appendChild(ansA);
  ansAll.appendChild(ansB);
  ansAll.appendChild(ansC);
  ansAll.appendChild(ansD);
  ansA.textContent = question1.answerA;
  ansB.textContent = question1.answerB;
  ansC.textContent = question1.answerC;
  ansD.textContent = question1.answerD;
}

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("Done");
    }
  }, 1000);
}

startBtn.addEventListener("click", startQuiz);
