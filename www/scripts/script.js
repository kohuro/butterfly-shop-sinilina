$(document).ready(function () {

  // Выпадающее меню
  $('.js-burger').on('click', function () {

    $('.js-main-nav').toggleClass('main-nav-open');
  });


  // Табы для контактов
  $('.tabs-link').on('click', function (e) {

    e.preventDefault();

    let index = $(this).index('.tabs-link');

    $('.tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');
  })


  // Аккордеоны для FAQ
  let prevBtn;
  $('.js-accordeon-btn').on('click', function () {

    if (prevBtn === $(this)[0]) {

      $(this).next().slideToggle();
      let iconClass = $(this).find('.js-faq-icon').attr('class');

      if (iconClass == 'faq-icon js-faq-icon open') {

        $(this).find('.js-faq-icon').removeClass('open');
        return
      }

      $(this).find('.js-faq-icon').addClass('open');
      return;
    }

    $('.js-accordeon-btn').next().slideUp();
    $('.js-accordeon-btn').find('.js-faq-icon').removeClass('open');
    $(this).next().slideDown();
    $(this).find('.js-faq-icon').addClass('open');

    prevBtn = $(this)[0];
  })


  // Слайдер отзывов
  if ( $('.js-slider-wrap').length ) {
    $('.js-slider-wrap').each(function() {
      $(this).find('.js-slider').slick({
        prevArrow: $(this).find('.js-btn-prev'),
        nextArrow: $(this).find('.js-btn-next'),
      });
    });
  }


  // Фильтр для каталога
  $('.filter-link').on('click', function(e){

    e.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.works-item').show();
      return;
    }

    $('.works-item').each(function(){

      let itemType = $(this).data('type');

      if (linkType === itemType) {
        $(this).show();
        return;
      }

      $(this).hide();
    })
  })

});
