const startstopBtn = document.querySelector("#startstopBtn");
const resetBtn = document.querySelector("#resetBtn");
let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingseconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timeInterval = null;
let timerStatus = "stopped";

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingseconds);
}

// window.setInterval(stopWatch, 1000);

startstopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startstopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timeInterval);
    document.getElementById("startstopBtn").innerHTML =
      '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
