document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.photo-strip');

    strips.forEach(strip => {
        strip.addEventListener('mouseenter', () => {
            strip.style.transition = "transform 0.3s ease";
            strip.style.transform += " scale(1.05)";
        });

        strip.addEventListener('mouseleave', () => {
            // Reestablece la rotación original según el lado
            if (strip.classList.contains('left')) {
                strip.style.transform = "rotate(-10deg) scale(1)";
            } else {
                strip.style.transform = "rotate(10deg) scale(1)";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const closeBtn = document.querySelector(".close-modal");

    // Seleccionamos todas las imágenes que queremos que sean ampliables
    const images = document.querySelectorAll('.photo-strip img, .sony-camera img, .main-container > img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src; // Copia la ruta de la imagen pequeña a la grande
        });
    });

    // Cerrar al hacer clic en la (X)
    closeBtn.onclick = () => { modal.style.display = "none"; }

    // Cerrar al hacer clic en cualquier parte oscura del fondo
    modal.onclick = (e) => {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    }
});