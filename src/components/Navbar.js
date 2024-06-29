import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Ensure you have this logo image
import '../styles/navbar.css';  // Import the CSS file for styles

const Navbar = () => {
    const [isJobsDropdownOpen, setJobsDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo and Text */}
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Job Portal Logo" className="logo-image" />
                    <h1 className="logo-text">JobPortal</h1>
                </Link>
                
                {/* Add a div to create space between the logo and the navigation links */}
                <div className="navbar-separator"></div>
                
                {/* Navigation Links with Dropdowns */}
                <nav className="navbar-links">
                    <div className="navbar-dropdown" onMouseEnter={() => setJobsDropdownOpen(true)} onMouseLeave={() => setJobsDropdownOpen(false)}>
                        <span className="navbar-link">Jobs</span>
                        {isJobsDropdownOpen && (
                            <div className="dropdown-menu">
                                <Link to="/jobs/full-time" className="dropdown-link">Full-Time</Link>
                                <Link to="/jobs/part-time" className="dropdown-link">Part-Time</Link>
                                <Link to="/jobs/internships" className="dropdown-link">Internships</Link>
                            </div>
                        )}
                    </div>
                    <div className="navbar-dropdown" onMouseEnter={() => setCompanyDropdownOpen(true)} onMouseLeave={() => setCompanyDropdownOpen(false)}>
                        <span className="navbar-link">Companies</span>
                        {isCompanyDropdownOpen && (
                            <div className="dropdown-menu">
                                <Link to="/companies/startups" className="dropdown-link">Startups</Link>
                                <Link to="/companies/corporations" className="dropdown-link">Corporations</Link>
                                <Link to="/companies/remote" className="dropdown-link">Remote</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className="navbar-link">About</Link>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                    <Link to="/blog" className="navbar-link">Blog</Link>
                    <Link to="/applicant/login" className="navbar-link">Applicant Login</Link>
                    <Link to="/recruiter/login" className="navbar-link">Recruiter Login</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
