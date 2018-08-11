$(document).ready(function() {

  $("button#take").click(function() {
    $("form").show();
  });

  $("#trackForm").submit(function(event) {
    var sel = document.getElementById('scripts').value;
    var sel_2 = document.getElementById('scripts-2').value;
    var sel_3 = document.getElementById('scripts-3').value;
    var sel_4 = document.getElementById('scripts-4').value;
    var sel_5 = document.getElementById('scripts-5').value;
    var userInput = sel + sel_2 + sel_3 + sel_4 + sel_5;

    event.preventDefault();
    if (userInput === "PFIsb" || userInput === "PFUsb" || userInput === "PFUss" || userInput === "PFUbb" || userInput === "SFUsb" || userInput === "SFUss" || userInput === "SFUbb") {
      $('#ruby_track').hide();
      $('#csharp_track').hide();
      $('#css_track').show();
    } else if (userInput === "PBIsb" || userInput === "PBIss" || userInput === "PBIbb" || userInput === "PFIss" || userInput === "PFIbb" || userInput === "PFIbr" || userInput === "PFUbr" || userInput === "SBIsb" || userInput === "SBIss" || userInput === "SBIbb" || userInput === "SFIsb" || userInput === "SFIss" || userInput === "SFIbb" || userInput === "SFUbr") {
      $('#css_track').hide();
      $('#csharp_track').hide();
      $('#ruby_track').show();
    } else if (userInput === "PBDsb" || userInput === "PBDss" || userInput === "PBDbb" || userInput === "PBDbr" || userInput === "PBIbr" || userInput === "SBDsb" || userInput === "SBDss" || userInput === "SBDbb" || userInput === "SBDbr" || userInput === "SBIbr" || userInput === "SFIbr") {
      $('#css_track').hide();
      $('#ruby_track').hide();
      $('#csharp_track').show();
    }
  });
});
