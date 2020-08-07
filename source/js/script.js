import headMenu from './modules/header-menu';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

window.addEventListener('DOMContentLoaded', () => {
    headMenu();

    tns({
        container: '.main-slider__slides',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,

        controlsPosition: 'bottom',
        controlsText: [' ', ' ']
        // prevButton: `position: absolute;`

        // navPosition: 'bottom'
      });
});