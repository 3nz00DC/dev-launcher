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

// Atualiza o timestamp JSON
function updateJsonTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('jsonTime').textContent = `"${hours}:${minutes}:${seconds}"`;
}

// Lógica de deslizar as três telas
const slider = document.getElementById('slider');
let currentScreen = 0;

function toggleScreen() {
    // Incrementa a tela atual
    currentScreen = (currentScreen + 1) % 3;
    
    // Remove todas as classes de deslizamento
    slider.classList.remove('slide-left-1', 'slide-left-2');
    
    // Adiciona a classe apropriada
    if (currentScreen === 1) {
        slider.classList.add('slide-left-1');
    } else if (currentScreen === 2) {
        slider.classList.add('slide-left-2');
    }
}

// Inicia os temporizadores
setInterval(updateTime, 1000); // Roda a cada 1 segundo
setInterval(updateHeartRate, 2000); // Muda o coração a cada 2 segundos
setInterval(updateJsonTime, 1000); // Atualiza o JSON a cada 1 segundo
setInterval(toggleScreen, 5000); // Troca de tela a cada 5 segundos

// Chama as funções logo de cara para não iniciar vazio
updateTime(); 
updateHeartRate();
updateJsonTime();
