const $hours = document.querySelector('.hours');
const $minutes = document.querySelector('.minutes');
const $seconds = document.querySelector('.seconds');

const $startBtn = document.querySelector('.start-btn');
const $resetBtn = document.querySelector('.reset-btn');

let isStarted = false;
let stopInterval = null;
let time = 0;

function changeStateOfStart() {
  isStarted = !isStarted;
}

function updateUIOfStartBtn() {
  if (isStarted) {
    $startBtn.textContent = 'PAUSE';
    $startBtn.classList.add('pause');
  } else {
    $startBtn.textContent = 'START';
    $startBtn.classList.remove('pause');
  }
}

function updateUIOfTimer(hours, minutes, seconds) {
  $hours.textContent = makeTimeToTwoDigit(hours);
  $minutes.textContent = makeTimeToTwoDigit(minutes);
  $seconds.textContent = makeTimeToTwoDigit(seconds);
}

function calculateTime() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  updateUIOfTimer(hours, minutes, seconds);
}

function makeTimeToTwoDigit(time) {
  if (time < 10) time = '0' + time;

  return time;
}

function startTimer() {
  stopInterval = setInterval(() => {
    time++;
    calculateTime();
  }, 1000);
}

function stopTimer() {
  clearInterval(stopInterval);
}

function resetTimer() {
  time = 0;
  calculateTime();
}

$startBtn.addEventListener('click', () => {
  changeStateOfStart();
  updateUIOfStartBtn();

  if (isStarted) startTimer();
  else stopTimer();
});

$resetBtn.addEventListener('click', resetTimer);
