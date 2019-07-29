$(window).resize(function () {
    $('.leftSideNav').each(function (i, n) {
        var ph = $(this).parent().height();
        var pw = $(this).parent().width();
        var sh = 0;
        var s = $(this).siblings().each(function (i, n) {
            sh += $(this).height();
        })
        $(this).height(ph - sh);
        sh = 0, ph = 0, s = 0;

    });
});