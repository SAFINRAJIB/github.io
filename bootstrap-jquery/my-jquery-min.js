$(document).ready(function() {


  $(function() {
    $('.animate-clip').animatedHeadline({
        animationType: 'clip',
        
        
    });
});



  
  /* this below is magnific popup  */
    $('.img-popup').magnificPopup({
      type:'image',
  
      gallery: {
              enabled: true
            }
    
    });

    /* this below is portfolio controls button ul li tag  */

    $(document).on('click', '.li-button', function(){
       $(this).addClass('active').siblings.removeClass('active');
    });

    /* this below is owl carousel testimonial */
    $('.owl-carousel').owlCarousel({
      margin: 15,
      items :3,
    loop :true,
     
    dots  :true,
    autoplay: true,
    autoplayTimeout:5000,
     autoplaySpeed :1000,
    responsive : {
      0 :{
        items :1
      },
      768 :{
        items :1
      },

      1000:{
        items :2
      },
      1200:{
        items : 3
      }
      
    }


    });

    /* End up  is owl carousel testimonial */

    /* below the water effact jquery plugin code */

    $(".water").ripples();
    /* end up the water effact jquery plugin code */

    $(function() {
      $('.animatedH').animatedHeadline({
          animationType: 'rotate-1'
      });
  })

  });

