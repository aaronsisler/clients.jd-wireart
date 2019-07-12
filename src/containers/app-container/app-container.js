import React from "react";
import ScrollToTop from "../scroll-to-top-container";
import Navbar from "../../components/navbar";
import NotificationContainer from "../notification-container";
import AppRouter from "../../router";
import Footer from "../../components/footer";
import "./app-container.scss";

class AppContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTop>
          <Navbar companyName={"JD WireArt Studio"} />
          <NotificationContainer />
          <AppRouter />
          <Footer />
        </ScrollToTop>
      </React.Fragment>
    );
  }
}

export default AppContainer;
