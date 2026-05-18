import React, {
  useEffect,
  useState,
} from "react";

import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryButtons from "../../components/CategoryButtons/CategoryButtons";
import NewsCard from "../../components/NewsCard/NewsCard";
import Loader from "../../components/Loader/Loader";
import DateFilter from "../../components/DateFilter/DateFilter";

import {
  fetchNews,
} from "../../services/newsApi";

const Home = () => {
  /**
   * States
   */

  const [news, setNews] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [activeNavbar,
    setActiveNavbar,
  ] = useState("All");

  const [searchQuery,
    setSearchQuery,
  ] = useState("india");

  /**
   * Yesterday Date
   */

  const yesterday = new Date();

  yesterday.setDate(
    yesterday.getDate() - 1
  );

  const defaultDate =
    yesterday
      .toISOString()
      .split("T")[0];

  const [selectedDate,
    setSelectedDate,
  ] = useState(defaultDate);

  /**
   * Fetch News
   */

  const getNews = async (
    query = "india",
    date = selectedDate
  ) => {
    try {
      setLoading(true);

      setError("");

      const result =
        await fetchNews(
          query,
          date
        );

      /**
       * API Error
       */

      if (
        !result.success
      ) {
        setError(
          result.message
        );

        setNews([]);

        return;
      }

      /**
       * Ensure Array
       */

      if (
        Array.isArray(
          result.articles
        )
      ) {
        setNews(
          result.articles
        );
      } else {
        setNews([]);
      }
    } catch (err) {
      console.error(err);

      setError(
        "Failed to fetch news"
      );

      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Initial Load
   */

  useEffect(() => {
    getNews(
      "india",
      selectedDate
    );
  }, []);

  /**
   * Search
   */

  const handleSearch = (
    value
  ) => {
    setSearchQuery(value);

    setSelectedCategory(
      "All"
    );

    setActiveNavbar("");

    getNews(
      value,
      selectedDate
    );
  };

  /**
   * Category Buttons
   */

  const handleCategory = (
    category
  ) => {
    setSelectedCategory(
      category
    );

    setActiveNavbar("");

    if (
      category === "All"
    ) {
      getNews(
        "india",
        selectedDate
      );
    } else {
      getNews(
        category,
        selectedDate
      );
    }
  };

  /**
   * Navbar Categories
   */

  const handleNavbarCategory =
    (category) => {
      setActiveNavbar(
        category
      );

      setSelectedCategory(
        category
      );

      /**
       * All News
       */

      if (
        category === "All"
      ) {
        setSearchQuery(
          "india"
        );

        getNews(
          "india",
          selectedDate
        );

        return;
      }

      /**
       * Trending News
       */

      if (
        category ===
        "Trending"
      ) {
        setSearchQuery(
          "trending"
        );

        getNews(
          "trending",
          selectedDate
        );

        return;
      }

      /**
       * Other Categories
       */

      setSearchQuery(
        category
      );

      getNews(
        category,
        selectedDate
      );
    };

  /**
   * Date Change
   */

  const handleDateChange =
    (date) => {
      setSelectedDate(
        date
      );

      if (
        selectedCategory ===
        "All"
      ) {
        getNews(
          "india",
          date
        );
      } else {
        getNews(
          selectedCategory,
          date
        );
      }
    };

  return (
    <div className="home">
      {/* Navbar */}

      <Navbar
        onCategorySelect={
          handleNavbarCategory
        }
        activeCategory={
          activeNavbar
        }
      />

      {/* Search */}

      <SearchBar
        onSearch={
          handleSearch
        }
      />

      {/* Date Filter */}

      <DateFilter
        selectedDate={
          selectedDate
        }
        setSelectedDate={
          handleDateChange
        }
      />

      {/* Category Buttons */}

      <CategoryButtons
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          handleCategory
        }
      />

      {/* News */}

      <div className="news-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <h2 className="no-news">
            {error}
          </h2>
        ) : Array.isArray(
            news
          ) &&
          news.length >
            0 ? (
          news.map(
            (
              article,
              index
            ) => (
              <NewsCard
                key={
                  index
                }
                article={
                  article
                }
              />
            )
          )
        ) : (
          <h2 className="no-news">
            No News Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Home;