$(document).ready(function() {

  $("button#takeQuiz").click(function() {
    $("form").show();
  });

  $("#trackForm").submit(function(event) {
    event.preventDefault();
    var inputQuestions = ['#question', '#question-2', '#question-3', '#question-4', '#question-5'];
    var userInput = [];
    for (var i = 0; i < inputQuestions.length; i++) {
      inputQuestion = $(inputQuestions[i]).val();
      userInput.push(inputQuestion)};
    userInput = userInput.join("");

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
    } //close else if statement
  }); //close "submit" button
}); //close (document).ready
