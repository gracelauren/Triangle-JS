var triangleType = function(sideLengths) {
  var sideLengths = sideLengths.split("").sort();
  var longestSide = parseInt(sideLengths.pop());
  var sideA = parseInt(sideLengths.pop());
  var sideB = parseInt(sideLengths.pop());
  var result = "";

  if (longestSide < (sideA + sideB)) {
    result = "it is a triangle";
  } else {
    result = "not a triangle";
  }

  return result;
};
