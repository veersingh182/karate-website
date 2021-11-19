$(document).ready(function(){
    var resWidth = screen.width;
    
    if (resWidth < 800) {
      // refresh variables
      // Apply variables again
      $('.responsive').slick({
        dots: true,
        infinite: true,
        // speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 3500,
      });
    }
    else if (resWidth < 1200) {
      // refresh variables
      // Apply variables again
      $('.responsive').slick({
        dots: true,
        infinite: true,
        // speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        // autoplaySpeed: 3500,
      });
    }
    
    else{
      $('.responsive').slick({
        dots: true,
        infinite: true,
        // speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        // autoplaySpeed: 3500,
        });
      }
});


$(document).ready(function(){
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay:true,
  });
});
