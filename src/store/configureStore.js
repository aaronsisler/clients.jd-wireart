import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from 'Reducers/auth';
import galleryReducer from 'Reducers/gallery';
import galleryFilterReducer from 'Reducers/filters/gallery';
import userReducer from 'Reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            filters: combineReducers({
                gallery: galleryFilterReducer,
            }),
            gallery: galleryReducer,
            user: userReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
