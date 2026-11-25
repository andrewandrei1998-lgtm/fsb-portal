// ===== МОБИЛЬНОЕ МЕНЮ =====
// Пока не используется, но пригодится при добавлении кнопки "бургер"

// ===== АККОРДЕОН =====
// Найдёт все элементы с классом accordion-header на странице
// и по клику будет сворачивать/разворачивать тело аккордеона
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('open');
    });
});