$(document).ready(function () {
    var $animated = $('.show-animation');
    var $button = $('a.button');
    var $menu = $(".toggler");
    var $options = $(".one-way, .round-way, .multi-way");
    var $ticketBox = $(".type-box.ticket-box");
    var $openBox = $(".class-box");
    var $shownBTN = $(".close");

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
    $ticketBox.on('click', function () {
        $ticketBox.removeClass('active');
        $(this).addClass('open');
    });
    $openBox.on('click', function () {
        $openBox.removeClass('active');
        $(this).toggleClass('active');
    });
    $shownBTN.on('click', function () {
        $('.type-box.check-box').toggleClass('show');
        $(this).toggleClass('back')
    })

});
$(document).ready(function () {
    $('.dropdown-item').on('click', function () {
        var selectedCurrency = $(this).text();
        $('#dropdownMenu p').text(selectedCurrency);
    });
});
$(document).ready(function () {
    var exchangeRates = [
        { date: "2024-05-24", rate: 1.12 },
        { date: "2024-05-25", rate: 1.11 },
        { date: "2024-05-26", rate: 1.09 },
    ];

    $('.chart').each(function (index) {
        var ctx = $(this);
        var labels = [];
        var rates = [];
        exchangeRates.forEach(function (data) {
            labels.push(data.date);
            rates.push(data.rate);
        });

        var data = {
            labels: labels,
            datasets: [{
                label: "", // 將標籤更改為空字符串以隱藏
                data: rates,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 1
            }]
        };

        var options = {
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: false // 不顯示圖例
                },
                tooltip: {
                    enabled: false // 不啟用工具提示
                }
            }
        };

        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });
});

