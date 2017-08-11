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
      $(".designTrack").show();
      $(".logicTrack").hide();
      }
      else {
        $(".dev").empty().prepend(backEnd);
        $(".logicTrack").show();
        $(".designTrack").hide();
      }
    }

    $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'largeBackEnd') {
        $('#cSharp').show();
        $('#ruby').hide();
      }

    });

    $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'smallBackEnd') {
        $('#ruby').show();
        $('#cSharp').hide();

      }
    });

    $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'smallFackEnd' || 'largeFrontEnd') {
        $('#css').show();

      }
    });

    $(".name").text(nameInput);
    $("#quote").show();

    event.preventDefault();
  });
});
