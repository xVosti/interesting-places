$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });

  $('.prev').click(function() {
    $('.slider-for').slick('slickPrev');
  });

  $('.next').click(function() {
    $('.slider-for').slick('slickNext');
  });
});
