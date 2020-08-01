const btn = document.querySelector('.main-nav__toggle'),
      menu = document.querySelector('.main-nav__list__wrapper'),
      wrapper = document.querySelector('.main-nav__wrapper'),
      mainNav = document.querySelector('.main-nav'),
      menuLinks = document.querySelectorAll('.main-nav__item__link');

btn.addEventListener('click', () => {
    if (wrapper.classList.contains('main-nav--active')) {
        wrapper.classList.remove('main-nav--active');
        mainNav.classList.remove('main-nav--opened');
        mainNav.classList.remove('main-nav--scrolled-active');
        menu.style.visibility = 'hidden';
    } else {
        wrapper.classList.add('main-nav--active');
        mainNav.classList.add('main-nav--opened');
        menu.style.visibility = 'visible';
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        mainNav.classList.add('main-nav--scrolled');
    } else {
        mainNav.classList.remove('main-nav--scrolled');
    }

    btn.addEventListener('click', () => {
        // if (mainNav.classList.contains('main-nav--scrolled-active')) {
        //     mainNav.classList.remove('main-nav--scrolled-active');
        // }
        if (!mainNav.classList.contains('main-nav--scrolled-active') && mainNav.classList.contains('main-nav--opened') && window.scrollY > 600) {
            mainNav.classList.add('main-nav--scrolled-active');
        } else if (mainNav.classList.contains('main-nav--scrolled-active') && window.scrollY < 600) {
            mainNav.classList.remove('main-nav--scrolled-active');
        }
    });
});