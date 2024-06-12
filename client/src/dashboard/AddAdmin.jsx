import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/AddAdmin.css";
import { ButtonStyle } from "../components/StyledComponents";
import NavbarDashboard from "../componentDashboard/NavbarDashboard";


function AddAdmin() {
  
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleFullnameChange = (e) => {
      setFullname(e.target.value);
    };
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const adminData = {
        fullname, 
        username, 
        phone, 
        address, 
        email, 
        password,
      };
  
      try {
        const response = await axios.post('/api/auth/registerAdmin', adminData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.status === 201) {
          Swal.fire({
            title: "Good job!",
            text: response.data.message,
            icon: "success",
            iconColor: "#01aa5a",
            confirmButtonColor:"#01aa5a"
          })
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: "error",
          title: "Register Failed!",
          text: error.response.data.message,
          confirmButtonColor:"#f27474"
      });
      }
    };

  return (
    <>
      <NavbarDashboard />
      <div className="container-add-admin d-flex justify-content-center mt-sm-5">
        <form
          action=""
          className="p-5 d-flex flex-column gap-5"
          onSubmit={handleSubmit}
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
          <div className="container-input-add-admin d-flex flex-column flex-sm-row gap-3 gap-sm-5 rounded-2 ">
            <div className="kiri-add-admin d-flex flex-column gap-2">
              <label>
                Fullname<span className="text-danger" >*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fullname"
                value={fullname} onChange={handleFullnameChange}
                required
                autoFocus
              />
              <label>
                Username<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username} onChange={handleUsernameChange}
                required
              />
              <label>
                Password<span className="text-danger">*</span>
              </label>
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className="kanan-add-admin d-flex flex-column gap-2">
              <label>
                Phone<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              <label>
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label>
                Address<span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows="1"
                placeholder="Your Address"
                value={address}
                onChange={handleAddressChange}
                required
              />
            </div>
          </div>
          <ButtonStyle type="submit">Add Admin</ButtonStyle>
        </form>
      </div>
    </>
  );
}

export default AddAdmin;
