let timeEl = document.getElementById("timer");
let questions = document.getElementById("questions");
let ansSec = document.getElementById("answer_sec");
let quesResponse = document.getElementById("response");
let hsLink = document.getElementById("highscores");
let startBtn = document.getElementById("startBtn");
let ansDiv = document.getElementById("answers");

let quesArray = [
  {
    question: "Which of the following is NOT a datatype",
    answerA: "boolean",
    answerB: "string",
    answerC: "number",
    answerD: "variable",
  },
  {
    question: "What is used primarily to add styling to a web page?",
    answerA: "HTML",
    answerB: "CSS",
    answerC: "Python",
    answerD: "React.js",
  },
  {
    question: "What does WWW stand for?",
    answerA: "Web World Workings",
    answerB: "Weak Winter Wind",
    answerC: "World Wide Web",
    answerD: "Wendy Wants Waffles",
  },
  {
    question: "What HTML attribute references an external JavaScript file?",
    answerA: "href",
    answerB: "src",
    answerC: "class",
    answerD: "index",
  },
  {
    question: "What does DOM stand for?",
    answerA: "Document Object Model",
    answerB: "Display Object Management",
    answerC: "Digital Ordinance Model",
    answerD: "Desktop Oriented Mode",
  },
];

let ansArray = ["answer_d", "answer_b", "answer_c", "answer_b", "answer_a"];
let ansA = document.createElement("button");
let ansB = document.createElement("button");
let ansC = document.createElement("button");
let ansD = document.createElement("button");

ansA.setAttribute("Class", "btn btn-dark text-light btn-block");
ansB.setAttribute("Class", "btn btn-dark text-light btn-block");
ansC.setAttribute("Class", "btn btn-dark text-light btn-block");
ansD.setAttribute("Class", "btn btn-dark text-light btn-block");
ansA.setAttribute("id", "answer_a");
ansB.setAttribute("id", "answer_b");
ansC.setAttribute("id", "answer_c");
ansD.setAttribute("id", "answer_d");

let secondsLeft = 45;

function startQuiz(e) {
  if (e.target.matches("button")) {
    console.log("Clicked Start");
    setTime();
    questionFunc1();
    startBtn.style.display = "none";
    ansDiv.appendChild(ansA);
    ansDiv.appendChild(ansB);
    ansDiv.appendChild(ansC);
    ansDiv.appendChild(ansD)
    return;   
}
else {
    return;

function questionFunc1() {
  questions.textContent = quesArray[0].question;
  ansA.textContent = quesArray[0].answerA;
  ansB.textContent = quesArray[0].answerB;
  ansC.textContent = quesArray[0].answerC;
  ansD.textContent = quesArray[0].answerD;
  ansDiv.addEventListener("click", function () {
    if (e.target.id === ansArray[0]) {
      quesResponse.textContent = "Right!";
      questionFunc2();
    } else {
      if (secondsLeft > 10) {
        quesResponse.textContent = "Wrong!";
        secondsLeft = secondsLeft - 10;
        questionFunc2();
      } else {
        console.log("need to create ending func");
      }
    }
  });
}

function questionFunc2() {
  questions.textContent = quesArray[1].question;
  ansA.textContent = quesArray[1].answerA;
  ansB.textContent = quesArray[1].answerB;
  ansC.textContent = quesArray[1].answerC;
  ansD.textContent = quesArray[1].answerD;
  ansDiv.addEventListener("click", function () {
    e.preventDefault();
    if (e.target.id === ansArray[1]) {
      console.log(event.target.id);
      quesResponse.textContent = "Right!";
      questionFunc3();
      return;
    } else {
      if (secondsLeft > 10) {
        quesResponse.textContent = "Wrong!";
        secondsLeft = secondsLeft - 10;
        questionFunc3();
                return;
            }
            else {
                console.log("need to create ending func")
                questionFunc3();
                return;
            }
        }
    });
    return;          
}
function questionFunc3() {
    questions.textContent = quesArray[2].question;
    ansA.textContent = quesArray[2].answerA;
    ansB.textContent = quesArray[2].answerB;
    ansC.textContent = quesArray[2].answerC;
    ansD.textContent = quesArray[2].answerD;
    ansDiv.addEventListener('click', function() {
        if(event.target.id === ansArray[2]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            questionFunc4();
            return;
        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft-10;
                questionFunc4();
                return;
            }
            else {
                console.log("need to create ending func")
                questionFunc4();
                return;
            }
        }
    }); 
    return;         
}
function questionFunc4() {
    questions.textContent = quesArray[3].question;
    ansA.textContent = quesArray[3].answerA;
    ansB.textContent = quesArray[3].answerB;
    ansC.textContent = quesArray[3].answerC;
    ansD.textContent = quesArray[3].answerD;
    ansDiv.addEventListener('click', function() {
        if(event.target.id === ansArray[3]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            questionFunc5();
            return;
        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft-10;
                questionFunc5();
                return;
            }
            else {
                console.log("need to create ending func")
                return;
            }
        }
    }); 
    return;         
}
function questionFunc5() {
    questions.textContent = quesArray[4].question;
    ansA.textContent = quesArray[4].answerA;
    ansB.textContent = quesArray[4].answerB;
    ansC.textContent = quesArray[4].answerC;
    ansD.textContent = quesArray[4].answerD;
    ansDiv.addEventListener('click', function() {
        if(e.target.id === ansArray[4]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            return;

        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft - 10;
                return;
      } else {
        console.log("need to create ending func");
      }
    }
  });
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
