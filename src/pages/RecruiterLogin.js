import React from 'react';
import '../styles/auth.css';  // Import the CSS file for styles

const RecruiterLogin = () => {
    return (
        <div className="auth-container">
            <h2>Recruiter Login</h2>
            <form className="auth-form">
                <label htmlFor="recruiter-email">Email</label>
                <input type="email" id="recruiter-email" placeholder="Enter your email" required />
                
                <label htmlFor="recruiter-password">Password</label>
                <input type="password" id="recruiter-password" placeholder="Enter your password" required />
                
                <button type="submit" className="auth-button">Login</button>
                
                <p className="auth-link">
                    Don't have an account? <a href="/recruiter/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default RecruiterLogin;
