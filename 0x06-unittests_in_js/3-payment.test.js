const sinon = require("sinon");
const { should, expect } = require("chai");
const Utilis = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi function used", function () {
  let calculateNumberSpy;

  beforeEach(function () {
    calculateNumberSpy.sinon.spy(Utilis, "calculateNumber");
  });
  afterEach(function () {
    calculateNumberSpy.restore();
  });
  it("should call Utilis.calculatorNumber with SUM, totalAmount, and totalShipping", function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith("SUM", 100, 200)).to.be.true;
  });
});
