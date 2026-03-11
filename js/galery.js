document.addEventListener('DOMContentLoaded', () => {
    const polaroids = document.querySelectorAll('.polaroid');

    polaroids.forEach(p => {
        // Genera una rotación aleatoria entre -15 y 15 grados
        const randomRot = Math.floor(Math.random() * 30) - 15;
        p.style.transform = `rotate(${randomRot}deg)`;

        // Al quitar el mouse, vuelve a su rotación aleatoria original
        p.addEventListener('mouseleave', () => {
            p.style.transform = `rotate(${randomRot}deg)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const closeBtn = document.querySelector(".close-modal");

    // Seleccionamos todas las imágenes que queremos que sean ampliables
    const images = document.querySelectorAll('.polaroid img');

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