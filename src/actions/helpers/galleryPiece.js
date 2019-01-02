export const addGalleryPiece = (galleryPiece) => ({
    type: 'ADD_GALLERY_PIECE',
    galleryPiece,
});

export const editGalleryPiece = (galleryPieceId, updates) => ({
    type: 'EDIT_GALLERY_PIECE',
    galleryPieceId,
    updates,
});
