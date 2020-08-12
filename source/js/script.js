import headMenu from './modules/header-menu';
import galleryButtons from './modules/gallery-buttons';
import fixedDesktopMenu from './modules/fixed-menu';
// import darkenedOnHover from './modules/gallery-image';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
import mixitup from 'mixitup';
import jquery from 'jquery';

window.addEventListener('DOMContentLoaded', () => {
    headMenu();
    galleryButtons();
    fixedDesktopMenu();

    var mixer = mixitup('.gallery__wrapper');

    tns({
        container: '.main-slider__slides',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,

        controlsPosition: 'bottom',
        controlsText: [' ', ' '],
        // prevButton: `position: absolute;`

        // navPosition: 'bottom'
    });

      tns({
        container: '.about-museum__slider',
        items: 1,
        slideBy: 'page',
        axis: 'vertical',
        autoplay: true,
        mouseDrag: true,

        controlsPosition: 'bottom',
        controlsText: [' ', ' ']
        // prevButton: `position: absolute;`

        // navPosition: 'bottom'
    });

      // titlesOnSlider();
});