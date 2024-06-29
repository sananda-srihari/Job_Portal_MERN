import React from 'react';
import '../styles/blogPost.css';  // Import the CSS file for styles

const BlogPost1 = () => {
    return (
        <div className="blog-post-container">
            <h1>How to Craft the Perfect Resume</h1>
            <img src="https://unsplash.com/photos/shallow-focus-photo-of-woman-in-gray-jacket-0Zx1bDv5BNY/download?force=true&w=800" alt="How to Craft the Perfect Resume" className="blog-post-image" />
            <p className="blog-post-content">Your resume is often the first impression a potential employer will have of you, so it’s important to make it as strong as possible. Here are some tips to craft the perfect resume:</p>
            <ul>
                <li>Focus on your strengths and achievements.</li>
                <li>Keep it concise and relevant.</li>
                <li>Use a professional format and design.</li>
                <li>Tailor your resume for each job application.</li>
                <li>Include keywords from the job description.</li>
            </ul>
            <p>By following these tips, you can create a resume that will help you stand out from the competition and increase your chances of landing your dream job.</p>
        </div>
    );
};

export default BlogPost1;
