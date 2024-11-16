let homeScore = 0;
let guestScore = 0;
let period = 1;
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval;
let isTimeout = false;

const homeScoreElement = document.getElementById("homescore");
const guestScoreElement = document.getElementById("guestscore");
const periodElement = document.getElementById("period");
const timerElement = document.getElementById("timer");

function updateScores() {
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;

    homeScoreElement.classList.remove("leading");
    guestScoreElement.classList.remove("leading");

    if (homeScore > guestScore) {
        homeScoreElement.classList.add("leading");
    } else if (guestScore > homeScore) {
        guestScoreElement.classList.add("leading");
    }
}

// Home Score Board
document.querySelector(".home-minus-1").addEventListener("click", () => {
    homeScore = Math.max(0, homeScore - 1); // Adding this to Prevent negative scores
    updateScores();
});

document.querySelector(".home-plus-1").addEventListener("click", () => {
    homeScore += 1;
    updateScores();
});

document.querySelector(".home-plus-2").addEventListener("click", () => {
    homeScore += 2;
    updateScores();
});

document.querySelector(".home-plus-3").addEventListener("click", () => {
    homeScore += 3;
    updateScores();
});

// Guest Score Board
document.querySelector(".guest-minus-1").addEventListener("click", () => {
    guestScore = Math.max(0, guestScore - 1); // Adding this to Prevent negative scores
    updateScores();
});

document.querySelector(".guest-plus-1").addEventListener("click", () => {
    guestScore += 1;
    updateScores();
});

document.querySelector(".guest-plus-2").addEventListener("click", () => {
    guestScore += 2;
    updateScores();
});

document.querySelector(".guest-plus-3").addEventListener("click", () => {
    guestScore += 3;
    updateScores();
});

// New Game
document.getElementById("new-game-btn").addEventListener("click", () => {
    homeScore = 0;
    guestScore = 0;
    period = 1;
    periodElement.textContent = period;
    updateScores();
    stopTimer();
    timerElement.textContent = "00:00";
});

// Period Control
document.getElementById("next-period").addEventListener("click", () => {
    if (period < 4) {
        period++;
        periodElement.textContent = period;
    }
});

// Timer Controls
function updateTimerDisplay() {
    const minutes = String(timerMinutes).padStart(2, "0");
    const seconds = String(timerSeconds).padStart(2, "0");
    timerElement.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!timerInterval && !isTimeout) {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
            } else if (timerMinutes > 0) {
                timerMinutes--;
                timerSeconds = 59;
            } else {
                stopTimer();
            }
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

document.querySelectorAll(".timer-add").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const minutes = parseInt(e.target.dataset.minutes);
        timerMinutes += minutes;
        updateTimerDisplay();
    });
});

document.querySelector(".timer-start").addEventListener("click", startTimer);
document.querySelector(".timer-stop").addEventListener("click", stopTimer);
document.getElementById("timeout-btn").addEventListener("click", toggleTimeout);

function toggleTimeout() {
    isTimeout = !isTimeout;
    const timeoutBtn = document.getElementById("timeout-btn");

    if (isTimeout) {
        stopTimer();
        timeoutBtn.textContent = "End Timeout";
        timeoutBtn.classList.add("timeout-active");
        document.getElementById("timer-display").classList.add("timeout");
    } else {
        timeoutBtn.textContent = "Timeout";
        timeoutBtn.classList.remove("timeout-active");
        document.getElementById("timer-display").classList.remove("timeout");
        if (timerMinutes > 0 || timerSeconds > 0) {
            startTimer();
        }
    }
}
