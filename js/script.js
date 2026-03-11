// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Obtener referencias a elementos clave
    const optionCards = document.querySelectorAll('.option-card');
    const selectionMessage = document.getElementById('selectionMessage');
    const optionsContainer = document.getElementById('optionsContainer');

    // Función principal para manejar el clic en una opción
    function handleOptionClick(event) {
        // Encontrar la tarjeta pulsada (aunque se pulse en una imagen interna)
        const selectedCard = event.target.closest('.option-card');
        
        // Si no se pulsó en una tarjeta, salir
        if (!selectedCard) return;

        // 1. Quitar la clase 'selected' de TODAS las tarjetas
        optionCards.forEach(card => card.classList.remove('selected'));

        // 2. Añadir la clase 'selected' SOLO a la tarjeta pulsada
        selectedCard.classList.add('selected');

        // 3. Mostrar el mensaje de confirmación
        const optionId = selectedCard.id;
        const messageText = selectionTexts[optionId] || '¡Has seleccionado una opción!';
        
        selectionMessage.textContent = messageText;
        selectionMessage.classList.remove('hidden');

        // Opcional: una sutil animación de parpadeo en el borde
        selectedCard.style.animation = 'selectPulse 0.4s ease';
        
        // Limpiar la animación para el próximo clic
        setTimeout(() => {
            selectedCard.style.animation = '';
        }, 400);
    }

    // Añadir el escuchador de eventos a cada tarjeta
    optionCards.forEach(card => {
        card.addEventListener('click', handleOptionClick);
    });
    
    // Añadir la animación CSS para el pulso (esto también podría ir en el CSS)
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes selectPulse {
            0% { border-color: #e91e63; border-width: 5px; }
            50% { border-color: var(--heart-accent); border-width: 10px; }
            100% { border-color: #e91e63; border-width: 5px; }
        }
    `, styleSheet.cssRules.length);
});