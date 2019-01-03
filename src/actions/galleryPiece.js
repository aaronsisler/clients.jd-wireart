import database from 'Firebase/firebase';
import { addGalleryPiece, editGalleryPiece } from 'Actions/helpers/galleryPiece';

export const startAddGalleryPiece = (galleryPiece) => (dispatch) =>
    database.ref(`gallery`).push(galleryPiece).then((ref) =>
        dispatch(addGalleryPiece({
            galleryPieceId: ref.key,
            ...galleryPiece
        })));

export const startAddGalleryPieceImage = (galleryPieceId, imageURL) => (dispatch) =>
    database.ref(`gallery/${galleryPieceId}`)
        .update({imageURL})
        .then(() =>
            dispatch(editGalleryPiece(galleryPieceId, { imageURL }))
        );


export const startEditGalleryPiece = (galleryPieceId, updates) => (dispatch) =>
    database.ref(`gallery/${galleryPieceId}`)
        .update(updates)
        .then(() => {
            dispatch(editGalleryPiece(galleryPieceId, updates));
        });

export const startSetPaypalFlag = (galleryPieceId) => (dispatch) =>
    database.ref(`gallery/${galleryPieceId}`)
        .update({ isPaypalActive: true })
        .then(() =>
            dispatch(editGalleryPiece(galleryPieceId, { isPaypalActive: true }))
        );
