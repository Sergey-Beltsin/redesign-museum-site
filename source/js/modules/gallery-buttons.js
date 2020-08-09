function galleryButtons() {
    const buttons = document.querySelectorAll('.gallery__filter__button');

    buttons.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('gallery__filter__button--active')) {
                buttons.forEach(e => {
                    e.classList.remove('gallery__filter__button--active');
                });
                elem.classList.add('gallery__filter__button--active');
            }
        });
    });
}

export default galleryButtons;