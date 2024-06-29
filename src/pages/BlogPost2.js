import React from 'react';
import '../styles/blogPost.css';  // Import the CSS file for styles

const BlogPost2 = () => {
    return (
        <div className="blog-post-container">
            <h1>Top Interview Tips for Success</h1>
            <img src="https://images.unsplash.com/photo-1560865065-63a52a50c418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMzUyMTR8MHwxfGFsbHwxfHx8fHx8fHx8MTY4Mzg1MzEyMg&ixlib=rb-1.2.1&q=80&w=800" alt="Top Interview Tips for Success" className="blog-post-image" />
            <p className="blog-post-content">Interviews can be nerve-wracking, but with the right preparation, you can improve your chances of success. Here are some top tips for your next interview:</p>
            <ul>
                <li>Research the company and the role you’re applying for.</li>
                <li>Prepare answers for common interview questions.</li>
                <li>Practice speaking confidently about your experiences.</li>
                <li>Dress appropriately for the interview.</li>
                <li>Prepare questions to ask the interviewer.</li>
            </ul>
            <p>By preparing ahead of time and staying calm during the interview, you can showcase your best self and increase your chances of landing the job.</p>
        </div>
    );
};

export default BlogPost2;
