$('.responsive').slick({
    dots: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    // autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object

      
    ]
  });
  const aboutUs = document.getElementsById('aboutUs');
  const home = document.getElementsById('home');
  const events = document.getElementsById('events');
  const articles = document.getElementsById('articles');
  const contactUs = document.getElementsById('contactUs');
  aboutUs.addEventListener('click',function(){
      home.classList.remove('active');
  });