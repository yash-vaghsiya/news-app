import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  fetchNews,
  fetchCategoryNews,
  fetchTrendingNews,
  fetchIndiaNews,
} from "../services/newsApi";

// Create Context
const NewsContext = createContext();

// Custom Hook
export const useNews = () => {
  return useContext(NewsContext);
};

// Provider Component
export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] =
    useState("india");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  /**
   * Fetch Search News
   */

  const getNews = async (query = "india") => {
    try {
      setLoading(true);
      setError(null);

      const articles = await fetchNews(query);

      setNews(articles);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch Category News
   */

  const getCategoryNews = async (category) => {
    try {
      setLoading(true);
      setError(null);

      const articles =
        await fetchCategoryNews(category);

      setNews(articles);
      setSelectedCategory(category);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch category news");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch Trending News
   */

  const getTrendingNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const articles =
        await fetchTrendingNews();

      setNews(articles);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch trending news");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Search News
   */

  const searchNews = (query) => {
    setSearchQuery(query);
    getNews(query);
  };

  /**
   * Initial Load
   */

  useEffect(() => {
    getNews("india");
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        loading,
        error,

        searchQuery,
        selectedCategory,

        setSearchQuery,
        setSelectedCategory,

        getNews,
        getCategoryNews,
        getTrendingNews,

        searchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};