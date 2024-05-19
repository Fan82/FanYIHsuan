$(document).ready(function () {
    var $animated = $('.show-animation');
    var $button = $('a.button');
    var $menu = $(".toggler");
    var $options = $(".one-way, .round-way, .multi-way");

    $options.on('click', function () {
        $options.removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('one-way')) {
            $(".time .type-box").eq(1).hide(); // 隱藏第二個type-box
        } else {
            $(".time .type-box").eq(1).show(); // 顯示第二個type-box
        }
        if ($(this).hasClass('multi-way')) {
            $(".type-box.add").removeClass('none'); // 隱藏第二個type-box
        } else {
            $(".type-box.add").addClass('none'); // 顯示第二個type-box
        }
    });
    $menu.on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('overflow');
    });
    $button.on('click', function () {
        event.preventDefault();
        $animated.removeClass('is-view');
        setTimeout(function () {
            window.location.href = $button.attr('href');
        }, 800);
    });
});
