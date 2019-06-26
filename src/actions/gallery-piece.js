import database from "../firebase";
import { addGalleryPiece, editGalleryPiece } from "./helpers/gallery-piece";

export const startAddGalleryPiece = galleryPiece => async dispatch => {
  const { key: galleryPieceId } = await database
    .ref(`gallery`)
    .push({ ...galleryPiece, isPaymentActive: false, isSold: false });

  dispatch(
    addGalleryPiece({
      galleryPieceId,
      ...galleryPiece,
      isPaymentActive: false,
      isSold: false
    })
  );

  return galleryPieceId;
};

export const startAddGalleryPieceImage = (
  galleryPieceId,
  imageSrc
) => async dispatch => {
  await database.ref(`gallery/${galleryPieceId}`).update({ imageSrc });

  return dispatch(editGalleryPiece(galleryPieceId, { imageSrc }));
};

export const startEditGalleryPiece = (
  galleryPieceId,
  updates
) => async dispatch => {
  await database.ref(`gallery/${galleryPieceId}`).update(updates);

  return dispatch(editGalleryPiece(galleryPieceId, updates));
};

export const startSetPaymentActiveFlag = galleryPieceId => async dispatch => {
  await database
    .ref(`gallery/${galleryPieceId}`)
    .update({ isPaymentActive: true });

  return dispatch(editGalleryPiece(galleryPieceId, { isPaymentActive: true }));
};

export const startMarkAsSold = galleryPieceId => async dispatch => {
  await database
    .ref(`gallery/${galleryPieceId}`)
    .update({ isPaymentActive: false, isSold: true });

  return dispatch(
    editGalleryPiece(galleryPieceId, {
      isPaymentActive: false,
      isSold: true
    })
  );
};
