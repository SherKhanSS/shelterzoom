// NAVIGATION (open/close)

$('.nav_open').click(function () {
    $('.header__navigation').addClass('active');
});
$('.nav_close').click(function () {
    $('.header__navigation').removeClass('active');
});

// ORDER (open/close)

$('.order_open-mobile').click(function () {
    $('.order__wrapper').addClass('active-mobile');
});
$('.order_close-mobile').click(function () {
    $('.order__wrapper').removeClass('active-mobile');
});
$('.order_close').click(function () {
    $('.order__wrapper').addClass('close');
    $('.content--order').addClass('active');
});
$('.order_open').click(function () {
    $('.order__wrapper').removeClass('close');
    $('.content--order').removeClass('active');
});


// SIDE-NAV

$('.side-nav__item:last-child').click(function () {
    $('.legal-list').addClass('legal-list--open');
});
$('.side-nav__item:not(:last-child)').click(function () {
    $('.legal-list').removeClass('legal-list--open');
});

$(".side-nav__item").click(function() {
  var index = $(this).parent().children().index(this);
  $('.side-nav__item').removeClass('side-nav__item--active');
  $('.side-nav__item:nth-child(' + (index + 1) + ')').addClass('side-nav__item--active');
});

$(".legal-item").click(function() {
  var index = $(this).parent().children().index(this);
  $('.legal-item').removeClass('legal-item--active');
  $('.legal-item:nth-child(' + (index + 1) + ')').addClass('legal-item--active');
});
