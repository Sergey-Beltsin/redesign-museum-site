function fixedDesktopMenu() {
    const menu = document.querySelector('.main-nav__fix');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500 && window.innerWidth > 1000 && !menu.classList.contains('main-nav__fix--fixed')) {
            menu.classList.add('main-nav__fix--fixed');
        } else if (window.scrollY < 500 || window.innerWidth < 1000) {
            menu.classList.remove('main-nav__fix--fixed');
        }
    });

    window.addEventListener('resize', () => {
        if (window.scrollY > 500 && window.innerWidth > 1000 && !menu.classList.contains('main-nav__fix--fixed')) {
            menu.classList.add('main-nav__fix--fixed');
        } else if (window.scrollY < 500 || window.innerWidth < 1000) {
            menu.classList.remove('main-nav__fix--fixed');
        }
    });
}

export default fixedDesktopMenu;