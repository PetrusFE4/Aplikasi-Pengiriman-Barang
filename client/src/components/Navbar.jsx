import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/Navbar.css";
import { ButtonStyle } from "./StyledComponents";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const header = document.querySelector(".header");
    console.log("Scroll event detected", window.scrollY);
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        flushSync(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
        sessionStorage.removeItem('scrollTo');
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, location]);

  const handleClick = (e, path, hash) => {
    e.preventDefault();
    sessionStorage.setItem('scrollTo', hash);
    navigate(path);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg pt-1 pb-1 pt-sm-0 pb-sm-0" id="nav-dekstop">
        <div className="container-fluid p-xl-2 ps-xl-5 pe-xl-5 fw-semibold">
          <div className="judul d-flex align-items-center">
            <Link className="navbar-brand" to="/" onClick={(e) => handleClick(e, '/', 'home')}>
              <h1 className="fw-bold">
                Febe<span>Express</span>
              </h1>
            </Link>
          </div>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-expanded="false"
            onClick={openNav}
          >
            <AiOutlineMenuUnfold size={35} color="#000" />
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={(e) => handleClick(e, '/', 'home')}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/#order"
                  id="navbarDropdownHome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Order
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownHome">
                  <li>
                    <Link className="dropdown-item" to="/cek-ongkir">
                      Shipping Rates
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/order">
                      Order
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tracking">
                  Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={(e) => handleClick(e, '/', 'service-section')}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/#information"
                  id="navbarDropdownHome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Information
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownHome">
                  <li>
                    <Link className="dropdown-item" to="/support-center">
                      Support Center
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/call-center">
                      Call Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onClick={(e) => handleClick(e, '/', 'faq-section')}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="nav-button-container">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ButtonStyle className="nav-button">Login</ButtonStyle>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        <div className="close-menu">
          <div className="close-button" onClick={closeNav}>
            <IoIosCloseCircle size={35} style={{ color: "#01aa5a" }} />
          </div>
        </div>
        <ul className="navbar-nav ps-4 fw-semibold">
          <li className="nav-item">
            <Link className="nav-link" to="/#home">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/#ordermenu"
              data-bs-toggle="collapse"
            >
              Order
            </Link>
            <ul className="nav collapse" id="ordermenu" data-bs-parent="menu">
              <li className="nav-item">
                <Link className="nav-link" to="/cek-ongkir">
                  Shipping Rates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  Order
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tracking">
              Tracking
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#service">
              Service
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/#informationmenu"
              data-bs-toggle="collapse"
            >
              Information
            </Link>
            <ul
              className="nav collapse"
              id="informationmenu"
              data-bs-parent="menu"
            >
              <li className="nav-item">
                <Link className="nav-link" to="/support-center">
                  Support Center
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/call-center">
                  Call Center
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="d-flex justify-content-center mt-4 ">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <ButtonStyle
              className="sidenav-button"
              style={{ padding: "8px 100px" }}
            >
              Login
            </ButtonStyle>
          </Link>
        </div>
      </div>
    </header>
  );
}

function openNav() {
  if (window.innerWidth >= 400) {
    document.getElementById("mySidenav").style.width = "60%";
  } else {
    document.getElementById("mySidenav").style.width = "100%";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

export default Header;
