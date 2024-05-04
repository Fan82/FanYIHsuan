$(document).ready(function () {
  $(".load-backdrop").show();
  setTimeout(function () {
    $(".load-backdrop").fadeOut();
    screenWidthCheck();
    gameHall_JS();
  }, 4000);

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

}