import React from 'react';
import '../styles/auth.css';  // Import the CSS file for styles

const RecruiterSignup = () => {
    return (
        <div className="auth-container">
            <h2>Recruiter Sign Up</h2>
            <form className="auth-form">
                <label htmlFor="recruiter-name">Name</label>
                <input type="text" id="recruiter-name" placeholder="Enter your name" required />
                
                <label htmlFor="recruiter-email">Email</label>
                <input type="email" id="recruiter-email" placeholder="Enter your email" required />
                
                <label htmlFor="recruiter-password">Password</label>
                <input type="password" id="recruiter-password" placeholder="Enter your password" required />
                
                <button type="submit" className="auth-button">Sign Up</button>
                
                <p className="auth-link">
                    Already have an account? <a href="/recruiter/login">Login</a>
                </p>
            </form>
        </div>
    );
};

export default RecruiterSignup;
