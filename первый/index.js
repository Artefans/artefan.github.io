$(function() {
  // fixed header
   let header = $('#header');
   let intro = $('#intro');
   let introH;
   let scrollPos = $(window).scrollTop();

   $(window).on("scroll load resize", function(){
     introH = intro.innerHeight();
     scrollPos = $(this).scrollTop()
    checkScroll(scrollPos, introH)
   });
   function checkScroll(){
     if (scrollPos>introH) {
          header.addClass('fixed');
     }else {
          header.removeClass('fixed');
     }
   }

// smooth scroll
   $('[data-scroll]').on("click", function(event){
     event.preventDefault();

     let blockId = $(this).data('scroll');
     let blockOffset = $(blockId).offset().top;
     nav.removeClass('show');
     $("html, body").animate({
       scrollTop: blockOffset - 70
     }, 700);
   });
   // navToggle
   let nav = $('#nav');
   $("#navToggle").on('click', function(event){
     event.preventDefault();
     nav.toggleClass('show');

   });
   //reviewsSlider
   let slider = $('#reviewsSlider');

   slider.slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     fade: true,
     arrows: false
   });
});
