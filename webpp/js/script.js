$(document).ready(function () {
  $(".load-backdrop").show();
  setTimeout(function () {
    $(".load-backdrop").fadeOut();
    screenWidthCheck();
    gameHall_JS();
    mainScroll();
  }, 2500);

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

  $("a.contact").click(function () {
    $(".contact-menu").toggleClass('open');
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

  var gif = $('#gifImage')[0]; // 获取原生 DOM 元素
  gif.play(); // 自动播放
  gif.loop = true; // 循环播放
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
    if (scale < 0.7) {
      scale = 0.7;
    }

    $('a.logo').css('transform', 'scale(' + scale + ')');
  });
}