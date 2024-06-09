import React, { useState } from 'react';
import "../assets/css/TrackingPage.css";
import { ButtonStyle } from "../components/StyledComponents";
// import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ImgTracking from "../assets/img/image-tracking.png";


const TrackingPage = () => {
    return(
        <div>
            <Navbar />
            {/* Isi Konten */}
            <div class="container mt-4">
                <div class="row">
                    <div class="col md-6">
                        <img src={ImgTracking} alt="Images"></img>
                    </div>
                    <div class="col md-6" style={{margin: '30px 20px'}}>
                        <p class="tracking-title">Track Your Order</p>
                        <input class="form-control tracking-form-control" type="text" placeholder="Enter your order ID"></input><br/>
                        <div class="d-flex justify-content-center">
                            <ButtonStyle style={{ borderRadius: '50px' }}>Track</ButtonStyle>
                        </div>

                        <div class="shadow-sm result-tracking">
                            <p><b>ID Order</b></p>
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
}

export default TrackingPage;