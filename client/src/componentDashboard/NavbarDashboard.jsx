import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/NavbarDashboard.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from 'react';

function NavbarDashboard() {
  const [userType, setUserType] = useState('customer'); // Ganti dengan logika autentikasi yang sesuai

  return (
    <header className="header">
      <nav
        className="navbar  pt-1 pb-1 pt-sm-0 pb-sm-0"
        id="nav-dekstop"
      >
        <div className="container-fluid p-xl-2 ps-xl-5 pe-xl-5 fw-semibold">
          <div className="judul d-flex align-items-center">
            <a
              className="navbar-brand"
              href="/"
            >
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

        </div>
      </nav>

      <div id="mySidenav" className="sidenav">

        <ul className="navbar-nav ps-4 fw-semibold">
          {userType === 'customer' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Profil
                </Link>
              </li>
            </>
          )}
          {userType === 'admin' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Setting
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Logout
            </Link>
          </li>
         
          

        </ul>
        <div className="d-flex justify-content-center mt-4 ">
        </div>
      </div>
    </header>
  );
}

let isSidebarOpen = false;

function openNav() {
  const sidebar = document.getElementById('mySidenav');
  if (!isSidebarOpen) {
    if (window.innerWidth >= 400 && window.innerWidth <= 810) {
      sidebar.style.width = "60%";
    } else if (window.innerWidth >= 810) {
      sidebar.style.width = "300px";
    } else {
      sidebar.style.width = "100%";
    }
    isSidebarOpen = true;
  } else {
    sidebar.style.width = "0";
    isSidebarOpen = false;
  }
}

function closeNav() {
  const sidebar = document.getElementById("mySidenav");
  if (sidebar) {
    sidebar.style.width = "0";
  }
}

document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('mySidenav');
  const navbarToggle = document.querySelector('.navbar-toggler');
  if (sidebar && event.target !== sidebar && !sidebar.contains(event.target) && navbarToggle && event.target !== navbarToggle && !navbarToggle.contains(event.target)) {
    closeNav();
  }
});

export default NavbarDashboard;
