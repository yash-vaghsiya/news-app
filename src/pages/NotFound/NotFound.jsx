import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist
          or has been moved.
        </p>

        <button onClick={() => navigate("/")}>
          <FaHome />
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;