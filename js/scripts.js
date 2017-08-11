$(document).ready(function() {
  $("form#frontEndBackEnd").submit(function(event) {
    var nameInput = $("input#name").val();
    var designVsLogic = $("select#designVsLogic").val();
    var userExperience = $("select#userExperience").val();
    var frontEnd = "Front End";
    var backEnd = "Back End";

    if (designVsLogic) {
      if (designVsLogic === "design"){

      $(".dev").empty().prepend(frontEnd);
      }
      else {
        $(".dev").empty().prepend(backEnd);
      }
    }


    $(".name").text(nameInput);
    $("#quote").show();

    event.preventDefault();
  });
});
