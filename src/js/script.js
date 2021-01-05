$(document).ready(() => {
  const navigation = document.querySelector('.header__navigation'),
    navItem = document.querySelectorAll('.header__navigation a'),
    hamburger = document.querySelector('.hamburger'),
    checkbox = document.querySelector('.checkbox4');

  hamburger.addEventListener('click', () => {
    navigation.classList.toggle('header__navigation_active');
  });

  navItem.forEach(item => {
    item.addEventListener('click', () => {
      navigation.classList.toggle('header__navigation_active');
      checkbox.checked = false;
    });
  });

  $('.reviews__slider').slick({
    speed: 1000,
    prevArrow: `<button type="button" class="slick-prev"><img src="icons/arrow_left.png"/></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="icons/arrow_right.png"/></button>`,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Пожалуйста, введите своё имя',
          minlength: jQuery.validator.format('Введите {0} символа'),
        },
        phone: 'Пожалуйста, введите свой номер телефона',
        email: {
          required: 'Пожалуйста введите свою почту',
          email: 'Непправельно введен адрес почты',
        },
      },
    });
  }

  validateForms('.prices form');
  validateForms('.questions form');

  $('input[name=phone]').mask('+7 (999) 999-99-99');

  $('form').submit(function (e) {
    e.preventDefault();
    let count = 0;
    let a = $('label.error');
    for (let i = 0; i < a.length; i++) {
      if (a[i].innerText != '') {
        count += 1;
      }
    }
    if (count === 0) {
      $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize(),
      }).done(function () {
        $(this).find('input').val('');

        $('form').trigger('reset');
      });
      return false;
    }
    count = 0;
  });
});

//   //добавить событие на любой элемент, чтобы листать слайдер
//   // $('div').on('click', function () {
//   //   $('slider').slick('slickNext');
//   // });
// });
