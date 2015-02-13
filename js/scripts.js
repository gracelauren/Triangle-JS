var triangleType = function(sideLengths) {
  var sideLengths = sideLengths.split("").sort();
  var longestSide = parseInt(sideLengths.pop());
  var sideA = parseInt(sideLengths.pop());
  var sideB = parseInt(sideLengths.pop());
  var result = "";

  if (longestSide < (sideA + sideB)) {
    result = "a scalene triangle";
    if (sideA === longestSide && longestSide === sideB) {
      result = "an equilateral triangle";
    } else if (sideA === longestSide || longestSide === sideB || sideB === sideA){
      result = "an isosceles triangle";
    }
  } else {
    result = "not a triangle";
  }

  return result;
};

$(document).ready(function() {
  $('#styleMe input[type="text"]').blur(function(){
    if($(this).val().length > 0){
      $(this).addClass('white');
    } else {
      $(this).removeClass('white');
    }
  });

  $("form#sides").submit(function(event) {
    var sideA = $("input#sideA").val();
    var sideB = $("input#sideB").val();
    var sideC = $("input#sideC").val();
    var sideLengths = sideA + sideB + sideC;
    var result = triangleType(sideLengths);
    $(".type").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
