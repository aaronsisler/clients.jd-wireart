const { database } = require("./firebase");

const addGalleryPiece = galleryPiece =>
  database.ref(`gallery`).push(galleryPiece);

exports.addGalleryPiece = addGalleryPiece;
