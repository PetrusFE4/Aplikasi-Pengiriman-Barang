import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/OrderPageDashboard.css";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";
import { ButtonStyle, WhiteButton } from "../components/StyledComponents";
import { Link } from "react-router-dom";

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
  const [serviceType, setServiceType] = useState("Cargo");
  const [weight, setWeight] = useState("");
  const [itemValue, setItemValue] = useState("");

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", {
      senderName,
      senderPhone,
      senderCity,
      senderPostCode,
      senderAddress,
      recipientName,
      recipientPhone,
      recipientCity,
      recipientPostCode,
      recipientAddress,
      itemName,
      serviceType,
      weight,
      itemValue,
    });
  };

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
                    onChange={(e) => setSenderName(e.target.value)}
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
                    onChange={(e) => setSenderPhone(e.target.value)}
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
                    onChange={(e) => setSenderCity(e.target.value)}
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
                    onChange={(e) => setSenderPostCode(e.target.value)}
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
                    onChange={(e) => setSenderAddress(e.target.value)}
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
                    onChange={(e) => setRecipientName(e.target.value)}
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
                    onChange={(e) => setRecipientPhone(e.target.value)}
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
                    onChange={(e) => setRecipientCity(e.target.value)}
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
                    onChange={(e) => setRecipientPostCode(e.target.value)}
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
                    onChange={(e) => setRecipientAddress(e.target.value)}
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
                        onChange={(e) => setItemName(e.target.value)}
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
                        onChange={(e) => setServiceType(e.target.value)}
                      >
                        <option value="Cargo">Cargo</option>
                        <option value="Express">Express</option>
                        <option value="Economy">Economy</option>
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
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter weight"
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
                        onChange={(e) => setItemValue(e.target.value)}
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
                    <p className="mb-0">Rp 0</p>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                    <p className="mb-0">Insurance:</p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-0">Rp 0</p>
                  </div>
                </div>
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