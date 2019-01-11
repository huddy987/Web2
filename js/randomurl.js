//URL randomizer
function randomurl(...urls){
  //Pick from a list of URLs
  var urlchoice = (Math.floor(Math.random() * (arguments.length)));
  //Convert the randomly chosen url to a string
  var urlstring = String(arguments[urlchoice]);
  //Comment for debugging: console.log(urlchoice);
  $(document).ready(function(){
    $("#randclick").attr("href", urlstring);
    //When the URL is clicked, redirect to the random URL.
    $("#randclick").click(function(){
        $("#randclick").attr("href", urlstring);
        //When the URL is clicked, generate a new random URL
        urlchoice = (Math.floor(Math.random() * (arguments.length)));
        urlstring = String(arguments[urlchoice]);
      });
    });
  }
