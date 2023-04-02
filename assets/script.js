


var questionText = document.getElementById("question")
var hideElements = document.getElementsByClassName("hide")
var main = document.getElementsByTagName("main")[0]
var timer = document.getElementById("timer")
var currentQuestion = 1
var timeRemaining = 60
var ans = ""

var initializeQuiz = function () {
    for (var i=0; i< hideElements.length; i++) {
        hideElements[i].style.display = "none"
    }

    timer.innerHTML = `Timer: ${timeRemaining}`

    setInterval(() => {
        if (timeRemaining < 1) {
            console.log("You lose!")
        }
        timeRemaining -= 1
        timer.innerHTML = `Timer: ${timeRemaining}`
    }, 1000)

    questionText.innerHTML = questions[1].question
    for (var i=0; i < 4; i++) {
        var possibleAns = document.createElement("button")
        possibleAns.addEventListener('click', (e) => {
            ans = e.target.innerText
        })
        possibleAns.innerText = questions[1][i+1]
        possibleAns.classList.add("answer-button")
        possibleAns.setAttribute('onclick',`iterateQuestion(${currentQuestion})`)
        main.appendChild(possibleAns)
    }

}

var iterateQuestion = function(currentQuestion) {
    if (ans) {
        if (ans != questions[currentQuestion][questions[currentQuestion].correctAns]) {
            console.log("Incorrect!")
            timeRemaining -=5
        }
    }
    let nextQuestion = currentQuestion + 1
    questionText.innerHTML = questions[nextQuestion].question
    let buttons = document.querySelectorAll(".answer-button")
    for (var i=0; i < 4; i++) {
        buttons[i].innerText = questions[nextQuestion][i+1]
        buttons[i].setAttribute('onclick', `iterateQuestion(${nextQuestion})` )
    }  
} 

var questions = {
    1: {
        question: "Which of these is not a primitive type in JS?",
        1: "String",
        2: "Number",
        3: "Boolean",
        4: "Object",
        correctAns: 4
    },
    2: {
        question: "The outer container syntax for arrays are:",
        1: "Curly brackets",
        2: "Angle brackets",
        3: "Square brackets",
        4: "Parentheses",
        correctAns: 3
    },
    3: {
        question: "for...in... loops are primarily used to iterate through what?",
        1: "Objects",
        2: "Arrays",
        3: "Strings",
        4: "Numbers",
        correctAns: 1
    },
    4: {
        question: "API stands for:",
        1: "Apriori programming intelligence",
        2: "Application programming iteration",
        3: "Application programming interface",
        4: "Argument producing iterator",
        correctAns: 3
    },
    5: {
        question: "DOM stands for:",
        1: "Document object module",
        2: "Document object model",
        3: "Decrypted object model",
        4: "Destructured object module",
        correctAns: 2
    }
}