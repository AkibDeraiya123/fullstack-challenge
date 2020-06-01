const { API_URL } = require('../config');

// get producst list
export function getProducts() {
    return fetch(`${API_URL}/product/active`)
        .then(response => response.json())
        .then(data => { return data });
}


// create a new order
export function createOrder(requestOptions) {
    return fetch(`${API_URL}/order`, requestOptions)
        .then(response => response.json())
        .then(data => { return data });
}


