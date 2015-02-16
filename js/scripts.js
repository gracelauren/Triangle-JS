var triangleType = function(sideLengths) {
  var sideLengths = sideLengths.split(",").sort();
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
    var sideLengths = sideA + "," + sideB + "," + sideC;
    var longestSide = sideLengths.split("").sort().pop();
    var result = triangleType(sideLengths);
    $(".type").text(result);
    $("#result").show();

    if( (parseInt(sideA) === parseInt(longestSide)) && (parseInt(longestSide) === parseInt(sideB))  && (parseInt(sideA) === parseInt(sideB))) {
      $('#ttype').switchClass('triangle icono-cross isosceles scalene','equilateral', "easeInOutQuad");
    } else if(!(parseInt(longestSide) < (parseInt(sideA) + parseInt(sideB)) && parseInt(sideA) < (parseInt(longestSide) + parseInt(sideB))  && parseInt(sideB) < (parseInt(longestSide) + parseInt(sideA)))) {  
      $('#ttype').switchClass('triangle equilateral isosceles scalene','icono-cross', "easeInOutQuad");
    } else if( parseInt(sideA) === parseInt(longestSide) || parseInt(longestSide) === parseInt(sideB) || parseInt(sideB) === parseInt(sideA) ) {
      $('#ttype').switchClass('triangle equilateral scalene icono-cross','isosceles', "easeInOutQuad");
    } else if(parseInt(longestSide) < (parseInt(sideA) + parseInt(sideB))){
      $('#ttype').switchClass('triangle isosceles equilateral icono-cross','scalene', "easeInOutQuad");
    }

    event.preventDefault();
  });

});
