// Swiperjs kütüphanesi kullanarak desktopta slidesPerView: 5 ve mobilde slidesPerView: 3 ayarlamak için aşağıdaki kodu kullanabilirsiniz:
// Swiper nesnesini oluşturun
var mySwiper = new Swiper('.swiper-container', {
  // Desktopta 5 sütun göster
  slidesPerView: 5,
  // Ekran genişliği 640 pikselden küçük olduğunda 3 sütun göster
  breakpoints: {
    640: {
      slidesPerView: 3
    }
  }
});
