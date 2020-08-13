function headMenu() {
    const btn = document.querySelector('.main-nav__toggle'),
    menu = document.querySelector('.main-nav__list__wrapper'),
    wrapper = document.querySelector('.main-nav__wrapper'),
    mainNav = document.querySelector('.main-nav'),
    menuLinks = document.querySelectorAll('.main-nav__item__link');

    btn.addEventListener('click', () => {
    if (wrapper.classList.contains('main-nav--active')) {
        wrapper.classList.remove('main-nav--active');
        mainNav.classList.remove('main-nav--opened');
        document.body.style.overflow = 'auto';
        menu.style.visibility = 'hidden';
    } else {
        wrapper.classList.add('main-nav--active');
        mainNav.classList.add('main-nav--opened');
        document.body.style.overflow = 'hidden';
        menu.style.visibility = 'visible';
    }
    });

    window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.body.style.overflow = 'auto';
        menu.style.visibility = 'visible';
    } else if (mainNav.classList.contains('main-nav--opened' && window.innerWidth < 768)) {
        document.body.style.overflow = 'hidden';
    } else {
        menu.style.visibility = 'hidden';
    }
    });
}

export default headMenu;