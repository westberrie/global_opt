$(document).ready((()=>{const e=document.querySelector(".header__navigation"),r=document.querySelectorAll(".header__navigation a"),t=document.querySelector(".hamburger"),i=document.querySelector(".checkbox4");function n(e){$(e).validate({rules:{name:{required:!0,minlength:2},phone:"required",email:{required:!0,email:!0}},messages:{name:{required:"Пожалуйста, введите своё имя",minlength:jQuery.validator.format("Введите {0} символа")},phone:"Пожалуйста, введите свой номер телефона",email:{required:"Пожалуйста введите свою почту",email:"Непправельно введен адрес почты"}}})}t.addEventListener("click",(()=>{e.classList.toggle("header__navigation_active")})),r.forEach((r=>{r.addEventListener("click",(()=>{e.classList.toggle("header__navigation_active"),i.checked=!1}))})),$(".reviews__slider").slick({speed:1e3,prevArrow:'<button type="button" class="slick-prev"><img src="icons/arrow_left.png"/></button>',nextArrow:'<button type="button" class="slick-next"><img src="icons/arrow_right.png"/></button>',centerMode:!0,slidesToShow:3,slidesToScroll:1,arrows:!0,waitForAnimate:!1,responsive:[{breakpoint:1430,settings:{centerMode:!1,slidesToShow:1}}]}),n(".prices form"),n(".questions form"),$("input[name=phone]").mask("+7 (999) 999-99-99"),$("form").submit((function(e){e.preventDefault();let r=0,t=$("label.error");for(let e=0;e<t.length;e++)""!=t[e].innerText&&(r+=1);if(0===r)return $.ajax({type:"POST",url:"mailer/smart.php",data:$(this).serialize()}).done((function(){$(this).find("input").val(""),$("form").trigger("reset")})),!1;r=0}))}));