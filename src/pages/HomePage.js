import React from 'react';
import CategoryCard from '../components/CategoryCard';
import '../styles/homePage.css';

const HomePage = () => {
    const categories = [
        {
            id: 1,
            category: 'Technology',
            image: 'https://via.placeholder.com/150?text=Tech',
            color: '#4CAF50', // Green
        },
        {
            id: 2,
            category: 'Design',
            image: 'https://via.placeholder.com/150?text=Design',
            color: '#2196F3', // Blue
        },
        {
            id: 3,
            category: 'Marketing',
            image: 'https://via.placeholder.com/150?text=Marketing',
            color: '#FF5722', // Orange
        },
        {
            id: 4,
            category: 'Finance',
            image: 'https://via.placeholder.com/150?text=Finance',
            color: '#FFC107', // Yellow
        },
    ];

    return (
        <div className="home-page">
            <h1 className="home-page-title">Explore Categories</h1>
            <div className="category-cards-container">
                {categories.map((cat) => (
                    <CategoryCard
                        key={cat.id}
                        category={cat.category}
                        image={cat.image}
                        color={cat.color}
                        onClick={() => console.log(`Clicked on ${cat.category}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
