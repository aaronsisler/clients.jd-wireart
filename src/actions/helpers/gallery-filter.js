export const setGalleryCategoryFilter = (category = "ALL") => ({
  type: "SET_GALLERY_CATEGORY_FILTER",
  category
});

export const setGalleryTextFilter = (text = "") => ({
  type: "SET_GALLERY_TEXT_FILTER",
  text
});
