import React from 'react';
import SearchBar from '../components/SearchBar'; // Ensure this path is correct
import ApplicantDashboard from '../components/ApplicantDashboard';

const ApplicantPage = () => {
    return (
        <div>
            <SearchBar />
            <ApplicantDashboard />
        </div>
    );
};

export default ApplicantPage;
