import database from "../firebase";
import { setGallery } from "./helpers/gallery";
import {
  setGalleryCategoryFilter,
  setGalleryTextFilter
} from "./helpers/gallery-filter";

export const startSetGallery = () => dispatch =>
  database
    .ref(`gallery`)
    .once("value")
    .then(snapshot => {
      const gallery = [];
      snapshot.forEach(childSnapshot => {
        gallery.push({
          galleryPieceId: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      return dispatch(setGallery(gallery));
    });

export const startSetGalleryCategoryFilter = category => dispatch =>
  dispatch(setGalleryCategoryFilter(category));

export const startSetGalleryTextFilter = text => dispatch =>
  dispatch(setGalleryTextFilter(text));
