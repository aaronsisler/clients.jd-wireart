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

export const start1AddGalleryPiece = galleryPiece => dispatch =>
  database
    .ref(`gallery`)
    .push({ ...galleryPiece, isPaymentActive: false, isSold: false })
    .then(ref =>
      dispatch(
        addGalleryPiece({
          galleryPieceId: ref.key,
          ...galleryPiece,
          isPaymentActive: false,
          isSold: false
        })
      )
    );

export const startAddGalleryPieceImage = (
  galleryPieceId,
  imageSrc
) => dispatch =>
  database
    .ref(`gallery/${galleryPieceId}`)
    .update({ imageSrc })
    .then(() => dispatch(editGalleryPiece(galleryPieceId, { imageSrc })));

export const startEditGalleryPiece = (galleryPieceId, updates) => dispatch =>
  database
    .ref(`gallery/${galleryPieceId}`)
    .update(updates)
    .then(() => dispatch(editGalleryPiece(galleryPieceId, updates)));

export const startSetPaymentActiveFlag = galleryPieceId => dispatch =>
  database
    .ref(`gallery/${galleryPieceId}`)
    .update({ isPaymentActive: true })
    .then(() =>
      dispatch(editGalleryPiece(galleryPieceId, { isPaymentActive: true }))
    );

export const startMarkAsSold = galleryPieceId => dispatch =>
  database
    .ref(`gallery/${galleryPieceId}`)
    .update({ isPaymentActive: false, isSold: true })
    .then(() =>
      dispatch(
        editGalleryPiece(galleryPieceId, {
          isPaymentActive: false,
          isSold: true
        })
      )
    );
