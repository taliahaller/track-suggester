$(document).ready(function() {
  $("form#track_test").submit(function(event) {
    event.preventDefault();
    // var height = parseInt($("input#add1").val());

    if(userInput > 10) {
      $('#css_track').show();
    } else if (userInput < 20 && height > 10) {
      $('#ruby_track').show();
    } else  (userInput < 20) {
      $('#csharp_track').show();
    }
  });
});
