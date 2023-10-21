const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const colorSelect = document.getElementById('colorSelect');

let isRunning = false;
let time = 1500; // 25 minutos em segundos
let interval;

startButton.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        startButton.innerText = "Iniciar";
    } else {
        isRunning = true;
        startButton.innerText = "Pausar";
        interval = setInterval(updateTimer, 1000);
    }
});

resetButton.addEventListener('click', function () {
    clearInterval(interval);
    isRunning = false;
    time = 1500;
    startButton.innerText = "Iniciar";
    updateTimer();
});

colorSelect.addEventListener('change', function () {
    const selectedColor = colorSelect.value;
    document.body.style.backgroundColor = selectedColor;
    if (selectedColor === 'red') {
        timer.style.color = 'white';
    } else {
        timer.style.color = 'black';
    }
});

function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timer.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (time === 0) {
        clearInterval(interval);
        isRunning = false;
        startButton.innerText = "Iniciar";
        time = 1500; // Reiniciar o temporizador para 25 minutos
    } else {
        time--;
    }
}
