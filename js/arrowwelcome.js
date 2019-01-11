//Script for homepage arrow behavior

//-Variables for arrow bouncing function-
//bounce Speed (ms)
var speed = 250;
//bounce height (px)
var height = 10;
//amount of bounces
var amount = 2;
//initial delay before bounce (ms)
var idelay = 1000;
//Time between each bounce (ms)
var delay = 10000;

$(document).ready(function() {
  //Bounce the arrow
  setTimeout(function(){
    setInterval(function(){
      $("#arrowdown").effect("bounce", {times:amount, distance:height}, speed);
    },delay);
  },idelay);
  //Scroll past the welcome page
  $("#arrowdown").click(function(){
    //Second argument is the scroll speed in ms
    //Scroll down the height of particles-js (welcome screen) minus the navigation bar
    $("html, body").animate({scrollTop: $("#particles-js").height()-$("#navbar").height()}, 1000);
  });
});
