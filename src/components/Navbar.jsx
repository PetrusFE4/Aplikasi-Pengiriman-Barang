import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Navbar.css";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Header() {
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg pt-0 pb-0" id="nav-dekstop">
        <div class="container-fluid p-xl-2 ps-xl-5 pe-xl-5 fw-semibold">
          <div class="judul d-flex align-items-center">
            <a class="navbar-brand" href="#home">
              <h1 className="fw-bold">
                Febe<span>Express</span>
              </h1>
            </a>
          </div>
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            aria-expanded="false"
          >
            <span onClick={openNav}>
              <AiOutlineMenuUnfold size={35} color="#000" />
            </span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mx-lg-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#order">
                  Order
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#tracking">
                  Tracking
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#information">
                  Information
                </a>
              </li>
            </ul>
            <button className="login">Login</button>
          </div>
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        <div className="close-menu">
          <div className="close-button" onClick={closeNav}>
            <IoIosCloseCircle size={35} style={{ color: "#01aa5a" }} />
          </div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#order">Order</a>
          </li>
          <li>
            <a href="#tracking">Tracking</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#informasi">Informasi</a>
          </li>
        </ul>
        <div className="button-login">
          <button className="login">Login</button>
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
