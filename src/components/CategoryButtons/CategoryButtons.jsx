import React from "react";
import "./CategoryButtons.css";

const categories = [
  "All",
  "Trending",
  "Technology",
  "Business",
  "Sports",
  "Health",
  "Entertainment",
  "Science",
];

const CategoryButtons = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-btn ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;