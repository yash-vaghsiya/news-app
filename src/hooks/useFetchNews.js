import { useEffect, useState } from "react";
import {
  fetchNews,
  fetchCategoryNews,
  fetchTrendingNews,
} from "../services/newsApi";

const useFetchNews = (
  query = "india",
  type = "search"
) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNews = async () => {
    try {
      setLoading(true);
      setError(null);

      let articles = [];

      switch (type) {
        case "category":
          articles = await fetchCategoryNews(query);
          break;

        case "trending":
          articles = await fetchTrendingNews();
          break;

        default:
          articles = await fetchNews(query);
      }

      setNews(articles);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, [query, type]);

  return {
    news,
    loading,
    error,
    refetch: getNews,
  };
};

export default useFetchNews;