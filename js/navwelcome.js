// --Scripts for navigation bar behavior at the homepage

$(document).ready(function() {

  //Change navbar opacity of navbar upon scrolling
  var scroll_pos = 0;
  //Scroll up and down 1 pixel to make sure the navbar is the correct color on load.
  window.scrollBy(0,1);
  window.scrollBy(0,-1);
  $(document).scroll(function() {
      //Variable contains amount of pixels hidden from view above.
      scroll_pos = $(this).scrollTop();
      //Gradually increase the opacity until the initial window has been passed.
      scroll_color = 'rgba(0, 0, 0, ' + (scroll_pos)/$(window).height(); + ')';
      if(scroll_pos == 0) {
        $("#navbar").css({'background-color': 'rgba(0, 0, 0, 0)'});
        $(".dropdowncontent").css({'background-color': 'rgba(0, 0, 0, 0)'});
      }
      else {
        $("#navbar").css({'background-color': scroll_color});
        $(".dropdowncontent").css({'background-color': scroll_color});
        //Comment for debugging fade speed
        /*console.log(scroll_pos);
        console.log(scroll_color);*/
     }
  });
  //Scroll past the welcome page
  $("#hudsonintro").click(function(){
    //Second argument is the scroll speed in ms
    $("html").animate({scrollTop: $(window).height()}, 1000);
  });
});
