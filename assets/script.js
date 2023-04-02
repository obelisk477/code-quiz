


var questionText = document.getElementById("question")
var hideElements = document.getElementsByClassName("hide")
var main = document.getElementsByTagName("main")[0]
var currentQuestion = 1

var initializeQuiz = function () {
    for (var i=0; i< hideElements.length; i++) {
        hideElements[i].style.display = "none"
    }

    questionText.innerHTML = questions[1].question
    for (var i=0; i < 4; i++) {
        var possibleAns = document.createElement("button")
        possibleAns.innerText = questions[1][i+1]
        possibleAns.classList.add("answer-button")
        possibleAns.setAttribute('onclick',`iterateQuestion(${currentQuestion})`)
        main.appendChild(possibleAns)
    }

}

var iterateQuestion = function(currentQuestion) {
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
        question: "What's the answer to question 1?",
        1: "A",
        2: "B",
        3: "C",
        4: "D",
    },
    2: {
        question: "What's the answer to question 2?",
        1: "E",
        2: "F",
        3: "G",
        4: "H",
    },
    3: {
        question: "What's the answer to question 3?",
        1: "I",
        2: "J",
        3: "K",
        4: "L",
    },
    4: {
        question: "What's the answer to question 4?",
        1: "M",
        2: "N",
        3: "O",
        4: "P",
    },
    5: {
        question: "What's the answer to question 5?",
        1: "Q",
        2: "R",
        3: "S",
        4: "T",
    }
}