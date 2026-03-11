document.addEventListener('DOMContentLoaded', () => {
    const papers = document.querySelectorAll('.paper');
    const book = document.getElementById('myBook');
    const totalPapers = papers.length;

    // Inicializar z-index
    papers.forEach((paper, index) => {
        paper.style.zIndex = totalPapers - index;
    });

    function updateBookState() {
        const flippedCount = document.querySelectorAll('.paper.flipped').length;

        if (flippedCount === 0) {
            book.classList.remove('open', 'finished');
        } else if (flippedCount > 0 && flippedCount < totalPapers) {
            book.classList.add('open');
            book.classList.remove('finished');
        } else if (flippedCount === totalPapers) {
            book.classList.add('finished');
            book.classList.remove('open');
        }
    }

    papers.forEach((paper, index) => {
        paper.addEventListener('click', () => {
            if (!paper.classList.contains('flipped')) {
                paper.classList.add('flipped');
                paper.style.zIndex = index + 1;
            } else {
                paper.classList.remove('flipped');
                paper.style.zIndex = totalPapers - index;
            }
            updateBookState();
        });
    });
});