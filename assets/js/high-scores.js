// Grabs scores from local storage and renders high score list
var pullScores = function() {
    let highScores = JSON.parse(localStorage.getItem("scores"))
    let myList = document.getElementById("my-list")

    for (let i=10; i >=1; i--) {
        for (let record in highScores) {
            if (highScores[record] === i) {
                let tempItem = document.createElement("li")
                tempItem.innerText = record + ' - ' + highScores[record]
                myList.appendChild(tempItem)
            }

        }
    }
}

// Functions for 'go back' and 'clear' buttons
var goBack = function() {
    window.location.href = "./index.html"
}

var clearScores = function() {
    localStorage.removeItem("scores")
    window.location.href = "./high-scores.html"
}