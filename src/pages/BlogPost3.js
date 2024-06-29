import React from 'react';
import '../styles/blogPost.css';  // Import the CSS file for styles

const BlogPost3 = () => {
    return (
        <div className="blog-post-container">
            <h1>How to Network Effectively</h1>
            <img src="https://images.unsplash.com/photo-1573164574391-1b8b09e7d7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMzUyMTR8MHwxfGFsbHwxfHx8fHx8fHx8MTY4Mzg1MzEyMg&ixlib=rb-1.2.1&q=80&w=800" alt="How to Network Effectively" className="blog-post-image" />
            <p className="blog-post-content">Networking is crucial for career growth and finding new opportunities. Here are some tips for effective networking:</p>
            <ul>
                <li>Attend industry events and meetups.</li>
                <li>Use social media platforms like LinkedIn.</li>
                <li>Follow up with new connections after meeting them.</li>
                <li>Offer help and value to others in your network.</li>
                <li>Build genuine relationships rather than just transactional ones.</li>
            </ul>
            <p>Effective networking can open doors to new opportunities and help you grow professionally.</p>
        </div>
    );
};

export default BlogPost3;
