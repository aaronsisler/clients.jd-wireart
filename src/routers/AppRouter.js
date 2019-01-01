import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'Tools/history';
import ScrollToTop from 'Core/ScrollToTop';
import AboutPage from 'Core/AboutPage'
import ContactPage from 'Core/ContactPage'
import GalleryPage from 'Gallery/GalleryPage'
import GalleryPiecePage from 'Gallery/GalleryPiecePage'
import LandingPage from 'Core/LandingPage';
import ManagerPage from 'Manager/ManagerPage'
import ManagerAddPage from 'Manager/ManagerAddPage'
import ManagerEditPage from 'Manager/ManagerEditPage'
import PrivacyPolicyPage from 'Core/PrivacyPolicyPage'
import NotFoundPage from 'Core/NotFoundPage';
import Footer from 'Core/Footer'

const AppRouter = () => (
    <Router history={history}>
        <ScrollToTop>
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/gallery" component={GalleryPage} />
                <Route path="/gallery_piece/:id" component={GalleryPiecePage} />
                <Route path="/contact_us" component={ContactPage} exact={true} />
                <Route path="/contact_us/:id" component={ContactPage} />
                <Route path="/manager" component={ManagerPage} exact={true} />
                <Route path="/manager/:id" component={ManagerPage} />
                <Route path="/manager_add" component={ManagerAddPage} exact={true} />
                <Route path="/manager_edit/:id" component={ManagerEditPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </ScrollToTop>
    </Router>
);

export default AppRouter;
