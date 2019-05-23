export const convertPrice = (price, isFromDatabase = true) => {
  if (isFromDatabase) {
    return (price / 100).toString();
  } else {
    return parseFloat(price, 10) * 100;
  }
};

export const convertPriceForPaypal = price => price / 100;
