import headMenu from './modules/header-menu';
// import titlesOnSlider from './modules/main-slider';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
import jquery from '../../node_modules/jquery';

window.addEventListener('DOMContentLoaded', () => {
    headMenu();

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

      var container = document.querySelector('.gallery__wrapper');
      var mixer = mixitup(container);
});