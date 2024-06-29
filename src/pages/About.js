import React from 'react';
import '../styles/about.css';  // Import the CSS file for styles

const About = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>About Us</h1>
                <p>Welcome to JobPortal! We are dedicated to connecting talented individuals with amazing job opportunities.</p>
            </section>

            {/* Mission Statement */}
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>Our mission is to create a platform where job seekers and recruiters can connect and find the perfect match for their needs. We strive to make the job search and hiring process as smooth and efficient as possible.</p>
            </section>

            {/* Team Members */}
            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-cards">
                    <div className="team-card">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" className="team-member-photo" />
                        <h3>Jane Doe</h3>
                        <p>CEO & Founder</p>
                        <p>Jane leads our team with a vision to make job searching easy and effective for everyone.</p>
                    </div>
                    <div className="team-card">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" className="team-member-photo" />
                        <h3>John Smith</h3>
                        <p>CTO</p>
                        <p>John is responsible for the technology that powers JobPortal, ensuring a seamless user experience.</p>
                    </div>
                    <div className="team-card">
                        <img src="https://via.placeholder.com/150" alt="Team Member 3" className="team-member-photo" />
                        <h3>Emily Johnson</h3>
                        <p>Head of Marketing</p>
                        <p>Emily works on strategies to reach job seekers and recruiters, making sure everyone knows about JobPortal.</p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us:</p>
                <ul>
                    <li>Email: support@jobportal.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Address: 123 JobStreet, Suite 456, City, State, ZIP</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
