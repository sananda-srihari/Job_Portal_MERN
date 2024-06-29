import React from 'react';
import '../styles/auth.css';  // Import the CSS file for styles

const LoginOptions = () => {
    return (
        <div className="login-options-container">
            <h2>Welcome to JobPortal</h2>
            <div className="login-options">
                <a href="/applicant/login" className="auth-button">Applicant Login</a>
                <a href="/recruiter/login" className="auth-button">Recruiter Login</a>
                <a href="/applicant/signup" className="auth-button">Applicant Sign Up</a>
                <a href="/recruiter/signup" className="auth-button">Recruiter Sign Up</a>
            </div>
        </div>
    );
};

export default LoginOptions;
