var swiper = new Swiper('.swiper', {
    init: true,
    speed: 400,
    spaceBetween: 100,
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        },
});

