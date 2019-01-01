const galleryReducerDefaultState = [];

const galleryReducer = (state = galleryReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_GALLERY':
            return action.gallery;
        case 'SET_PAYPAL_FLAG':
            return state.map((galleryPiece) => {
                if (galleryPiece.galleryPieceId === action.galleryPieceId) {
                    return {
                        ...galleryPiece,
                        paypalFlag: true,
                    }
                }
                return galleryPiece;
            });
        default:
            return state;
    }
};

export default galleryReducer;

