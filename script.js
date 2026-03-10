// Atualiza a hora e a data
function updateTime() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} BRT`;

    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const dateStr = now.toLocaleDateString('pt-BR', options);
    document.getElementById('date').textContent = dateStr;
}

// Simula o batimento cardíaco mudando
function updateHeartRate() {
    const heartRate = Math.floor(Math.random() * (75 - 65 + 1)) + 65;
    document.getElementById('heart').textContent = `${heartRate} bpm`;
}

// Lógica de deslizar as telas
const slider = document.getElementById('slider');
let isScreenTwo = false;

function toggleScreen() {
    if (isScreenTwo) {
        slider.classList.remove('slide-left'); // Volta para a Tela 1
    } else {
        slider.classList.add('slide-left');    // Vai para a Tela 2
    }
    isScreenTwo = !isScreenTwo;
}

// Inicia os temporizadores
setInterval(updateTime, 1000); // Roda a cada 1 segundo
setInterval(updateHeartRate, 2000); // Muda o coração a cada 2 segundos
setInterval(toggleScreen, 5000); // Troca de tela a cada 5 segundos

// Chama as funções logo de cara para não iniciar vazio
updateTime(); 
updateHeartRate();
