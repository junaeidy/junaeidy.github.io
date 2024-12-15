const countdownDate = new Date('December 17, 2024 00:00:00').getTime();

const countdown = document.getElementById('countdown');
const countdownContainer = document.getElementById('countdown-container');
const birthdayCard = document.getElementById('birthday-card');


function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // When the countdown is over, show the birthday card
  if (distance < 0) {
    clearInterval(timer);
    countdownContainer.classList.add('hidden');
    birthdayCard.classList.remove('hidden');
  }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();