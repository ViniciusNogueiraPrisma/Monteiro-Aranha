var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    // Impede o comportamento padrão do link
    event.preventDefault();
  });
}

// var swiperLideres = null;

// function initSwiper() {
//   if (window.innerWidth < 769) {
//     if (swiperLideres === null) {
//       swiperLideres = new Swiper(".mySwiperLider", {
//         slidesPerView: "auto",
//         spaceBetween: 24,
//         autoplay: {
//           delay: 5000,
//           disableOnInteraction: false,
//         },
//         pagination: {
//           el: ".swiper-pagination",
//         },
//       });
//     }
//   } else {
//     if (swiperLideres !== null) {
//       swiperLideres.destroy(true, true);
//       swiperLideres = null;
//     }
//   }
// }

// initSwiper();
// window.addEventListener("resize", initSwiper);
