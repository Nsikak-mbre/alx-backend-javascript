const Utils = require("./utils");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = Utilis.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
};

module.exports = sendPaymentRequestToApi;
