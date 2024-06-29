import React from 'react';
import '../styles/categoryCard.css';

const CategoryCard = ({ category, image, color, onClick }) => {
    return (
        <div className="category-card" style={{ backgroundColor: color }} onClick={onClick}>
            <img src={image} alt={category} className="category-card-image" />
            <div className="category-card-content">
                <h3 className="category-card-title">{category}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;
