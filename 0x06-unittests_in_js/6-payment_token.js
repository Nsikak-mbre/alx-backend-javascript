async function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    }
    // Otherwise, the function does nothing
}

module.exports = getPaymentTokenFromAPI;
