const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close'),
    percent = document.querySelectorAll('.skills__percent'),
    lines = document.querySelectorAll('.divider.divider-bar.divider-bar-small');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});


percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});