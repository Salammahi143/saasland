jQuery(function ($) {
    'use strict';
    $('.logo-slider').owlCarousel({
          loop:true,
          margin:5,
          nav:false,
          dots:false,
          autoplay: true,
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:2
              },
              1000:{
                  items:6
              }
          }
    
      });

 });

 
 