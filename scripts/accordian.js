$(document).ready(function() {

    // When h3 header is clicked 
    $('.accordion-header').click(function() {

        // Make the header active 
        $(this).toggleClass('active');

        // Slide teh next content div 
        $(this).next('.accordion-content').slideToggle();
        
    });
  });
  