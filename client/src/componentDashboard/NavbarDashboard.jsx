import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/NavbarDashboard.css";
import { AiOutlineMenuUnfold, AiOutlineTruck } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoPersonCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";

function NavbarDashboard() {
  const [userType, setUserType] = useState("admin");
  return (
    <header className="header">
      <nav className="navbar  pt-1 pb-1 pt-sm-0 pb-sm-0" id="nav-dekstop">
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
        </div>
      </nav>

      <div id="mySidenav" className="sidenavDashboard">
        <ul className="navbar-nav ps-4 fw-semibold">
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2" to="/dashboard">
              <FaHome size={25} color={"#01aa5a"} />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2" to="/dashboard/myprofile">
              <IoPersonCircleOutline size={25} color={"#01aa5a"} />
              Profil
            </Link>
          </li>
          {userType === "customer" && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/tracking"
                >
                  <AiOutlineTruck size={25} color={"#01aa5a"} />
                  Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex gap-2" to="/dashboard/order">
                  <CiBoxes size={25} color={"#01aa5a"} />
                  Order
                </Link>
              </li>
            </>
          )}
          {userType === "admin" && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/user-list"
                >
                  <FaUsers size={25} color={"#01aa5a"} />
                  User List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/order-list"
                >
                  <CiBoxes size={25} color={"#01aa5a"} />
                  Order List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2"
                  to="/dashboard/add-admin"
                >
                  <LuUserPlus size={25} color={"#01aa5a"} />
                  Add Admin
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2" to="/dashboard/settings">
              <MdOutlineSettings size={25} color={"#01aa5a"} />
              Setting
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2" to="/dashboard">
              <IoLogOutOutline size={25} color={"#01aa5a"} />
              Logout
            </Link>
          </li>
        </ul>
        <div className="d-flex justify-content-center mt-4 "></div>
      </div>
    </header>
  );
}

let isSidebarOpen = false;

function openNav() {
  const sidebar = document.getElementById("mySidenav");
  if (!isSidebarOpen) {
    if (window.innerWidth >= 400 && window.innerWidth <= 810) {
      sidebar.style.width = "60%";
    } else if (window.innerWidth >= 810) {
      sidebar.style.width = "200px";
    } else {
      sidebar.style.width = "100%";
    }
    isSidebarOpen = true;
  } else {
    sidebar.style.width = "0";
    isSidebarOpen = false;
  }
}

document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("mySidenav");
  const navbarToggle = document.querySelector(".navbar-toggler");
  if (
    sidebar &&
    event.target !== sidebar &&
    !sidebar.contains(event.target) &&
    navbarToggle &&
    event.target !== navbarToggle &&
    !navbarToggle.contains(event.target)
  ) {
    sidebar.style.width = "0";
    isSidebarOpen = false;
  }
});

export default NavbarDashboard;
