// --Scripts for navigation bar behavior at the homepage

$(document).ready(function() {
  var scroll_pos = $(this).scrollTop();
  var scroll_color = 'rgba(0, 0, 0, ' + (scroll_pos)/$(window).height(); + ')';
  $("#navbar").css({'background-color': scroll_color});
  $(".dropdowncontent").css({'background-color': scroll_color});
  $(document).scroll(function() {
      //Variable contains amount of pixels hidden from view above.
      var scroll_pos = $(this).scrollTop();
      //Gradually increase the opacity until the initial window has been passed.
      var scroll_color = 'rgba(0, 0, 0, ' + (scroll_pos)/$(window).height(); + ')';
      $("#navbar").css({'background-color': scroll_color});
      $(".dropdowncontent").css({'background-color': scroll_color});
      //Comment for debugging fade speed
      /*console.log(scroll_pos);
      console.log(scroll_color);*/
  });
  //Scroll past the welcome page
  $("#hudsonintro").click(function(){
    //Second argument is scroll speed in ms
    //Scroll down the height of particles-js (welcome screen) minus the navigation bar
    $("html, body").animate({scrollTop: $("#particles-js").height()-$("#navbar").height()}, 1000);
  });
});
