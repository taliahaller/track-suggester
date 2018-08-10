
var SF = function(S, F)) {
  return S + F;
}

var SB = function(S, B)) {
  return S + B;
}

var PF = function(P, F)) {
  return P + F;
}

var PB = function(P, B)) {
  return P + B;
}

var SF = 1
var SB = 11
var PF = 11
var PB = 21




$(document).ready(function() {
  $("form#track_test").submit(function(event) {
    event.preventDefault();

    var S = $("value#S").val());
    var P = $("value#P").val());

    var F = $("values#F").val());
    var B = $("values#B").val());

    alert()




    // if(userInput > 10) {
    //   $('#css_track').show();
    // } else if (userInput < 20 && height > 10) {
    //   $('#ruby_track').show();
    // } else  (userInput < 20) {
    //   $('#csharp_track').show();
    // }

  });
});
