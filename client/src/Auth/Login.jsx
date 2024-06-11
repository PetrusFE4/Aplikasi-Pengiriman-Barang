import React, { useState } from 'react';
import "../assets/css/Login.css";
import ImageLogin from "../assets/img/image-login.png";
import { StyledIcon } from '../components/StyledIcon';
import { ButtonStyle } from "../components/StyledComponents";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { username, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                Swal.fire({
                    title: "Good job!",
                    text: response.data.message,
                    icon: "success",
                    iconColor: "#01aa5a",
                    confirmButtonColor: "#01aa5a"
                }).then(() => {
                    window.location.href = '/dashboard';
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Login Failed!",
                text: error.response.data.message,
                confirmButtonColor:"#f27474"
            });
        }
    };

    return (
        <div className="login-container">
            <section className="login-box">
                {/* Grid sebelah kiri */}
                <div className="left-grid">
                    <div className="login-img">
                        <p className="welcome"><b>Welcome!</b></p>
                        <p className="welcome-sub">Fill up your personal information and start journey with us.</p>
                        <img src={ImageLogin} alt="Welcome" />
                    </div>
                </div>

                {/* Grid sebelah kanan */}
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <center>
                            <p>Sign in to <b>Febe</b><b className="brand">Express</b></p>

                            <label htmlFor="email">
                                <StyledIcon icon={faEnvelope} size="20px" color="black" />Email
                            </label>
                            <input
                                type="text"
                                placeholder="Email address"
                                required
                                autoFocus
                                value={username}
                                onChange={handleUsernameChange}
                            />

                            <label htmlFor="password">
                                <StyledIcon icon={faLock} size="20px" color="black" />Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                            />

                            <ButtonStyle style={{ padding: '10px 90px', margin: '10px auto', maxWidth: '440px', width: '100%' }} type="submit">
                                <b>Sign in</b>
                            </ButtonStyle>
                           
                            <p className="no-account">
                                Don't have an account?<Link to="/register" className="sign-up-link"><b> Sign up.</b></Link>
                            </p>
                        </center>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;
