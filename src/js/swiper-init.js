import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initSwiper() {
    return new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
            },
            769: {
                slidesPerView: 1,
            },
        },
    });
}
