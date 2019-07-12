import { constructGalleryPieceLink } from "../tools/email";
import { convertPriceForPayment } from "../tools/price";

const currency = "USD";

const createItemList = (galleryPieceId, name, price) => ({
  items: [
    {
      currency,
      name: `<a target="_blank" rel="noopener noreferrer" href="${constructGalleryPieceLink(
        galleryPieceId
      )}">${name}</a>`,
      quantity: "1",
      price: convertPriceForPayment(price)
    }
  ]
});

const createTransaction = ({ galleryPieceId, name, price }) => ({
  transactions: [
    {
      amount: {
        currency,
        total: convertPriceForPayment(price)
      },
      item_list: createItemList(galleryPieceId, name, price)
    }
  ]
});

export default createTransaction;
