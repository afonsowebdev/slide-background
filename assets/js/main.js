function atualizarRelogio() {
    const agora = new Date(); // pega a hora atual
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const horario = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio').textContent = horario;
}

// Atualiza imediatamente e depois a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);