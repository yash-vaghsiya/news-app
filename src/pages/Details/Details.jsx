import React from "react";
import "./Details.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const article = location.state;

  if (!article) {
    return (
      <div className="details-error">
        <h2>No Article Data Found</h2>

        <button onClick={() => navigate("/")}>
          Back To Home
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="details-container">
        <img
          src={
            article.urlToImage ||
            "https://via.placeholder.com/1200x600?text=No+Image"
          }
          alt={article.title}
          className="details-image"
        />

        <div className="details-content">
          <span className="details-source">
            {article.source?.name}
          </span>

          <h1>{article.title}</h1>

          <p className="details-date">
            Published At:{" "}
            {new Date(article.publishedAt).toLocaleString()}
          </p>

          <p className="details-description">
            {article.description}
          </p>

          <p className="details-text">
            {article.content}
          </p>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="read-full-btn"
          >
            Read Full Article
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;