import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorizedRoute from "./authorized-route";

import {
  AboutUsPage,
  AddGalleryPiecePage,
  ContactPage,
  EditGalleryPiecePage,
  GalleryPage,
  GalleryPieceNotFoundPage,
  GalleryPiecePage,
  LandingPage,
  LoggedOutPage,
  LogoutPage,
  ManagerPage,
  PaymentConfirmationPage,
  NotFoundPage,
  PrivacyPolicyPage
} from "../pages";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact={true} />
    <Route path="/about" component={AboutUsPage} exact={true} />
    <Route
      path="/confirm_payment"
      component={PaymentConfirmationPage}
      exact={true}
    />
    <Route path="/contact" component={ContactPage} exact={true} />
    <Route path="/contact/:galleryPieceId" component={ContactPage} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/gallery_piece/:id" component={GalleryPiecePage} />
    <Route
      path="/gallery_piece_not_found"
      component={GalleryPieceNotFoundPage}
    />
    <Route path="/logged_out" component={LoggedOutPage} exact={true} />
    <Route path="/logout" component={LogoutPage} exact={true} />
    <AuthorizedRoute path="/manager" component={ManagerPage} exact={true} />
    <AuthorizedRoute path="/manager/:id" component={ManagerPage} />
    <AuthorizedRoute
      path="/manager_add"
      component={AddGalleryPiecePage}
      exact={true}
    />
    <AuthorizedRoute
      path="/manager_edit/:id"
      component={EditGalleryPiecePage}
    />
    <Route path="/privacy" component={PrivacyPolicyPage} exact={true} />
    <Route path="/not_found" component={NotFoundPage} exact={true} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
