var questionText = document.getElementById("question")
var main = document.getElementsByTagName("main")[0]
var timer = document.getElementById("timer")
var wrongAnswer = document.getElementById("wrong-answer")
var startButton = document.querySelector("main button")
var startText = document.querySelectorAll("main p")[0]
var answers = document.querySelector(".answers")
var form = document.querySelector("form")
var answerOne = document.querySelectorAll(".answers button")[0]
var answerTwo = document.querySelectorAll(".answers button")[1]
var answerThree = document.querySelectorAll(".answers button")[2]
var answerFour = document.querySelectorAll(".answers button")[3]
let buttons = document.querySelectorAll(".answer-button")
var currentQuestion = 1
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
    },
    6: {
        question: "Arrays in JS can be used to store _______.",
        1: "Numbers and strings",
        2: "Other arrays",
        3: "Booleans",
        4: "All of the above",
        correctAns: 4
    },
    7: {
        question: "The condition in an if/else statement is enclosed with ______.",
        1: "Quotes",
        2: "Curly brackets",
        3: "Parentheses",
        4: "Square brackets",
        correctAns: 3
    },
    8: {
        question: "String values must be enclosed within ______ when being assigned to variables",
        1: "Commas",
        2: "Curly brackets",
        3: "Quotes",
        4: "Parenthesis",
        correctAns: 2
    },
    9: {
        question: "Javascript was created by _______:",
        1: "Brendan Eich",
        2: "Bjarne Stroustrup",
        3: "Satoshi Nakamoto ",
        4: "Guido van Rossum",
        correctAns: 1
    },
    10: {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        1: "Javascript",
        2: "Terminal / bash",
        3: "For loops",
        4: "Console.log",
        correctAns: 4
    },
}
var quizLength = Object.keys(questions).length

var initializeQuiz = function () {
    startButton.style.display = startText.style.display = "none"

    timer.innerHTML = `Timer: ${timeRemaining}`
    timerInterval = setInterval(updateTimer, 1000)

    questionText.innerHTML = questions[1].question
    
    answers.style.display = "flex"
    for (var i=0; i < 4; i++) {
        buttons[i].innerText = questions[currentQuestion][i+1]
        buttons[i].addEventListener('click', (e) => {
            ans = e.target.innerText
        })
    }  
}

var iterateQuestion = function(currentQuestion) {
    var message = document.getElementById('wrong-answer')
    console.log(ans)
    if (currentQuestion == quizLength) {
        if (ans) {
            if (ans != questions[currentQuestion][questions[currentQuestion].correctAns]) {
                timeRemaining -=5
                // timer.style.color = "red"
                // message.style.display = "inline"
                flashElem(message, [['display', 'inline']], 2.5)
                score -= 1
            }
        }
        score += 1
        displayResultsPage(score)
        return
    }
    message.style.display = "none"
    score += 1
    
    if (ans) {
        if (ans != questions[currentQuestion][questions[currentQuestion].correctAns]) {
            timeRemaining -=5
            // message.style.display = "inline"
            flashElem(message, [['display', 'inline']], 2.5)
            flashElem(timer, [['color','red'],['font-size','3rem'],['font-weight','bold']], 1.5)
            score -= 1
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

var updateTimer = function() {
    if (timeRemaining < 1) {
        console.log("You lose!")
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
    var buttons = document.querySelectorAll(".answer-button")
    startText.innerText = `Your final score is ${score}.`
    questionText.innerText = "All done!"
    var submitButton = document.querySelectorAll("form input")[1]
    submitButton.addEventListener('click', () => {
        submitScore()
    })
    form.style.display = "block"
    startText.style.display = "block"
    answers.style.display = "none"
}

var submitScore = function() {
    let initials = document.getElementById("submission").value
    localStorage.setItem("score", JSON.stringify([initials, score]))
    window.location.href = "../high-scores.html"

}

var flashElem = function(elem, transitionProps, duration) {
    var initialValues = []
    let newTransitionProperty = []
    transitionProps.forEach(prop => {
        initialValues.push(getComputedStyle(elem)[prop[0]])
        elem.style[prop[0]] = prop[1]
        newTransitionProperty.push(prop[0])
    });
    console.log(initialValues)
    setTimeout(() => {
        elem.style.transitionDuration = duration + 's'
        elem.style.transitionProperty = newTransitionProperty.join(", ")
        for (let i=0; i < initialValues.length; i++) {
            elem.style[transitionProps[i][0]] = initialValues[i]
        }
    }, duration*220)
    setTimeout(() => {
        elem.style.transitionDuration = "0s"
        elem.style.transitionProperty = "none"
    }, duration*800)
}