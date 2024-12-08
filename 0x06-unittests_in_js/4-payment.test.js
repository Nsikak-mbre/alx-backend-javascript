const sinon = require('sinon');
const { expect } = require('chai');
const Utilis = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi function used', function () {
  let calculateNumberSpy;

  beforeEach(function () {
    calculateNumberSpy = sinon.stub(Utilis, 'calculateNumber');
    calculateNumberSpy.returns(10);

    // spy on console
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, totalAmount, and totalShipping', function () {
    // call the function under test
    sendPaymentRequestToApi(100, 20);

    // check if the stub was called once
    expect(calculateNumberSpy.calledOnce).to.be.true;
    // check if the stub was called with the right arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    // check if the console.log was called with the right arguments
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
