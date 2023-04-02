


var questionText = document.getElementById("question")
var hideElements = document.getElementsByClassName("hide")
var main = document.getElementsByTagName("main")[0]

var initializeQuiz = function () {
    for (var i=0; i< hideElements.length; i++) {
        hideElements[i].style.display = "none"
    }

    questionText.innerHTML = questions[1].question
    for (var i=0; i < 4; i++) {
        var possibleAns = document.createElement("button")
        possibleAns.innerText = questions[1][i+1]
        possibleAns.classList.add("answer-button")
        main.appendChild(possibleAns)
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
        1: "A",
        2: "B",
        3: "C",
        4: "D",
    },
    3: {
        question: "What's the answer to question 3?",
        1: "A",
        2: "B",
        3: "C",
        4: "D",
    },
    4: {
        question: "What's the answer to question 4?",
        1: "A",
        2: "B",
        3: "C",
        4: "D",
    },
    5: {
        question: "What's the answer to question 5?",
        1: "A",
        2: "B",
        3: "C",
        4: "D",
    }
}