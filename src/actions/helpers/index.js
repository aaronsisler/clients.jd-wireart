import { clearAuth, setAuth } from "./auth";
import { setGallery } from "./gallery";
import {
  setGalleryCategoryFilter,
  setGalleryTextFilter
} from "./gallery-filter";
import { addGalleryPiece, editGalleryPiece } from "./gallery-piece";
import {
  clearNotification,
  setErrorNotification,
  setSuccessNotification
} from "./notification";
import { clearUser, setUser } from "./user";

export {
  addGalleryPiece,
  clearAuth,
  clearNotification,
  clearUser,
  editGalleryPiece,
  setAuth,
  setErrorNotification,
  setGallery,
  setGalleryCategoryFilter,
  setGalleryTextFilter,
  setSuccessNotification,
  setUser
};
