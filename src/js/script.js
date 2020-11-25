$(document).ready(() => {
  $('.carousel-promo').slick({
    speed: 1000,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/promo_left.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/promo_right.png"/></button>',
    dots: true,
  });

  $('.carousel-solutions').slick({
    speed: 1000,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/solutions_left.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/solutions_right.png"/></button>',
    dots: true,
  });

  //довить событие на любой элемент, чтобы листать слайдер
  // $('div').on('click', function () {
  //   $('slider').slick('slickNext');
  // });
});
