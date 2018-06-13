// $(document).ready(function () {
//     if ($('window').offset().top>1) 
//     {
//         $('.menu').addClass('nav-bg');
//     }
//     if ($('window').offset().top<1) 
//     {
//         $('.menu').removeClass('nav-bg');
//     }
// });

$(document).ready(function () {
    $(window).scroll(function () {

        if ($(window).scrollTop() > 1) {
            $('.menu').addClass('nav-bg ');
            $('.menu__logo').addClass('logo-small');
            $('.menu__menu .nav-link').addClass('spacing-link');
        } else {
            $('.menu').removeClass('nav-bg ');
            $('.menu__logo').removeClass('logo-small ');
            $('.menu__menu .nav-link').removeClass('spacing-link');
        }
    });
});