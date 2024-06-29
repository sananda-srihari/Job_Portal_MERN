import React from 'react';
import '../styles/footer.css';  // Import the CSS file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2024 JobPortal. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
