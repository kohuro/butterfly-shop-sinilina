$(document).ready(function() {

  // Выпадающее меню
  $('.js-burger').on('click', function(){

    $('.js-main-nav').toggleClass('main-nav-open');
  });

  // Аккордеоны для FAQ
  let prevBtn;
  $('.js-accordeon-btn').on('click', function(){

    if (prevBtn === $(this)[0]) {
      $(this).next().slideToggle();
      return;
    }

    $('.js-accordeon-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = $(this)[0];
  })


 });
