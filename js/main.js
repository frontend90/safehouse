/*********  burger ************/
let user_icon = document.querySelector('.burger');

user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');

});

document.documentElement.addEventListener("click", function (e) {

  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }

});

/************  убираем классы, если burger не активен  ************************/
document.documentElement.addEventListener("click", function () {

  let burgerActive = document.querySelector('.burger.active');

  if (burgerActive) {
    $('.logo').addClass('active');
    $('body').addClass('active');
  }
  if (!burgerActive) {
    $('.logo').removeClass('active');
    $('body').removeClass('active');
  }

});

/*************       header  slick       ************/
$('.header-main__slider').slick({
  prevArrow: $('.header-main__slider-arrow_left'),
  nextArrow: $('.header-main__slider-arrow_right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
  speed: 2000
});

/****************   изменение html   *****************************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  var headerMenu = $('.main-menu');/* куда закинуть блок */
  var callBack = $('.user-connect__link_callback');/* блок, который закинуть */
  var headerPhone = $('.user-connect__link_phone');/* блок, который закинуть */

  if (w < 781) {
    callBack.appendTo(headerMenu);
  } else {
    callBack.appendTo($('.user-connect'));
  }

  if (w < 401) {
    $('.user-connect__link_callback').before(headerPhone);
  } else {
    headerPhone.prependTo($('.user-connect'));
  }

}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/************  mixitup (services)   ************/
var mixer = mixitup('.services__wrap', {
  load: {
    filter: '.finishing'
  }
});

/*************       about  slick       ************/
$('.about__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: true,
  speed: 1000,
  cssEase: 'linear',
  fade: true
});

/**************   fancybox   *********************/
$('a#popup').fancybox({
  "hideOnContentClick": true,
  animationEffect: "circular"
});

/*************  price    ***************/
$(function () {
  $("#price__tabs").tabs();
});












