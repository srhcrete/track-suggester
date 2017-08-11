$(document).ready(function() {
  $("form#frontEndBackEnd").submit(function(event) {
    var nameInput = $("input#name").val();
    // var designVsLogic = $("select#designVsLogic").val();
    // var userExperience = $("select#userExperience").val();
    // var backEnd = "Back End";
    // var frontEnd = "Front End";

    $(".name").text(nameInput);
    $("#quote").show();


    // if (designVsLogic) {
    //   if (designVsLogic === 'Design' && userExperience === 'I want to make the internet beautiful, fun, and easy to use!') {
    //
    //     $("#name").text(nameInput);
    //     $('#dev').empty().prepend(frontEnd);
    //     $('.quote').show();
    //   }
    //   else (){
    //
    //     $('#name').text(nameInput);
    //     $('#dev').empty().prepend(backEnd);
    //     $('.quote').show();
    //   }
    // }
    event.preventDefault();
  });
});
