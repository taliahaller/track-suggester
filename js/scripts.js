$(document).ready(function() {
        // get references to select list and display text box

    $("button#take").click(function() {
      $("form").show();
    });

    var sel = document.getElementById('scripts');
    var el = document.getElementById('display');

    var sel_2 = document.getElementById('scripts-2');
    var el_2 = document.getElementById('display-2');

    var sel_3 = document.getElementById('scripts-3');
    var el_3 = document.getElementById('display-3');


    function getSelectedOption(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

    // assign onclick handlers to the buttons
    document.getElementById('showVal').onclick = function () {
        el.value = sel.value;
    }
    document.getElementById('showVal-2').onclick = function () {
        el_2.value = sel_2.value;
    }
    document.getElementById('showVal-3').onclick = function () {
        el_3.value = sel_3.value;
    }



  // alert(userInput);
  $("#demoForm").submit(function(event) {

    var nel = el.value = sel.value;
    var nel_2 = el_2.value = sel_2.value;
    var nel_3 = el_3.value = sel_3.value;

      var userInput = nel + nel_2 + nel_3;

    event.preventDefault();
    if (userInput === PFU) {
      $('#css_track').show();
  // } else if (userInput === PBI) {
  //         $('#ruby_track').show();
  //       } else  (userInput === PBD) {
  //         $('#csharp_track').show();
    }
  });
});
// immediate function to preserve global namespace





//
// var SF = function(S, F)) {
//   return S + F;
// }
//
// var SB = function(S, B)) {
//   return S + B;
// }
//
// var PF = function(P, F)) {
//   return P + F;
// }
//
// var PB = function(P, B)) {
//   return P + B;
// }
//
// var SF = 1
// var SB = 11
// var PF = 11
// var PB = 21
//
//
//
//
// $(document).ready(function() {
//   $("form#track_test").submit(function(event) {
//     event.preventDefault();
//
//     var  = $("value#S").val());
//     var P = $("value#P").val());
//
//     var F = $("values#F").val());
//     var B = $("values#B").val());
//
//     var userInput = text
//
//
//
//
//     // if(userInput > 10) {
//     //   $('#css_track').show();
//     // } else if (userInput < 20 && height > 10) {
//     //   $('#ruby_track').show();
//     // } else  (userInput < 20) {
//     //   $('#csharp_track').show();
//     // }
//
//   });
// });
