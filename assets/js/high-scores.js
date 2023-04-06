var pullScores = function() {
    if (!localStorage.getItem("high-scores")) {
        localStorage.setItem("high-scores",JSON.stringify([]))
        console.log("added")
    }

    let tempScore = JSON.parse(localStorage.getItem("score"))
    let highScores = JSON.parse(localStorage.getItem("high-scores"))
    if (!highScores.includes(tempScore)) {
        // needs logic updated to check stringified temp score against all stringified current highscores
        console.log(highScores.indexOf(tempScore))
        console.log(tempScore)
        highScores.push(tempScore)
        localStorage.setItem("high-scores", JSON.stringify(highScores))
    }




    let myList = document.getElementById("my-list")

    for (let i=0; i < highScores.length; i++) {
        let tempItem = document.createElement("li")
        tempItem.innerText = highScores[i][0] + ' - ' +  highScores[i][1]
        myList.append(tempItem)
    }
}
