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
  $("#header2").text("Website.");
  $("#link2").attr("href", "/");
  setInterval(function(){
    switch (n){
      //Switch between 5 different header
      case 0:
        $("#header2").fadeOut(speed,function() {
          $(this).text("Website.").fadeIn(speed);
          $("#link2").attr("href", "/");
          });
        n=1;
        break;
      case 1:
        $("#header2").fadeOut(speed,function() {
          $(this).text("Project Gallery.").fadeIn(speed);
          $("#link2").attr("href", "projects");
        });
        n=2;
        break;
      case 2:
        $("#header2").fadeOut(speed,function() {
          $(this).text("Thinkspace.").fadeIn(speed);
          $("#link2").attr("href", "projects/future");
        });
        n=3;
        break;
      case 3:
        $("#header2").fadeOut(speed,function() {
          $(this).text("Contact page.").fadeIn(speed);
          $("#link2").attr("href", "contact");
        });
        n=4;
        break;
      /*case 4:
        $("#header2").fadeOut(speed,function() {
          $(this).text("text5").fadeIn(speed);
        });
        n=0;
        break;*/
      }
    },texttime);
    });
