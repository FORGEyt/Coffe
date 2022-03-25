const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__overlay'),
      closeElem = document.querySelector('.header__overlay_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('view');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('view');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
