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
