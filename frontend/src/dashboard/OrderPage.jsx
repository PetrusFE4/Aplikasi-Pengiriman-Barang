import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/OrderPageDashboard.css";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import { ButtonStyle, WhiteButton } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function OrderPage() {
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderCity, setSenderCity] = useState("");
  const [senderPostCode, setSenderPostCode] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [recipientCity, setRecipientCity] = useState("");
  const [recipientPostCode, setRecipientPostCode] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [itemName, setItemName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [weight, setWeight] = useState("");
  const [itemValue, setItemValue] = useState("");
  // const [shippingRates, setShippingRates] = useState(0);
  // const [insurance, setInsurance] = useState(0);
  // const [totalFee, setTotalFee] = useState(0);
  const [shippingCost, setShippingCost] = useState(null);

  const handleDelete = () => {
    setSenderName("");
    setSenderPhone("");
    setSenderCity("");
    setSenderPostCode("");
    setSenderAddress("");
    setRecipientName("");
    setRecipientPhone("");
    setRecipientCity("");
    setRecipientPostCode("");
    setRecipientAddress("");
    setItemName("");
    setServiceType("");
    setWeight("");
    setItemValue("");
    // setShippingRates(0);
    // setInsurance(0);
    // setTotalFee(0);
  };

  const handleSenderName = (e) => {
    setSenderName(e.target.value);
  };
  const handleSenderPhone = (e) => {
    setSenderPhone(e.target.value);
  };
  const handleSenderCity = (e) => {
    setSenderCity(e.target.value);
  };
  const handleSenderPostCode = (e) => {
    setSenderPostCode(e.target.value);
  };
  const handleSenderAddress = (e) => {
    setSenderAddress(e.target.value);
  };
  const handleRecipientName = (e) => {
    setRecipientName(e.target.value);
  };
  const handleRecipientPhone = (e) => {
    setRecipientPhone(e.target.value);
  };
  const handleRecipientCity = (e) => {
    setRecipientCity(e.target.value);
  };
  const handleRecipientPostCode = (e) => {
    setRecipientPostCode(e.target.value);
  };
  const handleRecipientAddress = (e) => {
    setRecipientAddress(e.target.value);
  };
  const handleItemName = (e) => {
    setItemName(e.target.value);
  };
  const handleServiceType = (e) => {
    setServiceType(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleItemValue = (e) => {
    setItemValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      nama_pengirim: senderName,
      kota_asal: senderCity,
      kodePos_pengirim: senderPostCode,
      nama_penerima: recipientName,
      kota_penerima: recipientCity,
      kodePos_penerima: recipientPostCode,
      namaBarang: itemName,
      berat: weight,
    };

  try {
    const response = await axios.post('/api/auth/order', orderData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    setShippingCost(response.data.cost);
    Swal.fire('Success', 'Order created successfully', 'success');
    handleDelete();
  } catch (error) {
    Swal.fire('Error', 'There was an error creating the order', 'error');
  }
  setShippingCost("");
};

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form submitted with data:", {
  //     senderName,
  //     senderPhone,
  //     senderCity,
  //     senderPostCode,
  //     senderAddress,
  //     recipientName,
  //     recipientPhone,
  //     recipientCity,
  //     recipientPostCode,
  //     recipientAddress,
  //     itemName,
  //     serviceType,
  //     weight,
  //     itemValue,
  //   });
  // };

  return (
    <>
      <NavbarDashboard />
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/dashboard" style={{ color: " #4caf50" }}>
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/dashboard/order" style={{ color: "grey" }}>
                Order
              </Link>
            </li>
          </ol>
        </nav>
        <div
          className="card shadow"
          style={{ border: "none", borderRadius: "0", marginBottom: "30px" }}
        >
          <p
            className="title-tracking"
            style={{ fontSize: "24px", fontWeight: "bold", margin: "20px" }}
          >
            Order
          </p>
          <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <div className="row mb-3">
              <div className="col-md-6">
                <h5 className="mb-3">Sender Information</h5>
                <hr />
                <div className="form-group">
                  <label htmlFor="senderName" className="form-label">
                    Name<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="senderName"
                    value={senderName}
                    onChange={handleSenderName}
                    placeholder="Enter name"
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="senderPhone" className="form-label">
                    Phone Number<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="senderPhone"
                    value={senderPhone}
                    onChange={handleSenderPhone}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="senderCity" className="form-label">
                    Origin City<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="senderCity"
                    value={senderCity}
                    onChange={handleSenderCity}
                    placeholder="Enter origin city"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="senderPostCode" className="form-label">
                    Post Code<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="senderPostCode"
                    value={senderPostCode}
                    onChange={handleSenderPostCode}
                    placeholder="Enter post code"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="senderAddress" className="form-label">
                    Address<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <textarea
                    className="form-control"
                    id="senderAddress"
                    rows="3"
                    value={senderAddress}
                    onChange={handleSenderAddress}
                    placeholder="Enter address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h5 className="mb-3">Recipient Information</h5>
                <hr />
                <div className="form-group">
                  <label htmlFor="recipientName" className="form-label">
                    Name<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipientName"
                    value={recipientName}
                    onChange={handleRecipientName}
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipientPhone" className="form-label">
                    Phone Number<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="recipientPhone"
                    value={recipientPhone}
                    onChange={handleRecipientPhone}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipientCity" className="form-label">
                    Destination City<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipientCity"
                    value={recipientCity}
                    onChange={handleRecipientCity}
                    placeholder="Enter destination city"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipientPostCode" className="form-label">
                    Post Code<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipientPostCode"
                    value={recipientPostCode}
                    onChange={handleRecipientPostCode}
                    placeholder="Enter post code"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipientAddress" className="form-label">
                    Address<span className="text-danger">*</span>{" "}
                    <span className="text-muted"></span>
                  </label>
                  <textarea
                    className="form-control"
                    id="recipientAddress"
                    rows="3"
                    value={recipientAddress}
                    onChange={handleRecipientAddress}
                    placeholder="Enter address"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <h5 className="mb-3">Package Information</h5>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="itemName" className="form-label">
                        Item Name <span className="text-danger">*</span>{" "}
                        <span className="text-muted"></span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="itemName"
                        value={itemName}
                        onChange={handleItemName}
                        placeholder="Enter item name"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="serviceType" className="form-label">
                        Service Type <span className="text-danger">*</span>{" "}
                        <span className="text-muted"></span>
                      </label>
                      <select
                        className="form-control"
                        id="serviceType"
                        value={serviceType}
                        onChange={handleServiceType}
                      >
                        <option value="Choose Service">Choose Service</option>
                        <option value="Document">Document Delivery</option>
                        <option value="Goods">Good Delivery</option>
                        <option value="Cargo">Cargo Delivery (*min 0,5 Kilogram)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="weight" className="form-label">
                        Weight <span className="text-danger">*</span>{" "}
                        <span className="text-muted"></span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="weight"
                        value={weight}
                        onChange={handleWeight}
                        placeholder="min 0.5 kg"
                        min="0.5"
                        step="0.1"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="itemValue" className="form-label">
                        Item value <span className="text-danger">*</span>{" "}
                        <span className="text-muted"></span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="itemValue"
                        value={itemValue}
                        onChange={handleItemValue}
                        placeholder="Enter item value"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <hr />
                <div className="row mb-2">
                  <div className="col-md-4">
                    <p className="mb-0">Shipping Rates:</p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-0">Rp {shippingCost}</p>
                  </div>
                </div>
                {/* <div className="row mb-2">
                  <div className="col-md-4">
                    <p className="mb-0">Insurance:</p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-0">Rp 0</p>
                  </div>
                </div> */}
                <div className="row mb-2">
                  <div className="col-md-4">
                    <p className="mb-0 fw-bold">Total Fee:</p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-0 fw-bold">Rp 0</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-left text-center">
                    <WhiteButton
                      type="button"
                      className="btn-delete"
                      style={{ marginBottom: "30px", marginTop: "30px" }}
                      onClick={handleDelete}
                    >
                      Delete
                    </WhiteButton>
                    <ButtonStyle
                      type="submit"
                      className="btn-order"
                      style={{ marginBottom: "30px", marginTop: "30px" }}
                    >
                      Order
                    </ButtonStyle>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
