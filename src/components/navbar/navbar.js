import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  openSideMenu = () => this.setState({ isNavOpen: true });

  closeSideMenu = () => this.setState({ isNavOpen: false });

  render() {
    const isNavOpenClass = this.state.isNavOpen ? "nav-menu__links--open" : "";
    return (
      <nav className="nav-menu">
        <Link to="/" className="nav-menu__brand">
          JD Wire Art Studio
        </Link>
        <div className="nav-menu__toggle">
          {!this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              className="favicon"
              onClick={this.openSideMenu}
            />
          )}
          {this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              className="favicon"
              onClick={this.closeSideMenu}
            />
          )}
        </div>
        <div className={`nav-menu__links ${isNavOpenClass}`}>
          <Link
            to="/gallery"
            className="nav-menu__link"
            onClick={this.closeSideMenu}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="nav-menu__link"
            onClick={this.closeSideMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-menu__link"
            onClick={this.closeSideMenu}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
