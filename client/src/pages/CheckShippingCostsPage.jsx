import React, { useState } from "react";
import "../assets/css/CheckShippingCostsPage.css";
import { ButtonStyle } from "../components/StyledComponents";
// import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StyledIcon } from "../components/StyledIcon";
import {
  faMapMarkerAlt,
  faMapPin,
  faWeightHanging,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

const CheckShippingCostsPage = () => {
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    service: "",
    weight: "",
  });

  const [submittedValues, setSubmittedValues] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues(formValues);
  };

  return (
    <div>
      <Navbar />
      <div class="container mt-4">
        <p class="title">Check Shipping Cost</p>
        <form onSubmit={handleSubmit}>
          <div class="row g-3">
            {/* Baris pertama */}
            <div class="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faMapMarkerAlt} size="20px" color="black" />{" "}
                From
              </label>
              <input
                type="text"
                class="form-control form-input-shipping-cost"
                placeholder="City"
                name="from"
                value={formValues.from}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faMapPin} size="20px" color="black" /> To
              </label>
              <input
                type="text"
                class="form-control form-input-shipping-cost"
                placeholder="City"
                name="to"
                value={formValues.to}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faBox} size="20px" color="black" /> Service
              </label>
              <select
                class="form-select form-input-shipping-cost"
                name="service"
                value={formValues.service}
                onChange={handleChange}
              >
                <option selected>Choose Service</option>
                <option value="Document Delivery">Document Delivery</option>
                <option value="Goods Delivery">Goods Delivery</option>
                <option value="Cargo Delivery">
                  Cargo Delivery (*min. 10 kg)
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <label className="label-checkshiping">
                <StyledIcon icon={faWeightHanging} size="20px" color="black" />{" "}
                Weight
              </label>
              <div class="input-group mb-3">
                <input
                  type="number"
                  class="form-control form-input-shipping-cost"
                  placeholder="1"
                  name="weight"
                  value={formValues.weight}
                  onChange={handleChange}
                />
                <span class="input-group-text">kg</span>
              </div>
            </div>
          </div>
          <center>
            <ButtonStyle
              style={{
                borderRadius: "50px",
                alignItems: "center",
                marginBottom: "50px",
              }}
              type="submit"
            >
              Lihat Ongkir
            </ButtonStyle>
          </center>
        </form>
        {/* Menampilkan input */}
        {submittedValues && (
          <div class="input-container">
            <table class="tbl-input">
              <tr>
                <td>From</td>
                <td>:</td>
                <td>{submittedValues.from}</td>
              </tr>
              <tr>
                <td>To</td>
                <td>:</td>
                <td>{submittedValues.to}</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>:</td>
                <td>{submittedValues.service}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>:</td>
                <td>{submittedValues.weight} kg</td>
              </tr>
            </table>
          </div>
        )}
        <div class="result-container">
          <table class="table">
            <thead class=" table-secondary">
              <tr>
                <th>Service</th>
                <th>Weight</th>
                <th>Shipping Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Document</td>
                <td>Document</td>
                <td>Rp 10.000,-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckShippingCostsPage;
