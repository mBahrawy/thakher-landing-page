// Toggle seach input
let isActiveSearch = false;
const toggleSearch = () => {
  isActiveSearch = !isActiveSearch;
  $("#seach-form").toggleClass("active");
};
$("#toggle-search").on("click", toggleSearch);

// Toggle active menu
let isActiveMenu = false;
$("#toggle-menu").on("click", () => {
  isActiveMenu = !isActiveMenu;
  isActiveSearch && !isActiveMenu && toggleSearch();
  $("#header-wrapper").toggleClass("active");
  $("#toggle-menu").toggleClass("active");
  $("#toggle-search").toggleClass("active");
});

// Auto hide menu on scoll
$(window).scroll(() => {
  if (isActiveMenu && this.scrollY >= 80 && this.innerWidth >= 768) {
    $("#toggle-menu").click();
  }
});

// Move search form node on mobile
$(window).on("resize load", () => {
  if ($(window).width() <= 768) {
    $("#seach-form").appendTo($("#header-wrapper"));
  } else {
    $("#seach-form").appendTo($("header"));
  }
});

// Toggle floating subscribe button
$("#toggle-subscribe-button").on("click", () => {
  $("#subscribe-email-input").toggleClass("expanded");
});

// For home page video player
var myVideo = document.getElementById("main-video");
var playPauseBtn = document.getElementById("play-pause-button");
let isVideoActive = false;

myVideo && (myVideo.controls = false);
const playPause = () => {
  playPauseBtn.classList.toggle("faded");
  $("#play-pause-button .fa-pause").toggle();
  $("#play-pause-button .fa-play").toggle();
  myVideo.paused ? myVideo.play() : myVideo.pause();
  isVideoActive = !isVideoActive;
};

$(window).scroll(() => {
  if (isVideoActive && this.scrollY >= 200) {
    playPauseBtn.click();
  }
});

// Sliders
const initSliders = () => {
  $(".blur-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "33%",
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "25%",
        },
      },
    ],
  });

  $(".products-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    slickPlay: "autoplay",
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "33%",
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "25%",
        },
      },
    ],
  });

  $(".product-images-slider").slick({
    vertical: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $("<div class='overlay-gredient'></div>").appendTo(".product-images-slider");

  $(".galley-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    fade: true,
    adaptiveHeight: true,
    asNavFor: ".gallery-slider-nav",
  });

  $(".gallery-slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".galley-slider",
    dots: true,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    adaptiveHeight: true,

    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
};

const initDatePicker = () => {
  try {
    $(".datepicker").datepicker({
      todayBtn: true,
      todayHighlight: true,
    });
  } catch (e) {}
};

const restartSliders = () => {
  $(".slick-slider").slick("unslick");
  initSliders();
};

// For interactive join us form
$(".toggle-end-date").on("change", function () {
  this.parentElement.parentElement
    .querySelectorAll(".end-date")[0]
    .classList.toggle("d-none");
});
let experinceNumber = 1; // default
$("#add-more-experince").on("click", function () {
  experinceNumber++;
  $(".item:first-of-type")
    .clone(true, true)
    .addClass(`item-${experinceNumber}`)
    .appendTo(".experince");
  $(`.item-${experinceNumber} label`).attr(
    "for",
    `still-there-${experinceNumber}`
  );
  $(`.item-${experinceNumber} .toggle-end-date`).attr(
    "id",
    `still-there-${experinceNumber}`
  );
});

initSliders();
initDatePicker();

// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#arrowTop").fadeIn(200); // Fade in the arrow
  } else {
    $("#arrowTop").fadeOut(200); // Else fade out the arrow
  }
});
$("#arrowTop").click(function () {
  // When arrow is clicked
  window.scrollTo({ top: 0, behavior: "smooth" });
});
