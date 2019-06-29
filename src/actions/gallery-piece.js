import database from "../firebase";
import { addGalleryPiece, editGalleryPiece } from "./helpers/gallery-piece";

export const startAddGalleryPiece = galleryPiece => async dispatch => {
  try {
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
  } catch (error) {
    throw error;
  }
};

export const startAddGalleryPieceImage = (
  galleryPieceId,
  imageSrc
) => async dispatch => {
  try {
    await database.ref(`gallery/${galleryPieceId}`).update({ imageSrc });
  } catch (error) {
    throw error;
  }

  return dispatch(editGalleryPiece(galleryPieceId, { imageSrc }));
};

export const startEditGalleryPiece = (
  galleryPieceId,
  updates
) => async dispatch => {
  try {
    await database.ref(`gallery/${galleryPieceId}`).update(updates);
  } catch (error) {
    throw error;
  }

  return dispatch(editGalleryPiece(galleryPieceId, updates));
};

export const startSetPaymentActiveFlag = galleryPieceId => async dispatch => {
  try {
    await database
      .ref(`gallery/${galleryPieceId}`)
      .update({ isPaymentActive: true });

    return dispatch(
      editGalleryPiece(galleryPieceId, { isPaymentActive: true })
    );
  } catch (error) {
    throw error;
  }
};

export const startMarkAsSold = galleryPieceId => async dispatch => {
  try {
    await database
      .ref(`gallery/${galleryPieceId}`)
      .update({ isPaymentActive: false, isSold: true });

    return dispatch(
      editGalleryPiece(galleryPieceId, {
        isPaymentActive: false,
        isSold: true
      })
    );
  } catch (error) {
    throw error;
  }
};
