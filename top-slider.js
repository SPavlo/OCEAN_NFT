new Swiper('.top__slider',{
    loop:true,
    breakpoints:{
        375:{
            sliderPerView:1.13,
        },
        450:{
            sliderPerView:1.4,

        },
        500:{
            sliderPerView:1.5,

        },
        560:{
            sliderPerView:1.7,

        },
        641:{
            sliderPerView:2.1,

        },
        1051:{
            sliderPerView:2.1,

        },
        1110:{
            sliderPerView:2.3,

        },
        1210:{
            sliderPerView:2.5,

        },
    }
});
var swiper = new Swiper(".SwiperFirst", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        375: {
            slidesPerView: 1.13,
            spaceBetween: 22,
        },
        450: {
            slidesPerView: 1.4,
            spaceBetween: 25,
        },
        500: {
            slidesPerView: 1.5,
            spaceBetween: 25,
        },
        560: {
            slidesPerView: 1.7,
            spaceBetween: 33,
        },
        641: {
            slidesPerView: 1.5,
            spaceBetween: 33,
        },
        1051: {
            slidesPerView: 2.1,
            spaceBetween: 33,
        },
        1110: {
            slidesPerView: 2.3,
            spaceBetween: 33,
        },
        1210: {
            slidesPerView: 2.5,
            spaceBetween: 33,
        },
    },
});
var swiperSecond = new Swiper(".SwiperSecond", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-second",
    },
    breakpoints: {
        375: {
            slidesPerView: 1.13,
            spaceBetween: 22,
        },
        440: {
            slidesPerView: 1.3,
            spaceBetween: 25,
        },
        490: {
            slidesPerView: 1.4,
            spaceBetween: 25,
        },
        590: {
            slidesPerView: 1.7,
            spaceBetween: 25,
        },
        690: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        790: {
            slidesPerView: 2.3,
            spaceBetween: 25,
        },
        850: {
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        910: {
            slidesPerView: 2.7,
            spaceBetween: 25,
        },
        975: {
            slidesPerView: 2,
            spaceBetween: 33,
        },
        1051: {
            slidesPerView: 2.1,
            spaceBetween: 33,
        },
        1110: {
            slidesPerView: 2.3,
            spaceBetween: 33,
        },
        1210: {
            slidesPerView: 2.5,
            spaceBetween: 33,
        },
    }
});

var swiperThird = new Swiper(".SwiperThird", {
    loop: true,
    slidesPerView: "1",
    navigation: {
        nextEl: ".swiper-button-third",
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 33,
        },

        1060: {
            slidesPerView: 3,
            spaceBetween: 33,
        },
    },
});

