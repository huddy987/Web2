//Script to fade in and out the homepage headers

//Counter for switch statement
var n=1;

//Length of time for each header to be displayed (ms)

var texttime=5000;

//Speed of fade in ms
var speed=1000;

//Notice: texttime must be >=speed*2.

$(document).ready(function() {
  //Set an initial header
  $("#header2").text("text1");
  setInterval(function(){
    switch (n){
      //Switch between 5 different header
      case 0:
        $("#header2").fadeOut(speed,function() {
        $(this).text("text1").fadeIn(speed);
        });
        n=1;
        break;
      case 1:
        $("#header2").fadeOut(speed,function() {
          $(this).text("text2").fadeIn(speed);
        });
        n=2;
        break;
      case 2:
        $("#header2").fadeOut(speed,function() {
          $(this).text("text3").fadeIn(speed);
        });
        n=3;
        break;
      case 3:
        $("#header2").fadeOut(speed,function() {
          $(this).text("text4").fadeIn(speed);
        });
        n=4;
        break;
      case 4:
        $("#header2").fadeOut(speed,function() {
          $(this).text("text5").fadeIn(speed);
        });
        n=0;
        break;
      }
    },texttime);
    });
