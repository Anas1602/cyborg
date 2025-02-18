import logo from "../../assets/images/logo.png";

import NavItem, { NavItemDropDown } from "../NavItem/NavItem";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
          aria-controls="mainmenu"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#hero" className="nav-link">
                Home
              </a>
            </li>
            <NavItem>
              <a href="#features" className="nav-link">
                Browse
              </a>
            </NavItem>
            <NavItemDropDown>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false">
                Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item">
                    Fortnite
                  </a>
                </li>
                <li>
                  <a href="#next" className="dropdown-item">
                    Call of Duty
                  </a>
                </li>
              </ul>
            </NavItemDropDown>
            <NavItem>
              <a href="#faq" className="nav-link">
                Streams
              </a>
            </NavItem>
            <NavItem>
              <a href="./index-ar.html" className="nav-link">
                Profile
              </a>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
