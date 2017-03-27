$(document).ready(function(){
  answers = []
  $("#form1").submit(function(event) {
    event.preventDefault();
    var fav = $("#fav").val();
    var fav2 = $("#fav2").val();
    var fav3 = $("#fav3").val();

    answers.push(fav, fav2, fav3);
    if (answers.length >=6) {
      output = [answers[3], answers[5], answers[1]];
      $("#1").text(output[0]);
      $("#2").text(output[1]);
      $("#3").text(output[2]);
    }

    console.log(answers);
  });

});
