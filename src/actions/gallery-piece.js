import database from "../firebase";
import { addGalleryPiece, editGalleryPiece } from "./helpers/gallery-piece";

export const startAddGalleryPiece = galleryPiece => dispatch =>
  database
    .ref(`gallery`)
    .push(galleryPiece)
    .then(ref =>
      dispatch(
        addGalleryPiece({
          galleryPieceId: ref.key,
          ...galleryPiece
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
    .then(() => {
      dispatch(editGalleryPiece(galleryPieceId, updates));
    });

export const startSetPaypalActiveFlag = galleryPieceId => dispatch =>
  database
    .ref(`gallery/${galleryPieceId}`)
    .update({ isPaypalActive: true })
    .then(() =>
      dispatch(editGalleryPiece(galleryPieceId, { isPaypalActive: true }))
    );

export const startSetSoldFlag = galleryPieceId => dispatch =>
  database
    .ref(`gallery/${galleryPieceId}`)
    .update({ isPaypalActive: false, isSold: true })
    .then(() =>
      dispatch(
        editGalleryPiece(galleryPieceId, {
          isPaypalActive: false,
          isSold: true
        })
      )
    );
