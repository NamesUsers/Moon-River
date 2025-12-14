$(function(){
    $('.hero__btn').on('click', function(){
        if($(this).hasClass('hero__btn--active') === false){
            $('.hero__btn').removeClass('hero__btn--active')
            $(this).addClass('hero__btn--active')
        }
    })
    const swiper = new Swiper('.socials__slider', {
      loop:true,
        pagination: {
          el: '.swiper-pagination',
          spaceBetween:17,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 50,
        freeMode: true,
        freeModeMomentum: false,
        slidesPerView: 1,
        breakpoints: {
          1100: {
              slidesPerView: 3
          },
          800: {
              slidesPerView: 2
          },
          },
    });
    $('.header__burger , .menu__burger').on('click', function(e){
      e.preventDefault()
      if($('.hero__menu').hasClass('hero__menu--active')){
        $('.hero__menu').removeClass('hero__menu--active')
        $('.hero').removeClass('hero--active')
        $('.header').removeClass('header--active')
        $('.hero__btn').removeClass('hero__btn--menu')
        $('.hero__menu').addClass('hero__menu--animation')
      } else{
        $('.hero__menu').addClass('hero__menu--active')
        $('.hero').addClass('hero--active')
        $('.header').addClass('header--active')
        $('.hero__btn').addClass('hero__btn--menu')
        $('.hero__menu').removeClass('hero__menu--animation')
      }
    })

})