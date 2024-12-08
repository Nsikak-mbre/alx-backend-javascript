const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return the sum of two rounded numbers", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6); // 1 + 5 = 6
  });

  it("should handle cases where both numbers round down", function () {
    assert.strictEqual(calculateNumber(1.2, 2.3), 3); // 1 + 2 = 3
  });

  it("should handle cases where both numbers round up", function () {
    assert.strictEqual(calculateNumber(1.5, 2.7), 5); // 2 + 3 = 5
  });

  it("should handle cases where one number rounds up and the other rounds down", function () {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4); // 1 + 3 = 4
  });

  it("should handle negative numbers", function () {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4); // -1 + -3 = -4
  });

  it("should handle zero values", function () {
    assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0
  });

  it("should handle cases where one number is zero", function () {
    assert.strictEqual(calculateNumber(0, 4.6), 5); // 0 + 5 = 5
  });
});
