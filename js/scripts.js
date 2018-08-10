$(document).ready(function() {

    $("button#take").click(function() {
      $("form").show();
    });

    // var sel = document.getElementById('scripts');
    // var sel_2 = document.getElementById('scripts-2');
    // var sel_3 = document.getElementById('scripts-3');

    // alert(userInput);
  $("#trackForm").submit(function(event) {

    var sel = document.getElementById('scripts').value;
    var sel_2 = document.getElementById('scripts-2').value;
    var sel_3 = document.getElementById('scripts-3').value;
    var sel_4 = document.getElementById('scripts-4').value;
    var sel_5 = document.getElementById('scripts-5').value;

    console.log(sel);
    console.log(sel_2);
    console.log(sel_3);
    var userInput = sel + sel_2 + sel_3 + sel_4 + sel_5;
      // alert(userInput);

    event.preventDefault();
    if (userInput === "PFUsb" || userInput === "SFUsb") {
      $('#ruby_track').hide();
      $('#csharp_track').hide();
      $('#css_track').show();
    } else if (userInput === "PBIsb") {
      $('#css_track').hide();
      $('#csharp_track').hide();
      $('#ruby_track').show();
    } else if (userInput === "PBDsb") {
      $('#css_track').hide();
      $('#ruby_track').hide();
      $('#csharp_track').show();
    }

  });
});
