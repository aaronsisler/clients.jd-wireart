import database from "../firebase";
import { setGallery } from "./helpers/gallery";
import {
  setGalleryCategoryFilter,
  setGalleryTextFilter
} from "./helpers/gallery-filter";

export const startSetGallery = () => async dispatch => {
  try {
    const gallery = [];
    const snapshot = await database.ref(`gallery`).once("value");

    snapshot.forEach(childSnapshot => {
      gallery.push({
        galleryPieceId: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    return dispatch(setGallery(gallery));
  } catch (error) {
    throw error;
  }
};

export const startSetGalleryCategoryFilter = category => dispatch =>
  dispatch(setGalleryCategoryFilter(category));

export const startSetGalleryTextFilter = text => dispatch =>
  dispatch(setGalleryTextFilter(text));
