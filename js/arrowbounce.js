//bounce Speed (ms)
speed = 250;

//bounce height (px)
height = 10;

//amount of bounces
amount = 2;

//initial delay before bounce (ms)
idelay = 1000;

//Time between each bounce (ms)
delay = 10000;


//TODO:Fix the code below so the arrow bounces
$(document).ready(function() {
  setTimeout(function(){
    setInterval(function(){
      $(".arrowdown").effect("bounce", {times:amount, distance:height}, speed);
    },delay);
  },idelay);
});
