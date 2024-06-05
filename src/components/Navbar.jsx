import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/Navbar.css";
import { ButtonStyle } from "./StyledComponents";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg pt-0 pb-0" id="nav-dekstop">
        <div className="container-fluid p-xl-2 ps-xl-5 pe-xl-5 fw-semibold">
          <div className="judul d-flex align-items-center">
            <a className="navbar-brand" href="#home">
              <h1 className="fw-bold">
                Febe<span>Express</span>
              </h1>
            </a>
          </div>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-expanded="false"
          >
            <span onClick={openNav}>
              <AiOutlineMenuUnfold size={35} color="#000" />
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#order"
                  id="navbarDropdownHome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Order
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownHome"
                >
                  <li>
                    <a className="dropdown-item" href="#cek-ongkir">
                      Cek Ongkir
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#order">
                      Order
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#tracking">
                  Tracking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#information"
                  id="navbarDropdownHome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Information
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownHome"
                >
                  <li>
                    <a className="dropdown-item" href="support-center">
                      Support Center
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="call-center">
                      Call Center
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="faq">
                      FAQ
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ButtonStyle className="login" padding={"7px 40px"}>
              <Link to="/login" class="sign-up-link" style={{textDecoration: 'none', color:'white'}}>
                Login
              </Link>
            </ButtonStyle>
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
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#ordermenu"
              data-bs-toggle="collapse"
            >
              Order
            </a>
            <ul className="nav collapse" id="ordermenu" data-bs-parent="menu">
              <li className="nav-item">
                <a className="nav-link" href="cek-ongkir" aria-current="page">
                  Cek Ongkir
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="order">
                  Order
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tracking">
              Tracking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service">
              Service
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#informationmenu"
              data-bs-toggle="collapse"
            >
              Information
            </a>
            <ul
              className="nav collapse"
              id="informationmenu"
              data-bs-parent="menu"
            >
              <li className="nav-item">
                <a className="nav-link" href="support-center">
                  Support Center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="call-center">
                  Call Center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="faq">
                  FAQ
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="button-login d-flex justify-content-center mt-4">
          <ButtonStyle className="login" padding={"8px 100px"}>
            Login
          </ButtonStyle>
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

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
export default Header;
