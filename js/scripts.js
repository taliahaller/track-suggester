$(document).ready(function() {

  $("button#takeQuiz").click(function() {
    $("form").show();
  });

  $("#trackForm").submit(function(event) {
    var answer = document.getElementById('question').value;
    var answer_2 = document.getElementById('question-2').value;
    var answer_3 = document.getElementById('question-3').value;
    var answer_4 = document.getElementById('question-4').value;
    var answer_5 = document.getElementById('question-5').value;
    var userInput = answer + answer_2 + answer_3 + answer_4 + answer_5;

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
