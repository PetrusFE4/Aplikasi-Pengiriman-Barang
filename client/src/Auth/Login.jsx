// import React, { useState } from 'react';
import "../assets/css/Login.css";
import ImageLogin from "../assets/img/image-login.png";
import { StyledIcon } from '../components/StyledIcon';
import { ButtonStyle } from "../components/StyledComponents";
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
                    <form>
                    <center>
                    <p>Sign in to <b>Febe</b><b className="brand">Express</b></p>

                    <label htmlFor="email"><StyledIcon icon={faEnvelope} size="20px" color="black" />Email</label>
                    <input type="text" placeholder="Email address"/>

                    <label htmlFor="password"><StyledIcon icon={faLock} size="20px" color="black" />Password</label>
                    <input type="password" placeholder="Enter your password"/>

                    {/* Bagian button kalau sudah login langsung mengarah ke homepage, ini tak kasih <Link to="/"> buat cek nanti dibuah ya */}
                    <ButtonStyle style={{ padding: '10px 90px', margin: '10px auto', maxWidth: '440px', width:'100%' }} type="submit"><Link to="/" style={{textDecoration: 'none', color:'white'}}><b>Sign in</b></Link></ButtonStyle> 
                    <p className="no-account">Don't have an account?<Link to="/register" className="sign-up-link"><b> Sign up.</b></Link></p>
                    </center>
                    </form>
                </div>
            </section>
        </div>

    );
}

export default Login