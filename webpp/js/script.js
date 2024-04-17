$(document).ready(function () {
  screenWidthCheck();
  gameHall_JS();
  timeLine();
  initializeCarousel(); // 重命名为initializeCarousel以更清晰地表示其作用
});

function screenWidthCheck() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth < 1000) {
    $("body").addClass("mobile");
  }
}

function gameHall_JS() {
  $("a.contact").click(function () {
    $(".contact-menu").toggleClass("show");
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
