(function ($) {
    "use strict";
    
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

var pieChartData = {
    datasets: [{
        labels: [],
      data: [75, 25],
      backgroundColor: ['#FF6384', '#FFCE56'],
    }],
  };

  // Get the context of the canvas element
  var ctx = document.getElementById('myPieChart').getContext('2d');

  // Create the pie chart
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: pieChartData,
  });

  console.log("EEEEEEE")

