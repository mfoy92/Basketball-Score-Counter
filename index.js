let scoreTwoEL = document.getElementById("score-two")
let scoreOneEL = document.getElementById("score-one")
let count1 = 0
let count2 = 0 


function homeplusone() {
    count1 += 1
    scoreOneEL.textContent = count1
}

function homeplustwo() {
    count1 += 2
    scoreOneEL.textContent = count1
}

function homeplusthree() {
    count1 += 3
    scoreOneEL.textContent = count1
}

function awayplusone() {
    count2 += 1
    scoreTwoEL.textContent = count2
}

function awayplustwo() {
    count2 += 2
    scoreTwoEL.textContent = count2
}

function awayplusthree() {
    count2 += 3
    scoreTwoEL.textContent = count2
}