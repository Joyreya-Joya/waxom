$(function(){
    //  Sticky Header  
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      
      if(scrolling > 200){
          $('.navbar').addClass('bg');
      }
      else {
           $('.navbar').removeClass('bg');
      }
      });  
    //  Sticky Header  

  //banner slider
  $('.ban_slider').slick({
        
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });


  //banner slider

    // ====Counter Up=======//
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //===== venobox======//

    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    // ====slick slider=====//
    // $('.slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     Infinite: true ,
    //     arrows: true,
    //     prevArrow:'<i class="fa fa-arrow-circle-left prev"></i>',
    //     nextArrow:'<i class="fa fa-arrow-circle-right next"></i>',

    //   });
      $('.slider').slick({
        
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<i class="fa fa-arrow-circle-left prev"></i>',
        nextArrow:'<i class="fa fa-arrow-circle-right next"></i>',
        responsive: [
          
            {  
                breakpoint: 1120,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                
                }
              },
            {  
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        
        ]
      });

      //mixitup
      var mixer = mixitup('.mix_item');
      //mixitup
      
});