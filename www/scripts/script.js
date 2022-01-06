$(document).ready(function() {

  // Выпадающее меню
  $('.js-burger').on('click', function(){

    $('.js-main-nav').toggleClass('main-nav-open');
  });

  // Табы для контактов
    $('.tabs-link').on('click', function(e){

      e.preventDefault();

      let index = $(this).index('.tabs-link');

      $('.tabs-link').removeClass('active');
      $(this).addClass('active');

      $('.contacts-content').removeClass('active');
      $('.contacts-content').eq(index).addClass('active');
    })

  // Аккордеоны для FAQ
  let prevBtn;
    $('.js-accordeon-btn').on('click', function(){

    if (prevBtn === $(this)[0]) {
      $(this).next().slideToggle();
      // $(this).find('.js-faq-icon').css({'background-image': 'url(/images/i-plus.svg)'});
      return;
    }

    $('.js-accordeon-btn').next().slideUp();
    // $('.js-accordeon-btn').find('.js-faq-icon').css({'background-image': 'url(/images/i-plus.svg)'});
    $(this).next().slideDown();
    // $(this).find('.js-faq-icon').css({'background-image': 'url(/images/i-minus.svg)'});

    prevBtn = $(this)[0];
  })

  let openIcon = false;
  $('.js-accordeon-btn').on('click', function(){

    if (openIcon === false) {
      $(this).find('.js-faq-icon').css({'background-image': 'url(/images/i-minus.svg)'});
      openIcon = true;
      return;
    }

    $('.js-accordeon-btn').find('.js-faq-icon').css({'background-image': 'url(/images/i-plus.svg)'});
    openIcon = false;
  })


 });
