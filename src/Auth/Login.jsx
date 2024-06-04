import React, { useState } from 'react';
import "./assets/css/Login.css";
import { ButtonStyle } from './StyledComponents';
import ImageLogin from "../assets/image-login.png";
import { StyledIcon } from './StyledIcon';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Lakukan sesuatu dengan username dan password, seperti mengirimnya ke server
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // };

    return (
        <div class="login-container">
            <section class="login-box">
                {/* Grid sebelah kiri */}
                <div class="left-grid">
                    <div class="login-img">
                        <p class="welcome"><b>Welcome!</b></p>
                        <p class="welcome-sub">Fill up your personal information and start journey with us.</p>
                        <img src={ImageLogin} alt="Welcome" />
                    </div>
                </div>

                {/* Grid sebelah kanan */}
                <div class="login-form">
                    <form>
                    <center>
                    <p>Sign in to <b>Febe</b><b class="brand">Express</b></p>

                    <label htmlFor="email"><StyledIcon icon={faEnvelope} size="20px" color="black" />Email</label>
                    <input type="text" placeholder="Email address"/>

                    <label htmlFor="password"><StyledIcon icon={faLock} size="20px" color="black" />Password</label>
                    <input type="password" placeholder="Enter your password"/>

                    <ButtonStyle type="submit"><b>Sign in</b></ButtonStyle>
                    <p class="no-account">Don't have an account?<Link to="/register" class="sign-up-link"><b> Sign up.</b></Link></p>
                    </center>
                    </form>
                </div>
            </section>
        </div>

    );
}

export default Login