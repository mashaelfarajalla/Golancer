AOS.init();

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });
});

new Swiper("#servers .mySwiper", {
  navigation: {
    nextEl: "#servers .swiper-button-next",
    prevEl: "#servers .swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesPerView: "auto",
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

new Swiper("#Projects .mySwiper2", {
  navigation: {
    nextEl: "#Projects .swiper-button-next",
    prevEl: "#Projects .swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centerSlide: true,
  fade: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

new Swiper("#Testimonials .mySwiper3", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 110,
  navigation: {
    nextEl: "#Testimonials .swiper-button-next",
    prevEl: "#Testimonials .swiper-button-prev",
  },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

var btnContainer = document.getElementById("myul");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
