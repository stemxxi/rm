const button = document.querySelector('.navbar-toggler-icon');
const navActive = document.querySelector('.navbar-new-toggler');



button.addEventListener('click', () => {
    button.classList.add('active-none');
    navActive.classList.remove('active-none')
})
navActive.addEventListener('click', () => {
    button.classList.remove('active-none');
    navActive.classList.add('active-none')
})


// SlIDE

// var $st = $('.pagination');
// var $slickEl = $('.center');

// $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//   var i = (currentSlide ? currentSlide : 0) + 1;
//   $st.text(i + ' of ' + slick.slideCount);
// });

// $slickEl.slick({

//   autoplay:true,
//   speed: 2000,
// 	autoplaySpeed: 2000,
//   slidesToShow: 5,
//   focusOnSelect: true,
//   dots: false,
//   infinite: true,
//   responsive: [
//     {
//       breakpoint: 1201,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '50px',
//         slidesToShow: 4
//       }
//     },
//     {
//       breakpoint: 993,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '30px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 769,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '50px',
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 577,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '50px',
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 426,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '90px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 376,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '65px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 340,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//   ]
// });



$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '30px',
    infinite: true,
    autoplaySpeed: 4000,
    // autoplay: true,
    responsive: [
          {
            breakpoint: 1201,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 993,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 577,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 531,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 520,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 476,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 376,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 340,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1
            }
          },
        ]
  });
});