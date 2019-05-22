import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'Tools/history';
import ScrollToTop from 'Core/ScrollToTop';
import AuthorizedRoute from 'Routers/AuthorizedRoute';

import AboutPage from 'Core/AboutPage'
import ContactPage from 'Core/ContactPage'
import Footer from 'Core/Footer'
import GalleryPage from 'Gallery/GalleryPage'
import GalleryPiecePage from 'GalleryPiece/GalleryPiecePage'
import LandingPage from 'Core/LandingPage';
import LoggedOutPage from 'Auth/LoggedOutPage';
import LogoutPage from 'Auth/LogoutPage';
import ManagerAddPage from 'Manager/ManagerAddPage'
import ManagerEditPage from 'Manager/ManagerEditPage'
import ManagerPage from 'Manager/ManagerPage'
import NotFoundPage from 'Core/NotFoundPage';
import PaymentConfirmationPage from 'Paypal/PaymentConfirmationPage'
import PrivacyPolicyPage from 'Core/PrivacyPolicyPage'

const AppRouter = () => (
    <Router history={history}>
        <ScrollToTop>
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/gallery" component={GalleryPage} />
                <Route path="/gallery_piece/:id" component={GalleryPiecePage} />
                <Route path="/contact_us" component={ContactPage} exact={true} />
                <Route path="/contact_us/:id" component={ContactPage} />
                <Route path='/logged_out' component={LoggedOutPage} exact={true} />
                <Route path="/logout" component={LogoutPage} exact={true} />
                <Route path="/confirm_payment" component={PaymentConfirmationPage} exact={true} />
                <AuthorizedRoute path="/manager" component={ManagerPage} exact={true} />
                <AuthorizedRoute path="/manager/:id" component={ManagerPage} />
                <AuthorizedRoute path="/manager_add" component={ManagerAddPage} exact={true} />
                <AuthorizedRoute path="/manager_edit/:id" component={ManagerEditPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </ScrollToTop>
    </Router>
);

export default AppRouter;
