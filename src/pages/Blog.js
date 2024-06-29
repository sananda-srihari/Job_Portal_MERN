import React from 'react';
import '../styles/blog.css';  // Import the CSS file for styles

const Blog = () => {
    return (
        <div className="blog-container">
            {/* Hero Section */}
            <section className="blog-hero-section">
                <h1>Our Blog</h1>
                <p>Stay updated with the latest news, tips, and insights from the JobPortal team.</p>
            </section>

            {/* Blog Posts */}
            <section className="blog-posts-section">
                <div className="blog-posts-container">
                    <div className="blog-post-card">
                        <img src="https://unsplash.com/photos/shallow-focus-photo-of-woman-in-gray-jacket-0Zx1bDv5BNY/download?force=true&w=800" alt="How to Craft the Perfect Resume" className="blog-post-image" />
                        <div className="blog-post-content">
                            <h2 className="blog-post-title">How to Craft the Perfect Resume</h2>
                            <p className="blog-post-excerpt">Learn how to create a resume that stands out to employers and helps you land your dream job.</p>
                            <a href="/blog/how-to-craft-the-perfect-resume" className="blog-post-link">Read More</a>
                        </div>
                    </div>
                    <div className="blog-post-card">
                        <img src="https://images.unsplash.com/photo-1560865065-63a52a50c418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMzUyMTR8MHwxfGFsbHwxfHx8fHx8fHx8MTY4Mzg1MzEyMg&ixlib=rb-1.2.1&q=80&w=800" alt="Top Interview Tips for Success" className="blog-post-image" />
                        <div className="blog-post-content">
                            <h2 className="blog-post-title">Top Interview Tips for Success</h2>
                            <p className="blog-post-excerpt">Get ready for your next job interview with these essential tips and tricks for success.</p>
                            <a href="/blog/top-interview-tips-for-success" className="blog-post-link">Read More</a>
                        </div>
                    </div>
                    <div className="blog-post-card">
                        <img src="https://images.unsplash.com/photo-1573164574391-1b8b09e7d7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMzUyMTR8MHwxfGFsbHwxfHx8fHx8fHx8MTY4Mzg1MzEyMg&ixlib=rb-1.2.1&q=80&w=800" alt="How to Network Effectively" className="blog-post-image" />
                        <div className="blog-post-content">
                            <h2 className="blog-post-title">How to Network Effectively</h2>
                            <p className="blog-post-excerpt">Discover strategies for building meaningful connections and expanding your professional network.</p>
                            <a href="/blog/how-to-network-effectively" className="blog-post-link">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
