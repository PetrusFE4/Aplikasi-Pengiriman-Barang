import React, { useState } from "react";
import "../assets/css/TrackingPage.css";
import { ButtonStyle } from "../components/StyledComponents";
// import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ImgTracking from "../assets/img/image-tracking.png";

const TrackingPage = () => {
  return (
    <div>
      <Navbar />
      {/* Isi Konten */}
      <div className="container mt-4">
        <div className="row">
          <div className="col md-6">
            <img
              className="image-tracking"
              src={ImgTracking}
              alt="Images"
              width={"600px"}
              height={"600px"}
            ></img>
          </div>
          <div className="col md-6" style={{ margin: "30px 20px" }}>
            <p className="tracking-title">Track Your Order</p>
            <input
              className="form-control tracking-form-control"
              type="text"
              placeholder="Enter your order ID"
              required
              autoFocus
            ></input>
            <br />
            <div className="d-flex justify-content-center">
              <ButtonStyle style={{ borderRadius: "50px" }}>Track</ButtonStyle>
            </div>

            <div className="shadow-sm result-tracking">
              <p>
                <b>ID Order</b>
              </p>
              <table>
                <tr>
                  <td>Fullname</td>
                  <td>:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Receipt Number</td>
                  <td>:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>From</td>
                  <td>:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>To</td>
                  <td>:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>:</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackingPage;
