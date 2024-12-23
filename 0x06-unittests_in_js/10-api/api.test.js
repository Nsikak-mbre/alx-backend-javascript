const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct response body', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle non-existent routes', (done) => {
    request.get(`${API_URL}/nonexistent`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Cart page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return status code 200 when id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message when id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when id is NOT a number', (done) => {
    request.get(`${API_URL}/cart/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct payment methods', (done) => {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const expectedPayment = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPayment);
      done();
    });
  });
});

describe('Login', () => {
  const API_URL = 'http://localhost:7865';

  it('should return welcome message with posted username', (done) => {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: {
        userName: 'Betty'
      }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should handle missing username', (done) => {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: {}
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});