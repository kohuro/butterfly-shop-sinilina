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
  if ($('.js-slider-wrap').length) {
    $('.js-slider-wrap').each(function () {
      $(this).find('.js-slider').slick({
        prevArrow: $(this).find('.js-btn-prev'),
        nextArrow: $(this).find('.js-btn-next'),
      });
    });
  }


  // Фильтр для каталога
  $('.filter-link').on('click', function (e) {

    e.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.works-item').show();
      return;
    }

    $('.works-item').each(function () {

      let itemType = $(this).data('type');

      if (linkType === itemType) {
        $(this).show();
        return;
      }

      $(this).hide();
    })
  })


  // Подгрузка бабочек ajax
  $('.js-btn-catalog').on('click', function () {

    let button = $(this);
    button.text('. . .');

    // $.ajax({
    //   type: 'POST',
    //   url: '/json/reviews.json',
    //   data: 'count=4',
    //   success: function(response){
    //     let html = createHtml(response);
    //     addToHtml(html);
    //     button.text('Еще отзывы');
    //   },
    //   error: function(){}
    // });

    // function addToHtml(string) {
    //   $('.js-reviews-list').append(string);
    // }

    // function createHtml(data) {
    //   let dataArray = data.reviews;
    //   let htmlString = '';

    //   dataArray.forEach(function(item){
    //     htmlString = htmlString + `<div class="reviews-item">
    //       <div class="review-card">
    //         <div class="review-card-photo">
    //           <img src="${item.imageUrl}" alt="${item.imageAlt}" class="review-card-ava">
    //         </div>
    //         <div class="review-card-content">
    //           <span class="review-card-name">${item.name}</span>
    //           <blockquote class="review-card-quote">
    //             “${item.text}”
    //           </blockquote>
    //         </div>
    //       </div>
    //     </div>`;
    //   });

    //   return htmlString;
    // }


    $.ajax({
      type: 'POST',
      url: '/json/catalog.json',
      data: 'count=2',
      success: function (response) {
        let html = createHtml(response);
        addToHtml(html);
        button.text('Больше бабочек')
      },
      error: function () {

      }
    });

    function addToHtml(string) {
      $('.js-catalog-list').append(string);
    };

    function createHtml(data) {
      let dataArray = data.works;
      let htmlString = '';

      dataArray.forEach(function(item){
        htmlString = htmlString + `<li class="works-item" data-type="${item.dataType}">
        <figure class="works-figure">
          <img src="${item.imageUrl}" alt="${item.imageAlt}" class="works-img">
          <figcaption class="works-desc">${item.descr}</figcaption>
        </figure>
      </li>`;
      });

      return htmlString;
    }

  });



});
