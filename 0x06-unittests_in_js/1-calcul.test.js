const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("should return the sum of two rounded numbers", function () {
      assert.equal(calculateNumber("SUM", 1.4, 2.6), 4);
      assert.equal(calculateNumber("SUM", 1.5, 2.5), 5);
      assert.equal(calculateNumber("SUM", 2, 3), 5);
    });
  });

  describe("SUBTRACT", function () {
    it("should return the difference of two rounded numbers", function () {
      assert.equal(calculateNumber("SUBTRACT", 5.5, 3.2), 3);
      assert.equal(calculateNumber("SUBTRACT", 2.5, 1.5), 1);
      assert.equal(calculateNumber("SUBTRACT", 4, 2), 2);
    });
  });

  describe("DIVIDE", function () {
    it("should return the division of two rounded numbers", function () {
      assert.equal(calculateNumber("DIVIDE", 8.4, 2.1), 4);
      assert.equal(calculateNumber("DIVIDE", 9.5, 2.5), 3.3333333333333335);
      assert.equal(calculateNumber("DIVIDE", 10, 2), 5);
    });

    it('should return "Error" when dividing by zero', function () {
      assert.equal(calculateNumber("DIVIDE", 10, 0.4), "Error");
      assert.equal(calculateNumber("DIVIDE", 7.2, 0), "Error");
    });
  });
});
