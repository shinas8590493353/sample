var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  speed:3000,
  effect:FormDataEvent,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop:true,
  },
  autoplay: {
    delay:2000,
  },
});