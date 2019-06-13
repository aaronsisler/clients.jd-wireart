// Import the mock data
const { gallery } = require("./mock-data");

// Import the action
const { addGalleryPiece } = require("./add-gallery-piece");

// Loop over the data
const [galleryPiece1, galleryPiece2] = gallery;

// Fire the action per data piece
addGalleryPiece(galleryPiece1);
addGalleryPiece(galleryPiece2);
