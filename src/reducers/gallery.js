const galleryReducerDefaultState = [];

const galleryReducer = (state = galleryReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_GALLERY":
      return action.gallery;
    case "ADD_GALLERY_PIECE":
      return [...state, action.galleryPiece];
    case "EDIT_GALLERY_PIECE":
      return state.map(galleryPiece => {
        if (galleryPiece.galleryPieceId === action.galleryPieceId) {
          return {
            ...galleryPiece,
            ...action.updates
          };
        }
        return galleryPiece;
      });
    default:
      return state;
  }
};

export default galleryReducer;
