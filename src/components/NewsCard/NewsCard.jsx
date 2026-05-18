// import React from "react";
// import "./NewsCard.css";
// import { useNavigate } from "react-router-dom";

// const NewsCard = ({ article }) => {
//   const navigate = useNavigate();

//   const handleDetails = () => {
//     navigate("/details", {
//       state: article,
//     });
//   };

//   return (
//     <div className="news-card">
//       <img
//         src={
//           article.urlToImage ||
//           "https://dummyimage.com/400x250/cccccc/000000&text=No+Image"
//         }
//         alt={article.title}
//         className="news-image"
//       />

//       <div className="news-content">
//         <h3 className="news-title">
//           {article.title?.slice(0, 80)}...
//         </h3>

//         <p className="news-description">
//           {article.description?.slice(0, 120)}...
//         </p>

//         <div className="news-footer">
//           <span className="news-source">
//             {article.source?.name}
//           </span>

//           <button
//             onClick={handleDetails}
//             className="read-more-btn"
//           >
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;

import React from "react";
import noImage from "../../assets/images/no-image.png";

import "./NewsCard.css";

import { useNavigate } from "react-router-dom";

const NewsCard = ({ article }) => {
  const navigate = useNavigate();

  
  /**
   * Open Details Page
   */

  const handleDetails = () => {
    navigate("/details", {
      state: article,
    });
  };

  /**
   * Fallback Image
   */

  const fallbackImage =
    "https://dummyimage.com/400x250/cccccc/000000&text=No+Image";

  return (
    <div className="news-card">
      {/* News Image */}

      <img
        src={
          article.urlToImage ||
          fallbackImage
        }
        alt={article.title}
        className="news-image"
        onError={(e) => {
          e.target.src = fallbackImage;
        }}
      />

      {/* News Content */}

      <div className="news-content">
        <h3 className="news-title">
          {article.title
            ?.slice(0, 80)}
          ...
        </h3>

        <p className="news-description">
          {article.description
            ?.slice(0, 120)}
          ...
        </p>

        {/* Footer */}

        <div className="news-footer">
          <span className="news-source">
            {
              article.source
                ?.name
            }
          </span>

          <button
            onClick={
              handleDetails
            }
            className="read-more-btn"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;