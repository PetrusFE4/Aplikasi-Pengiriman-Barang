import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageFormRegister from "../assets/img/image-form-register.png";
import ImageFormLogin from "../assets/img/image-form-login.png";
import ImageMenuOrder from "../assets/img/image-menu-order.png";
import ImageFormOrder from "../assets/img/image-form-order.png";
import ImageButtonOrder from "../assets/img/image-button-order.png";
import "../assets/css/SupportCenter.css";

const SupportCenter = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <p className="title-support">Help Support</p>
        <div className="row">
          <div className="col-md-12">
            <h5 className="mb-4 support-text"> Langkah-Langkah Melakukan Pemesanan</h5>
            <ol>
              <li className="mb-4">
              Sign up on the website when you don't have an account. 
                <br />
                <img src={ImageFormRegister} className="img-fluid mb-3" alt="Registrasi" />
              </li>
              <li className="mb-4">
              Log in to the website with your account.
                <br />
                <img src={ImageFormLogin} className="img-fluid mb-3" alt="Login" />
              </li>
              <li className="mb-4">
              Go to the order page.
                <br />
                <img src={ImageMenuOrder} className="img-fluid mb-3" alt="Menu Order" />
              </li>
              <li className="mb-4">
              Enter the required information.
                <br />
                <img src={ImageFormOrder} className="img-fluid mb-3" alt="Form Order" />
              </li>
              <li className="mb-4">
              Click the "Order" button to start the delivery  service with our website.
                <br />
                <img src={ImageButtonOrder} className="img-fluid" alt="Button Order" />
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportCenter;
