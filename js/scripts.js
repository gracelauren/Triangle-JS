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
