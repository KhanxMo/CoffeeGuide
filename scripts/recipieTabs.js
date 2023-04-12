$(document).ready(function() {

    // When nav link is clicked
    $('.recipe-nav li').click(function() {

        // Pull variables 
        var tab_id = $(this).find('a').attr('href');
        var recipe_container = $(this).closest('.recipe-container');

        // Remove previous actives 
        recipe_container.find('.recipe-nav li').removeClass('active');
        recipe_container.find('.recipe-tab').removeClass('active');

        // Add current actives
        $(this).addClass('active');
        $(tab_id).addClass('active');

        // Close
        return false;
    });
  });
  