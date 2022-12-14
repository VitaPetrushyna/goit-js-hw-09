import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  datePicker: document.querySelector('input#datetime-picker'),
  startButton: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
};

// timer styling

refs.timer.style.display = 'flex';
refs.field[0].style.display = 'flex';
refs.field[0].style.flexDirection = 'column';
refs.field[1].style.display = 'flex';
refs.field[1].style.flexDirection = 'column';
refs.field[2].style.display = 'flex';
refs.field[2].style.flexDirection = 'column';
refs.field[3].style.display = 'flex';
refs.field[3].style.flexDirection = 'column';
refs.field[0].style.marginRight = '20px';
refs.field[1].style.marginRight = '20px';
refs.field[2].style.marginRight = '20px';
refs.days.style.fontSize = '24px';
refs.hours.style.fontSize = '24px';
refs.minutes.style.fontSize = '24px';
refs.seconds.style.fontSize = '24px';
refs.days.style.color = 'red';
refs.hours.style.color = 'red';
refs.minutes.style.color = 'red';
refs.seconds.style.color = 'red';

refs.startButton.disabled = true;
let timer = null;

// date picker

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startButton.disabled = true;
    } else {
      refs.startButton.disabled = false;
      refs.startButton.addEventListener('click', onCountdownTime());
    }
  },
};

function onCountdownTime() {
  timer = setInterval(() => {
    refs.startButton.disabled = true;

    const chooseTime = new Date(refs.datePicker.value).getTime();

    const currentTime = new Date().getTime();
    const deltaTime = chooseTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;

    if (deltaTime <= 1000) {
      clearInterval(timer);
      startButton.disabled = false;
    }
  }, 1000);
}

// countdown

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

flatpickr(refs.datePicker, options);
