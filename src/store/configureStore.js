import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  authReducer,
  galleryFilterReducer,
  galleryReducer,
  notificationReducer,
  userReducer
} from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: combineReducers({
        gallery: galleryFilterReducer
      }),
      gallery: galleryReducer,
      notification: notificationReducer,
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
