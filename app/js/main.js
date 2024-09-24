$(function () {
   $('.top__slider-inner').slick({
      dots: true,
      arrows: false,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
   });

   //

   $('.resources__slider').slick({
      dots: true,
      arrows: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
   });

   //

   // $('').slick({

   // });

   $('.testimonials__slider-inner')
      .on('init', function (event, slick) {
         // Додаємо клас до наступного слайда після активного
         $('.slick-slide[data-slick-index="1"]').addClass('next-slide');
      })
      .slick({
         dots: true,
         arrows: false,
         speed: 500,
         autoplay: true,
         autoplaySpeed: 2000,
         draggable: true,
         slidesToShow: 2,
      });

   $('.testimonials__slider-inner').on(
      'beforeChange',
      function (event, slick, currentSlide, nextSlide) {
         // Видаляємо клас з усіх слайдів
         $('.slick-slide').removeClass('next-slide');

         // Додаємо клас до наступного слайда під час прокрутки
         $('.slick-slide[data-slick-index="' + (nextSlide + 1) + '"]').addClass(
            'next-slide'
         );
      }
   );

   $('.faq__item-title').on('click', function () {
      $(this).toggleClass('faq__item-title--active');
      $(this).next().slideToggle();
   });
   $('.faq__item').on('click', function () {
      $(this).toggleClass('faq__item--active');
   });
});

// Функція для прокрутки сторінки наверх
function scrollToTop() {
   // Прокрутити сторінку до верху з плавністю
   window.scrollTo({
      top: 0,
      behavior: 'smooth',
   });
}

// Отримати елемент кнопки
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Додати обробник подій для події прокрутки
window.addEventListener('scroll', function () {
   // Визначити, чи користувач почав скролити сторінку
   if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
   ) {
      scrollToTopBtn.style.display = 'flex';
   } else {
      scrollToTopBtn.style.display = 'none';
   }
});

// // wow animation
// wow = new WOW({
//    boxClass: "wow",
//    animateClass: "animate__animated",
//    offset: 25,
//    mobile: true,
//    live: true,
// });
// wow.init();
