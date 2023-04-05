var pullScores = function() {
    if (!localStorage.getItem("high-scores")) {
        localStorage.setItem("high-scores",JSON.stringify([]))
        console.log("added")
    }

    let tempScore = JSON.parse(localStorage.getItem("score"))
    let highScores = JSON.parse(localStorage.getItem("high-scores"))
    highScores.push(tempScore)
    localStorage.setItem("high-scores", JSON.stringify(highScores))
}