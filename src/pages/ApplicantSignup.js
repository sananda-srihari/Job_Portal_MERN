import React from 'react';
import '../styles/auth.css';  // Import the CSS file for styles

const ApplicantSignup = () => {
    return (
        <div className="auth-container">
            <h2>Applicant Sign Up</h2>
            <form className="auth-form">
                <label htmlFor="applicant-name">Name</label>
                <input type="text" id="applicant-name" placeholder="Enter your name" required />
                
                <label htmlFor="applicant-email">Email</label>
                <input type="email" id="applicant-email" placeholder="Enter your email" required />
                
                <label htmlFor="applicant-password">Password</label>
                <input type="password" id="applicant-password" placeholder="Enter your password" required />
                
                <button type="submit" className="auth-button">Sign Up</button>
                
                <p className="auth-link">
                    Already have an account? <a href="/applicant/login">Login</a>
                </p>
            </form>
        </div>
    );
};

export default ApplicantSignup;
