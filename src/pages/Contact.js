import React from 'react';
import '../styles/contact.css';  // Import the CSS file for styles

const Contact = () => {
    return (
        <div className="contact-container">
            {/* Hero Section */}
            <section className="contact-hero-section">
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Get in touch with us for any queries or feedback.</p>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <h2>Get in Touch</h2>
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

                    <button type="submit" className="contact-form-submit">Send Message</button>
                </form>
            </section>

            {/* Contact Information */}
            <section className="contact-info-section">
                <h2>Our Contact Information</h2>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <h3>Email</h3>
                        <p><a href="mailto:support@jobportal.com">support@jobportal.com</a></p>
                    </div>
                    <div className="contact-info-item">
                        <h3>Phone</h3>
                        <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                    </div>
                    <div className="contact-info-item">
                        <h3>Address</h3>
                        <p>123 JobPortal St,<br />City, State, 12345</p>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map-section">
                <h2>Find Us</h2>
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.9659313167586!2d-122.08424948465055!3d37.42199977982556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb1a00c8f3ff%3A0x3f17d4b08ad4e64d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635790900722!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
