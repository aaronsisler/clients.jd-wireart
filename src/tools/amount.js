export const convertAmount = (amount, isFromDatabase = true) => {
    if (isFromDatabase) {
        return (amount / 100).toString();
    } else {
        return parseFloat(amount, 10) * 100;
    }
}
