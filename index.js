let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let blankHome = 0
let blankGuest = 0


function blankPointsHome() {
    homePoints.innerText = blankHome
}

blankPointsHome()

function blankPointsGuest() {
    guestPoints.innerText = blankGuest
}

blankPointsGuest()

function plusOneHome() {
    homePoints.innerText = blankHome += 1
}

function plusTwoHome() {
    homePoints.innerText = blankHome += 2
 
}

function plusThreeHome() {
    homePoints.innerText = blankHome += 3
}

function plusOneGuest() {
    guestPoints.innerText = blankGuest += 1
}

function plusTwoGuest() {
    guestPoints.innerText = blankGuest += 2
}

function plusThreeGuest() {
    guestPoints.innerText = blankGuest += 3
}

function newGame() {
    blankGuest = 0
    blankHome = 0
    guestPoints.innerText = blankGuest
    homePoints.innerText = blankHome
}