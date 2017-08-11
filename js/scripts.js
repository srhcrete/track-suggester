$(document).ready(function() {
  $("form#frontEndBackEnd").submit(function(event) {
    var nameInput = $("input#name").val();
    var designVsLogic = $("select#designVsLogic").val();
    var userExperience = $("select#userExperience").val();
    var frontEnd = "front end";
    var backEnd = "back end";


    if (designVsLogic) {
      if (designVsLogic === "design"){

      $(".dev").empty().prepend(frontEnd);
      $(".designTrack").fadeIn();
      $(".logicTrack").hide();
      $(".form").hide();

      }
      else {
        $(".dev").empty().prepend(backEnd);
        $(".logicTrack").fadeIn();
        $(".designTrack").hide();
        $(".form").hide();
      }
    }

    $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'largeBackEnd') {
        $('#cSharp').fadeIn();
        $('#ruby').hide();
        $(".intro").hide();
      }

    });

    $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'smallBackEnd') {
        $('#ruby').fadeIn();
        $('#cSharp').hide();
        $(".intro").hide();

      }
    });

    $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'smallFackEnd' || 'largeFrontEnd') {
        $('#css').fadeIn();
        $(".intro").hide();

      }
    });

    $( "#refresh1" ).click(function() {
    location.reload(true);
    });

    $( "#refresh2" ).click(function() {
    location.reload(true);
    });

    $(".name").text(nameInput);
    $("#quote").fadeIn();

    event.preventDefault();
  });
});
