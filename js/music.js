document.addEventListener('DOMContentLoaded', () => {
    const vinyl = document.querySelector('.vinyl-disk');
    const container = document.getElementById('hearts-container');

    vinyl.addEventListener('click', (e) => {
        // Creamos varios corazones por cada clic
        for (let i = 0; i < 8; i++) {
            createHeart(e.clientX, e.clientY);
        }
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤'; // Puedes usar '💖' o '💕' si prefieres
        
        // Posición inicial (donde se hizo clic) con un pequeño margen aleatorio
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;
        
        heart.style.left = `${x + offsetX}px`;
        heart.style.top = `${y + offsetY}px`;
        
        // Tamaño aleatorio para variedad
        const size = Math.random() * (30 - 15) + 15;
        heart.style.fontSize = `${size}px`;

        container.appendChild(heart);

        // Limpieza: eliminar el elemento después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});