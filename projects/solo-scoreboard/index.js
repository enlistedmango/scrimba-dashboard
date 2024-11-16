let homeScore = 0;
let guestScore = 0

const homeScoreElement = document.getElementById("homescore");
const guestScoreElement = document.getElementById("guestscore");

// Home Score Board
document.querySelector(".home-minus-1").addEventListener("click", () => {
    homeScore -= 1;
    homeScoreElement.textContent = homeScore;
});

document.querySelector(".home-plus-1").addEventListener("click", () => {
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
});

document.querySelector(".home-plus-2").addEventListener("click", () => {
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
});

document.querySelector(".home-plus-3").addEventListener("click", () => {
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
});


// Guest Score Board
document.querySelector(".guest-minus-1").addEventListener("click", () => {
    guestScore -= 1;
    guestScoreElement.textContent = guestScore;
});

document.querySelector(".guest-plus-1").addEventListener("click", () => {
    guestScore += 1;
    guestScoreElement.textContent = guestScore;
});

document.querySelector(".guest-plus-2").addEventListener("click", () => {
    guestScore += 2;
    guestScoreElement.textContent = guestScore;
});

document.querySelector(".guest-plus-3").addEventListener("click", () => {
    guestScore += 3;
    guestScoreElement.textContent = guestScore;
});
