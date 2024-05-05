$(document).ready(function () {
  gameHall_JS();
  screenWidthCheck();
  scrollProject();

});


// function screenWidthCheck() {
//   var screenWidth = window.innerWidth || document.documentElement.clientWidth;

// if (screenWidth < 1000) {
//   if ($("body").hasClass("main-wireframe")) {
//     $(".container-side-btn").show();
//   }

//   $(".container-side-btn").click(function () {
//     $(".container-side").toggleClass("show");
//   });
// } else {
//   $(".container-side-btn").hide();
// }
// }

function gameHall_JS() {
  $("a.contact").click(function () {
    $(".contact-menu").toggleClass('open');
  });

  $("a.btn-tab.Screen").click(function () {
    $(".container-side").hide();
    $(this).toggleClass("active");
    $(".main").addClass("main-project").removeClass("main-wireframe");
    $(".project-wrapper .container.grid").show();
  });

  $("a.btn-tab.Wireframe").click(function () {
    $(".container-side").hide();
    $("body").addClass("main-wireframe").removeClass("main-project");
    $(this).addClass("active");
    $("a.btn-tab.Screen").removeClass("active");
    $(".project-wrapper .container.grid").show();
    $(".project").each(function () {
      if ($(this).find("img.wireframe").length === 0) {
        $(this).css("display", "none");
      }
    });
  });
  $("a.btn-tab.Flow").click(function () {
    $(this).toggleClass("active");
    $("body").removeClass("main-project");
    $("body").removeClass("main-wireframe");
    $(".container-side").show();
    $(".project-wrapper .container.grid").hide();
  });
}
function scrollProject() {
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    var projectOffset = $('#section-project').offset().top;
    var targetOffset = projectOffset - 400;

    // 迭代所有 project-img 元素，对它们进行操作
    $(".project-img img").each(function () {
      var imgOffset = $(this).offset().top;
      if (scrollPosition >= targetOffset) {
        $(this).css("transform", "translateY(-60px)");
      } else {
        $(this).css("transform", "translateY(0)");
      }
    });
  });
}