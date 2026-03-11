function actualizarContador() {
    // ESTABLECE TU FECHA AQUÍ (Año, Mes - 1, Día, Hora, Minuto)
    // Nota: Enero es 0, Febrero es 1, Marzo es 2...
    const fechaInicio = new Date(2025, 0, 18, 21, 0, 0);
    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    // Cálculos matemáticos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar el HTML
    document.getElementById('days').innerText = dias.toString().padStart(2, '0');
    document.getElementById('hours').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = segundos.toString().padStart(2, '0');
}

// Ejecutar la función cada segundo
setInterval(actualizarContador, 1000);

// Ejecutar una vez al cargar para evitar el "00" inicial
actualizarContador();