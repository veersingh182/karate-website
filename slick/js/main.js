$(document).ready(function(){
    var resWidth = screen.width;
    
    if (resWidth < 800) {
      $('.responsive').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      });
    }
    else if (resWidth < 1200) {
      $('.responsive').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
      });
    }
    
    else{
      $('.responsive').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        });
      }
});

$(document).ready(function(){
  $('.one-review-only').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
});
