import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      onSearch(searchText);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search latest news..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;