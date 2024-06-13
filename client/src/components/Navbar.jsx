import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/Navbar.css";
import { ButtonStyle } from "./StyledComponents";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import axios from "axios";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleScroll = () => {
    console.log("Scrolling...");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        flushSync(() => {
          const yOffset = -120;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        });
        sessionStorage.removeItem("scrollTo");
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, path, hash) => {
    e.preventDefault();
    sessionStorage.setItem("scrollTo", hash);
    navigate(path);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken) {
          setIsLoggedIn(true);
          setIsAdmin(decodedToken.role === "admin");
        }
      } catch (error) {
        console.error("Token decoding error:", error);
      }
    }
  }, []);

  const handleClickOrder = (e) => {
    const token = localStorage.getItem("token");
    if (!token) {
      e.preventDefault();
      Swal.fire({
        title: "Login to Order!",
        text: "Login now to start ordering! 👋",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#01aa5a",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const decodedToken = jwtDecode(token);
      if (decodedToken.role === "admin") {
        navigate("/dashboard/order-list");
      } else {
        navigate("/dashboard/order");
      }
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data.message); // Menampilkan pesan logout sukses di console
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/";
      } else {
        console.error("Error logging out:", response.data.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setDropdownVisible(false);
    }
  };

  return (
    <header className="header">
      <nav
        className="navbar navbar-expand-lg pt-1 pb-1 pt-sm-0 pb-sm-0"
        id="nav-dekstop"
      >
        <div className="container-fluid p-xl-2 ps-xl-5 pe-xl-5 fw-semibold">
          <div className="judul d-flex align-items-center">
            <a className="navbar-brand" href="/">
              <h1 className="fw-bold">
                Febe<span>Express</span>
              </h1>
            </a>
          </div>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-expanded="false"
            onClick={openNav}
          >
            <AiOutlineMenuUnfold size={35} color="#000" />
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ boxSizing: "border-box" }}
          >
            <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownHome"
                >
                  <li>
                    <Link className="dropdown-item" to="/shipping-rates">
                      Shipping Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={handleClickOrder}
                    >
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
                  onClick={(e) => handleClick(e, "/", "service-section")}
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownHome"
                >
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
                      onClick={(e) => handleClick(e, "/", "faq-section")}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {isLoggedIn && (
              <div
                className="nav-button-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={dropdownRef}
              >
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <ButtonStyle className="nav-button">Dashboard</ButtonStyle>
                </Link>
                {dropdownVisible && (
                  <div className="dropdown-menu-custom">
                    <Link className="dropdown-item" to="/dashboard/myprofile">
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
            {!isLoggedIn && (
              <div className="nav-button-container">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <ButtonStyle className="nav-button">Login</ButtonStyle>
                </Link>
              </div>
            )}
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
              onClick={handleClickOrder}
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
                <Link className="nav-link" href="#" onClick={handleClickOrder}>
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
          <Link
            to={
              isLoggedIn
                ? isAdmin
                  ? "/dashboard/order-list"
                  : "/dashboard/order"
                : "/login"
            }
            style={{ textDecoration: "none" }}
          >
            <ButtonStyle
              className="sidenav-button"
              style={{ padding: "8px 100px" }}
            >
              {isLoggedIn ? "Dashboard" : "Login"}
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
