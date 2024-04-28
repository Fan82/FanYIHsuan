$(document).ready(function () {
  screenWidthCheck();
  gameHall_JS();
  timeLine();
  initializeCarousel();
  mainScroll();

});

function screenWidthCheck() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth < 1000) {
    $("body").addClass("mobile");

    if ($("body").hasClass("main-wireframe")) {
      $(".container-side-btn").show();
    }

    $(".container-side-btn").click(function () {
      $(".container-side").toggleClass("show");
    });
  } else {
    $(".container-side-btn").hide();
  }
}

function gameHall_JS() {
  $(".container-side-btn").hide();
  $('.contact-menu').hide();

  $("a.contact").click(function () {
    $(".contact-menu").show();
  });

  $("a.btn-tab.Flow").click(function () {
    $(".main").addClass("main-project").removeClass("main-wireframe");
  });

  $("a.btn-tab.Wireframe").click(function () {
    $(".main").addClass("main-wireframe").removeClass("main-project");
    $(".project").each(function () {
      if ($(this).find("img.wireframe").length === 0) {
        $(this).css("display", "none");
      }
    });
  });

  $(".mobile nav").click(function () {
    $(this).toggleClass("active");
  });

  function runMarquee() {
    var containerWidth = $(".marquee").width();
    var contentWidth = $(".marquee-content").width();
    var distance = contentWidth - containerWidth;
    $(".marquee-content").animate({ "left": -distance }, 10000, "linear", function () {
      $(this).css("left", containerWidth);
      runMarquee();
    });
  }

  runMarquee();
}


function initializeCarousel() {
  $("#myCarousel").carousel({
    interval: 1000,
    wrap: false,
  });
  $("#myCarousel1").carousel({
    interval: 2000,
    wrap: false,
  });
  $("#myCarousel2").carousel({
    interval: 3000,
    wrap: false,
  });
}

function timeLine() {
  $(document).on("scroll", timeline);

  function timeline() {
    var threshold_position =
      $(window).scrollTop() + ($(window).height() * 1) / 2;
    $(".timeline li").each(function () {
      if ($(this).offset().top < threshold_position) {
        $(this).addClass("visible");
      } else {
        $(this).removeClass("visible");
      }
    });
  }
  timeline();
}
function mainScroll() {
  if (!CSS.supports("animation-timeline: scroll()")) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".content", {
      scrollTrigger: {
        trigger: "body",
        scrub: 0.5,
        start: "top top",
        end: window.innerHeight * 0.4,
      },
      scale: 1,
    });

    gsap.to(".fillers path", {
      scrollTrigger: {
        trigger: ".content",
        scrub: 0.5,
        ease: "power4.in",
        start: "top bottom+=20%",
        end: "bottom bottom-=50%",
      },
      strokeDashoffset: 0,
    });
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var scale = 1 - (scroll / 100);

    // Limiting the minimum scale to 0.5
    if (scale < 0.5) {
      scale = 0.5;
    }

    $('a.logo').css('transform', 'scale(' + scale + ')');
  });
}

