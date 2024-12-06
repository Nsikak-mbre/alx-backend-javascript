const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should return 2 when 1 + 1', function () {
        assert.equal(calculateNumber(1, 1), 2);
    });

    it('should round given numbers to the nearest integer', function () {
        assert.equal(calculateNumber(1.5, 1.5), 4);
    });

    it('sum of whole numbers with floating point numbers should return whole number', function () {
        assert.equal(calculateNumber(1, 1.5), 3);
    });

    it('should round the first number and sum', function () {
        assert.equal(calculateNumber(1.6, 1), 3);
    });

    it('should round the second number and sum', function () {
        assert.equal(calculateNumber(1, 1.6), 3);
    });

    it('should round both numbers and sum', function () {
        assert.equal(calculateNumber(1.6, 1.7), 4);
    });
});
