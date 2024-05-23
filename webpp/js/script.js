$(document).ready(function () {
  gameHall_JS();
  scrollProject();
  loadModals();
});


function gameHall_JS() {
  $("a.contact").click(function () {
    $(".contact-menu").toggleClass('open');
  });

  $("a.btn-tab.Screen").click(function () {
    $(".container-side").hide();
    $(this).toggleClass("active");
    $("a.btn-tab.Flow").removeClass("active");
    $("a.btn-tab.Wireframe").removeClass("active");
    $(".main").addClass("main-project").removeClass("main-wireframe");
    $(".project-wrapper .container.grid").show();
  });

  $("a.btn-tab.Wireframe").click(function () {
    $(".container-side").hide();
    $("body").addClass("main-wireframe").removeClass("main-project");
    $(this).addClass("active");
    $("a.btn-tab.Screen").removeClass("active");
    $("a.btn-tab.Flow").removeClass("active");
    $(".project-wrapper .container.grid").show();
    $(".project").each(function () {
      if ($(this).find("img.wireframe").length === 0) {
        $(this).css("display", "none");
      }
    });
  });
  $("a.btn-tab.Flow").click(function () {
    $(this).toggleClass("active");
    $("a.btn-tab.Screen").removeClass("active");
    $("a.btn-tab.Wireframe").removeClass("active");
    $("body").removeClass("main-project");
    $("body").removeClass("main-wireframe");
    $(".container-side").show();
    $(".project-wrapper .container.grid").hide();
  });
}
function scrollProject() {
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    // Get the offset of #section-project
    var projectOffsetObj = $('#section-project').offset();
    if (projectOffsetObj) {
      var projectOffset = projectOffsetObj.top;
      console.log('Project Offset:', projectOffset); // Log the project offset
      var targetOffset = projectOffset - 400;

      // Iterate over all .project-img img elements
      $(".project-img img").each(function () {
        var imgOffsetObj = $(this).offset();
        if (imgOffsetObj) {
          var imgOffset = imgOffsetObj.top;
          console.log('Image Offset:', imgOffset); // Log the image offset
          if (scrollPosition >= targetOffset) {
            $(this).css("transform", "translateY(-60px)");
          } else {
            $(this).css("transform", "translateY(0)");
          }
        } else {
          console.log('Image offset is undefined for element:', this);
        }
      });
    } else {
      console.log('#section-project offset is undefined.');
    }
  });
}


function loadModals() {
  $("#modals-container").load("../modal.html", function () {
      $(".modal-trigger").each(function () {
          var trigger = $(this);
          var targetModalId = trigger.data("target");
          var targetModal = $("#" + targetModalId);

          // 打開模態框
          trigger.on('click', function () {
              targetModal.modal('show');
          });

          // 關閉模態框
          targetModal.find(".close").on('click', function () {
              targetModal.modal('hide');
          });

          $(window).on('click', function (event) {
              if ($(event.target).is(targetModal)) {
                  targetModal.modal('hide');
              }
          });
      });
  });
}