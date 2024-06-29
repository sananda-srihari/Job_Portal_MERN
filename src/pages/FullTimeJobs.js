import React from 'react';
import '../styles/fullTimeJobs.css';  // Import the CSS file for styles
import SearchBar from '../components/SearchBar';  // Import the SearchBar component
import JobCard from '../components/JobCard';  // Import the JobCard component

const FullTimeJobs = () => {
    return (
        <div className="fulltime-jobs-container">
            {/* Hero Section */}
            <section className="fulltime-jobs-hero-section">
                <h1>Full-Time Job Listings</h1>
                <p>Find your next full-time job opportunity from the best companies around the world.</p>
            </section>

            {/* Search Bar */}
            <section className="fulltime-jobs-search-section">
                <SearchBar />
            </section>

            {/* Job Listings */}
            <section className="fulltime-jobs-listing-section">
                <div className="fulltime-jobs-listing-container">
                    <JobCard 
                        role="Software Engineer"
                        company="Tech Solutions Inc."
                        location="San Francisco, CA"
                        description="Join our team as a Software Engineer to work on innovative projects and advance your career."
                    />
                    <JobCard 
                        role="Product Manager"
                        company="Innovative Tech"
                        location="New York, NY"
                        description="Lead product development initiatives and work with cross-functional teams to drive success."
                    />
                    <JobCard 
                        role="UX Designer"
                        company="Design Studio"
                        location="Austin, TX"
                        description="Create user-centered designs and work closely with clients to deliver exceptional products."
                    />
                    {/* Add more JobCard components here */}
                </div>
            </section>
        </div>
    );
};

export default FullTimeJobs;
