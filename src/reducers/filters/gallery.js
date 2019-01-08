const galleryFilterReducerDefaultState =
{
    text: '',
};

const galleryFilterReducer = (state = galleryFilterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_GALLERY_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

export default galleryFilterReducer;
