window.addEventListener('load', function(){
 $('.portfolioPhoto__img-wrapper .row').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1400,
  });
$('#nav-icon2').on('click', function(){
	$(this).toggleClass('open');
$('.header__top-nav').fadeToggle();
});
 $('.slick-prev').html('<img data-slider="1" src="http://localhost:3000/wp-content/themes/massajik/assets/img/svg/arrowLeft.svg">');
 $('.slick-next').html('<img data-slider="1" src="http://localhost:3000/wp-content/themes/massajik/assets/img/svg/arrowright.svg">');
});

