const galleryReducerDefaultState = [];

const galleryReducer = (state = galleryReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_GALLERY':
            return action.gallery;
        default:
            return state;
    }
};

export default galleryReducer;

