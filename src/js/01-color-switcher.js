function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalID;


startBtn.addEventListener('click', startSwichingColor);
stopBtn.addEventListener('click', stopSwichingColor);

function startSwichingColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalID = setInterval(changeColor, 700);
};
function stopSwichingColor() {
  stopBtn.disabled = true;
  startBtn.disabled = false ;
   clearInterval(intervalID);
};
function changeColor() {
  document.body.style.background=getRandomHexColor();
};


 