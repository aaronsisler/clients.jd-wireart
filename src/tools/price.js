export const convertPriceForDatabase = price => parseFloat(price, 10) * 100;

export const convertPriceFromDatabase = price => (price / 100).toString();

export const convertPriceForPayment = price => price / 100;
