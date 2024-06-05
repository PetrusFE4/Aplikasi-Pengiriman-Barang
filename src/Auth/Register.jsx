import React, { useState } from 'react';
import "../assets/css/Register.css";
import ImageRegister from "../assets/img/image-register.png";
import { StyledIcon } from '../components/StyledIcon';
import { faEnvelope, faLock, faPhone, faUser, faLocationDot, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ButtonStyle } from "../components/StyledComponents";

const Register = () => {
  // const [fullname, setFullname] = useState('');
  // const [username, setUsername] = useState('');
  // const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');


  // const handleFullnameChange = (e) => {
  //   setFullname(e.target.value);
  // };

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleAddressChange = (e) => {
  //   setAddress(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Lakukan sesuatu dengan username dan password, seperti mengirimnya ke server
  //   console.log('Fullname:', fullname);
  //   console.log('Username:', username);
  //   console.log('Phone:', phone);
  //   console.log('Email:', email);
  //   console.log('Address:', address);
  //   console.log('Password:', password);
  // };

    return(
        <div class="register-container">
            <section class="register-box">
                 {/* Grid sebelah kiri */}
                <div class="register-form">
                    <form>
                        <center>
                        <p>Create an Account</p>

                        <label htmlFor="fullname"><StyledIcon icon={faUser} size="20px" color="black" />Fullname</label>
                        <input type="text" placeholder="Your fullname" />

                        <label htmlFor="username"><StyledIcon icon={faUser} size="20px" color="black" />Username</label>
                        <input type="text" placeholder="Your username" />

                        <label htmlFor="phone"><StyledIcon icon={faPhone} size="20px" color="black" />Phone Number</label>
                        <input type="text" placeholder="Your active phone number"/>

                        <label htmlFor="email"><StyledIcon icon={faEnvelope} size="20px" color="black" />Email</label>
                        <input type="text" placeholder="Email address"/>

                        <label htmlFor="address"><StyledIcon icon={faLocationDot} size="20px" color="black" />Address</label>
                        <input type="text" placeholder="Your address" />

                        <label htmlFor="password"><StyledIcon icon={faLock} size="20px" color="black" />Password</label>
                        <input type="password" placeholder="Enter your password"/>

                        <ButtonStyle type="submit" style={{ padding: '10px 90px', margin: '10px auto', maxWidth: '440px', width:'100%'}}><b>Sign up</b></ButtonStyle>
                        <p class="no-account">Already have an account?<Link to="/login" class="sign-up-link"><b> Sign in.</b></Link></p>
                        </center>
                    </form>
                </div>
            

                {/* Grid sebelah kanan */}
                <div class="right-grid">
                    <div class="register-img">
                    <p class="welcome"><b>Let's Join Us!</b></p>
                    <p class="welcome-sub">To connected with us, please login with your personal info.</p>
                    <img src={ImageRegister} alt="Welcome" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;