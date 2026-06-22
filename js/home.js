// =======================================
// HOME PAGE LOGIC
// =======================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("Home page loaded successfully.");

    const searchBar = document.querySelector('.search-bar');

    // Logic tìm kiếm bài học cơ bản
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.lesson-card');

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});