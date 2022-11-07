let counterHomeEl = document.getElementById("counter-home");
let counterGuestEl = document.getElementById("counter-guest");
let addPointHome = document.getElementById("btn-score-home");
let addPointGuest = document.getElementById("btn-score-guest");
let notifPointHome = document.getElementById("score-notif-home");
let notifPointGuest = document.getElementById("score-notif-guest");
let resetBtn = document.getElementById("btn-reset");
let year = document.getElementById("year")


let countHomePoint = 0;
let countGuestPoint = 0;
notifPointHome.textContent = "---";
notifPointGuest.textContent = "---";


function getRandomPoint(max) {
  return Math.round(Math.random() * max);
}

function updateHomeScore() {
  let scorePoint = getRandomPoint(3);
  countHomePoint += scorePoint;
  counterHomeEl.textContent = countHomePoint;

  if (scorePoint == 1) {
    notifPointHome.textContent = "+" + scorePoint + " point";
  } else if (scorePoint == 2 || scorePoint == 3) {
    notifPointHome.textContent = "+" + scorePoint + " points";
  } else {
    notifPointHome.textContent = "no points ";
  }
}

function updateGuestScore() {
  let scorePoint = getRandomPoint(3);
  countGuestPoint += scorePoint;
  counterGuestEl.textContent = countGuestPoint;

  if (scorePoint == 1) {
    notifPointGuest.textContent = "+" + scorePoint + " point";
  } else if (scorePoint == 2 || scorePoint == 3) {
    notifPointGuest.textContent = "+" + scorePoint + " points";
  } else {
    notifPointGuest.textContent = "no points ";
  }
}

// To build
function checkForWin() {

}

function reset() {
  countHomePoint = 0;
  countGuestPoint = 0;
  counterHomeEl.textContent = countHomePoint;
  counterGuestEl.textContent = countGuestPoint;
  notifPointHome.textContent = "---";
  notifPointGuest.textContent = "---";
}

function updateYear() {
  year.innerHTML = new Date().getFullYear()

}


addPointHome.addEventListener("click", updateHomeScore )
addPointGuest.addEventListener("click", updateGuestScore)
resetBtn.addEventListener("click", reset )

updateYear()


