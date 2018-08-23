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
  //Scroll past the welcome page TODO: animate this.
  $("#arrowdown").click(function(){
    window.scrollTo(0, $(window).height());
  });
});