import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/styles.css';  // Import the CSS file for styles

const SearchBar = () => {
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // Implement the search logic here
        console.log('Searching for:', { role, company, location });
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
