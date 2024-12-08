const expect = require('chai').expect;
const calculateNumber = require('./2-calcul.js');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
      expect(calculateNumber('SUM', 2, 3), 5).to.equal(5);
    });
});
  describe('SUBTRACT', function () {
    it('should return the difference of two rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 5.5, 3.2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 8.4, 2.1)).to.equal(4);
      expect(calculateNumber('DIVIDE', 9.5, 2.5)).to.equal(3.3333333333333335);
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });

    it('should return "Error" when dividing by zero', function () {
      expect(calculateNumber('DIVIDE', 10, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 7.2, 0)).to.equal('Error');
    });
  });
});
