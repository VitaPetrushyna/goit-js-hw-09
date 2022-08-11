// const refs = {
//   btnStart: document.querySelector('button[data-start]'),
//   btnStop: document.querySelector('button[data-stop]'),
//   body: document.querySelector('body'),
// };

// let timerId = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const onСhangesBackgroundColor = function () {
//   refs.body.style.backgroundColor = getRandomHexColor();
// };

// refs.btnStart.addEventListener('click', () => {
//   timerId = setInterval(onСhangesBackgroundColor, 1000);
//   refs.btnStart.disabled = true;
// });

// refs.btnStop.addEventListener('click', () => {
//   clearInterval(timerId);
//   refs.btnStart.disabled = false;
// });

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onСhangesBackgroundColor = function () {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.body.style.color = getRandomHexColor();
};

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(onСhangesBackgroundColor, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  console.log(timerId);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  console.log(`Interval with id ${timerId} has stopped!`);
});
