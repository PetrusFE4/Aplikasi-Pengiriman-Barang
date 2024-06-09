import React, { useState } from 'react';
import "../assets/css/Register.css";
import ImageRegister from "../assets/img/image-register.png";
import { StyledIcon } from '../components/StyledIcon';
import { faEnvelope, faLock, faPhone, faUser, faLocationDot, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ButtonStyle } from "../components/StyledComponents";

const Register = () => {
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
    e.preventDefault();
    const userData = {
      fullname: fullname, 
      username: username, 
      phone: phone, 
      address: address, 
      email: email, 
      password: password,
      role: 'user' 
    };

    // Kirim data ke server
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return(
        <div className="register-container">
            <section className="register-box">
                 {/* Grid sebelah kiri */}
                <div className="register-form">
                    <form onSubmit={handleSubmit}>
                        <center>
                        <p>Create an Account</p>

                        <label htmlFor="fullname"><StyledIcon icon={faUser} size="20px" color="black" />Fullname</label>
                        <input type="text" placeholder="Your fullname" value={fullname} onChange={handleFullnameChange}/>

                        <label htmlFor="username"><StyledIcon icon={faUser} size="20px" color="black" />Username</label>
                        <input type="text" placeholder="Your username" value={username} onChange={handleUsernameChange} />

                        <label htmlFor="phone"><StyledIcon icon={faPhone} size="20px" color="black" />Phone Number</label>
                        <input type="text" placeholder="Your active phone number" value={phone} onChange={handlePhoneChange}/>

                        <label htmlFor="email"><StyledIcon icon={faEnvelope} size="20px" color="black" />Email</label>
                        <input type="text" placeholder="Email address" value={email} onChange={handleEmailChange}/>

                        <label htmlFor="address"><StyledIcon icon={faLocationDot} size="20px" color="black" />Address</label>
                        <input type="text" placeholder="Your address" value={address} onChange={handleAddressChange} />

                        <label htmlFor="password"><StyledIcon icon={faLock} size="20px" color="black" />Password</label>
                        <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}/>

                        <ButtonStyle  onSubmit={handleSubmit} type="submit" style={{ padding: '10px 90px', margin: '10px auto', maxWidth: '440px', width:'100%'}}><b>Sign up</b></ButtonStyle>
                        <p className="no-account">Already have an account?<Link to="/login" className="sign-up-link"><b> Sign in.</b></Link></p>
                        </center>
                    </form>
                </div>
            

                {/* Grid sebelah kanan */}
                <div className="right-grid">
                    <div className="register-img">
                    <p className="welcome"><b>Let's Join Us!</b></p>
                    <p className="welcome-sub">To connected with us, please login with your personal info.</p>
                    <img src={ImageRegister} alt="Welcome" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;