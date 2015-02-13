describe("triangleType", function() {

  it("determines if it is a triangle or not", function() {
    expect(triangleType("2, 2, 8")).to.equal("not a triangle");
  });

  it("if all sides are the same it returns equilateral", function() {
    expect(triangleType("2, 2, 2")).to.equal("an equilateral triangle")
  });

  it("if no sides are the same and it is a triangle return scalene", function() {
    expect(triangleType("20.3, 25.3, 14.8")).to.equal("a scalene triangle")
  });

  it("if only 2 sides are the same and it is a triangle return isosceles", function() {
    expect(triangleType("2, 2, 3")).to.equal("an isosceles triangle")
  });

});
