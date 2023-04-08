var questionText = document.getElementById("question")
var timer = document.getElementById("timer")
var wrongAnswer = document.getElementById("wrong-answer")
var startButton = document.querySelector("main button")
var startText = document.querySelectorAll("main p")[0]
var answers = document.querySelector(".answers")
var form = document.querySelector("form")
let buttons = document.querySelectorAll(".answer-button")
var currentQuestion = 0
var timeRemaining = 60
var timerInterval
var ans = ""
var score = 0
var questions = {
    1: {
        question: "Which of these is not a primitive type in JS?",
        1: "String",
        2: "Number",
        3: "Boolean",
        4: "Object",
        correctAns: function() {
            return this[4]
        }
    },
    2: {
        question: "The outer container syntax for arrays are:",
        1: "Curly brackets",
        2: "Angle brackets",
        3: "Square brackets",
        4: "Parentheses",
        correctAns: function() {
            return this[3]
        }
    },
    3: {
        question: "for...in... loops are primarily used to iterate through what?",
        1: "Objects",
        2: "Arrays",
        3: "Strings",
        4: "Numbers",
        correctAns: function() {
            return this[1]
        }
    },
    4: {
        question: "API stands for:",
        1: "Apriori programming intelligence",
        2: "Application programming iteration",
        3: "Application programming interface",
        4: "Argument producing iterator",
        correctAns: function() {
            return this[3]
        }
    },
    5: {
        question: "DOM stands for:",
        1: "Document object module",
        2: "Document object model",
        3: "Decrypted object model",
        4: "Destructured object module",
        correctAns: function() {
            return this[2]
        }
    },
    6: {
        question: "Arrays in JS can be used to store _______.",
        1: "Numbers and strings",
        2: "Other arrays",
        3: "Booleans",
        4: "All of the above",
        correctAns: function() {
            return this[4]
        }
    },
    7: {
        question: "The condition in an if/else statement is enclosed with ______.",
        1: "Quotes",
        2: "Curly brackets",
        3: "Parentheses",
        4: "Square brackets",
        correctAns: function() {
            return this[3]
        }
    },
    8: {
        question: "String values must be enclosed within ______ when being assigned to variables",
        1: "Commas",
        2: "Curly brackets",
        3: "Quotes",
        4: "Parenthesis",
        correctAns: function() {
            return this[2]
        }
    },
    9: {
        question: "Javascript was created by _______:",
        1: "Brendan Eich",
        2: "Bjarne Stroustrup",
        3: "Satoshi Nakamoto ",
        4: "Guido van Rossum",
        correctAns: function() {
            return this[1]
        }
    },
    10: {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        1: "Javascript",
        2: "Terminal / bash",
        3: "For loops",
        4: "Console.log",
        correctAns: function() {
            return this[4]
        }
    },
}

var initializeQuiz = function () {
    startButton.style.display = startText.style.display = "none"
    timer.innerHTML = `Timer: ${timeRemaining}`
    timerInterval = setInterval(updateTimer, 1000)

    for (var i=0; i < 4; i++) {
        buttons[i].addEventListener('click', iterateQuestion)
    }  

    iterateQuestion()
}

var iterateQuestion = function(event) {
    try {
        ans = event.target.innerHTML
        let lastQuestion = questions[currentQuestion]
        if (!(ans == lastQuestion.correctAns())) {
            wrongAnswer.style.display = "block"
            wrongAnswer.style.color = timer.style.color = "red"
            timeRemaining -= 5
            setTimeout(revertStyle, 1300)
        } else if ((ans == lastQuestion.correctAns())) {
            score += 1
        }
    }
     catch {   
        ans = ""
    }

    if (currentQuestion == Object.keys(questions).length) {
        displayResultsPage(score)
        clearInterval(timerInterval)
        return
    }

    currentQuestion += 1
    questionText.innerHTML = questions[currentQuestion].question
    answers.style.display = "flex"

    for (let i=0; i < buttons.length; i++) {
        buttons[i].innerText = questions[currentQuestion][i+1]
    }
} 

var updateTimer = function() {
    if (timeRemaining < 1) {
        clearInterval(timerInterval)
        displayResultsPage(score)
        return
    }
    timeRemaining -= 1
    timer.innerHTML = `Timer: ${timeRemaining}`
}

var displayResultsPage = function () {
    timer.style.color = "black"
    clearInterval(timerInterval)
    startText.innerText = `Your final score is ${score}.`
    questionText.innerText = "All done!"
    var submitButton = document.querySelectorAll("form input")[1]
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        submitScore()
    })
    form.style.display = startText.style.display = "block"
    answers.style.display = "none"
}

var submitScore = function() {
    let initials = document.getElementById("submission").value
    localStorage.setItem("score", JSON.stringify([initials, score]))
    window.location.href = "../high-scores.html"
}

var revertStyle = function() {
    wrongAnswer.style.display = "none"
    timer.style.color = "black"
}