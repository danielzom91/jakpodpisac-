$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu-toggle').toggleClass('active')
        $('.navigationbar').toggleClass('active')
    });
});

var btnUp = $('#buttonUp');

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        btnUp.addClass('show');
    } else {
        btnUp.removeClass('show');
    }
});

btnUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


$(document).ready(function() {
    var resize = new Array('.articleparagraph');
    resize = resize.join(',');

    var resetFont = $(resize).css('font-size');
    $(".resetText").click(function() {
        $(resize).css('font-size', resetFont);
    });

    $(".bigText").click(function() {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 1.2;
        $(resize).css('font-size', newFontSize);
        return false;
    });

    $(".smallText").click(function() {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 0.8;
        $(resize).css('font-size', newFontSize);
        return false;
    });
});