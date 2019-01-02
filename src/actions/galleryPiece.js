import database from 'Firebase/firebase';
import { editGalleryPiece } from 'Actions/helpers/galleryPiece';

export const startSetPaypalFlag = (galleryPieceId) => (dispatch) =>
    database.ref(`gallery/${galleryPieceId}`).update({ isPaypalActive: true }).then(() =>
        dispatch(editGalleryPiece(galleryPieceId, { isPaypalActive: true }))
    );

export const startEditGalleryPiece = (galleryPieceId, updates) => (dispatch) =>
    database.ref(`gallery/${galleryPieceId}`).update(updates).then(() => {
        dispatch(editGalleryPiece(galleryPieceId, updates));
    });
