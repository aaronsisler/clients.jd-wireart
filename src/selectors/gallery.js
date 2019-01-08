// Get filtered gallery pieces by name
export default (gallery, { text = '' }) => gallery
    .filter((galleryPiece) => galleryPiece.name.toLowerCase().includes(text.toLowerCase()))
