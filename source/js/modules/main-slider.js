function titlesOnSlider(activeClass) {
    const titles = document.querySelectorAll('.main-slider__title'),
          slides = document.querySelectorAll('#tns1 img'),
          slider = document.querySelector('.main-slider__slides'),
          prevButton = document.querySelector('[data-controls="prev"]'),
          nextButton = document.querySelector('[data-controls="next"]');

          
    function removeAddActiveClass() {
        titles.forEach((title, i) => {
            title.classList.remove('main-slider__title--active');
        });

        slides.forEach((slide, i) => {
            if (slide.classList.contains('tns-slide-active')) {
                titles.forEach((title, titleI) => {
                    if (titleI - 1 == (i - 1)) {
                        title.classList.add('main-slider__title--active');
                    }
                });
            }
        });
    }

    removeAddActiveClass();

    function allRemoveAddClass() {

        if (slider.style.transform == 'translate3d(-12.5%, 0px, 0px)' || slider.style.transform == 'translate3d(-25%, 0px, 0px)' || slider.style.transform == 'translate3d(-37.5%, 0px, 0px)' || slider.style.transform == 'translate3d(-50%, 0px, 0px)' || slider.style.transform == 'translate3d(-62.5%, 0px, 0px)' || slider.style.transform == 'translate3d(-75%, 0px, 0px)') {
            removeAddActiveClass();
        } else {
            console.log('bad');
        }
    }

    allRemoveAddClass();

    prevButton.addEventListener('click', () => {
        titles.forEach((title, i) => {
            title.classList.remove('main-slider__title--active');
        });

        allRemoveAddClass();

        console.log('hi itsprevButton');
    });

    nextButton.addEventListener('click', () => {
        allRemoveAddClass();

        console.log('hi its nextButton');
    });
}

export default titlesOnSlider;