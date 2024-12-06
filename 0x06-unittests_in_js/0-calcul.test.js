const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('First Number Rounding', function () {
   it('should round the first number and sum', function () {
      assert.equal(calculateNumber(1.6, 1), 3);
   });
});

describe('Second Number Rounding', function () {
   it('should round the second number and sum', function () {
      assert.equal(calculateNumber(1, 1.6), 3);
   });
});

describe('Both Numbers Rounding', function () {
   it('should round both numbers and sum', function () {
      assert.equal(calculateNumber(1.6, 1.7), 4);
   });
});

describe('Sum', function () {
   it('should return 2 when 1 + 1', function () {
      assert.equal(calculateNumber(1, 1), 2);
   });

   it('should round given numbers to the nearest integer', function () {
      assert.equal(calculateNumber(1.5, 1.5), 4);  // Corrected expected value
   });

   it('sum of whole numbers with floating point numbers should return whole number', function () {
      assert.equal(calculateNumber(1, 1.5), 3);
   });
});
