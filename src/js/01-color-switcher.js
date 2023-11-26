const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    let backgroundColorBody = getRandomHexColor();
    body.style.backgroundColor = backgroundColorBody;
    if (timerId !== null) {
      stopBtn.disabled = false;
      startBtn.disabled = true;
      stopBtn.addEventListener('click', () => {
        stopBtn.disabled = true;
        startBtn.disabled = false;
      });
    }
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});

//функція рандомної генерація кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

//стилізація кнопок
startBtn.style.margin = '100px auto auto 550px';
startBtn.style.padding = '10px 20px 10px 20px';
stopBtn.style.padding = '10px 20px 10px 20px';
