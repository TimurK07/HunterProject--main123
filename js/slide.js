document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const slider = document.getElementById('slider');
    const cards = document.querySelectorAll('.reviews__column');
    const cardWidth = cards[0].offsetWidth;
    const firstl = document.querySelector('.reviews_firstl');

    nextButton.addEventListener('click', function() {
        const scrollLeft = slider.scrollLeft;
        const visibleWidth = slider.offsetWidth;
        const contentWidth = slider.scrollWidth;
        const cardsPerRow = Math.floor(visibleWidth / cardWidth);
        const nextScroll = scrollLeft + visibleWidth;

        // Проверяем, сколько карточек осталось скрытыми вправо
        const remainingCards = cards.length - Math.ceil(nextScroll / cardWidth);

        // Если осталось меньше трех карточек, возвращаемся к началу
        if (remainingCards <= 0) {
            slider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Иначе прокручиваем к следующим трем карточкам
            slider.scrollTo({
                left: nextScroll,
                behavior: 'smooth'
            });
        }

        // Добавляем класс, который инициирует анимацию
        firstl.classList.add('half-fill');

        // После завершения анимации, убираем класс и возвращаем фон в исходное состояние
        setTimeout(() => {
            firstl.classList.remove('half-fill');
        }, 500); // Время анимации, в данном случае 0.5 секунды (500 миллисекунд)
    });
});



const slider = document.getElementById('slider');
let isDragging = false;
let startX;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    e.preventDefault(); // Предотвращаем выделение текста при зажатии левой кнопки мыши
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const scrollDelta = startX - e.clientX;
    slider.scrollLeft += scrollDelta;
    
    startX = e.clientX;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
});


const companyAll = document.querySelector('.company__all');
let isMouseDown = false;
let scrollLeft;

companyAll.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - companyAll.offsetLeft;
    scrollLeft = companyAll.scrollLeft;
});

companyAll.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

companyAll.addEventListener('mouseup', () => {
    isMouseDown = false;
});

companyAll.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - companyAll.offsetLeft;
    const walk = (x - startX) * 3;
    companyAll.scrollLeft = scrollLeft - walk;
});
