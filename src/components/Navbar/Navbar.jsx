import React from "react";
import "./Navbar.css";
import { FaNewspaper } from "react-icons/fa";

const Navbar = ({
  onCategorySelect,
  activeCategory,
}) => {
  /**
   * Navbar Categories
   */

  const navItems = [
    "All",
    "Trending",
    "Technology",
    "Business",
    "Sports",
    "Health",
    "Entertainment",
    "Science",
  ];

  /**
   * Handle Click
   */

  const handleCategoryClick = (
    category
  ) => {
    if (
      onCategorySelect
    ) {
      onCategorySelect(
        category
      );
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}

      <div className="navbar-logo">
        <FaNewspaper className="logo-icon" />

        <h2>NewsHub</h2>
      </div>

      {/* Navbar Links */}

      <ul className="navbar-links">
        {navItems.map(
          (
            item,
            index
          ) => (
            <li
              key={index}
              className={
                activeCategory ===
                item
                  ? "active-nav"
                  : ""
              }
              onClick={() =>
                handleCategoryClick(
                  item
                )
              }
            >
              {item}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;