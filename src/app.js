import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from 'Actions/helpers/auth';
import { startClearUser, startSetUser } from 'Actions/user';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from 'Core/LoadingPage';
import { startSetGallery } from 'Actions/gallery';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(async (user) => {
    await store.dispatch(startSetGallery());

    if (user) {
        await store.dispatch(login(user.uid));
        await store.dispatch(startSetUser());
        renderApp();
    } else {
        await store.dispatch(logout());
        await store.dispatch(startClearUser());
        renderApp();
    }
});
