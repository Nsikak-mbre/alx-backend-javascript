const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberHook;

  beforeEach(() => {
    calculateNumberHook = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberHook.restore();
  });

  it('should log the correct total for 100 and 20', function () {
    // call the function under test
    sendPaymentRequestToApi(100, 20);

    // veruiy the log output
    expect(console.log.calledWith('The total is: 120')).to.be.true;

    // verify the log was called once
    expect(console.log.calledOnce).to.be.true;
  });

  it('should log the correct total for 10 and 10', function () {
    // call the function under test
    sendPaymentRequestToApi(10, 10);

    // veruiy the log output
    expect(console.log.calledWith('The total is: 20')).to.be.true;

    // verify the log was called once
    expect(console.log.calledOnce).to.be.true;
  });
});
