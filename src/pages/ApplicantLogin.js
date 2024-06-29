import React from 'react';
import '../styles/auth.css';  // Import the CSS file for styles

const ApplicantLogin = () => {
    return (
        <div className="auth-container">
            <h2>Applicant Login</h2>
            <form className="auth-form">
                <label htmlFor="applicant-email">Email</label>
                <input type="email" id="applicant-email" placeholder="Enter your email" required />
                
                <label htmlFor="applicant-password">Password</label>
                <input type="password" id="applicant-password" placeholder="Enter your password" required />
                
                <button type="submit" className="auth-button">Login</button>
                
                <p className="auth-link">
                    Don't have an account? <a href="/applicant/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default ApplicantLogin;
