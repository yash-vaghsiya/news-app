const API_KEY =
  "9b0a1ffc723a4ef9b541c032387e76ca";

const BASE_URL =
  "https://newsapi.org/v2/everything";

/**
 * Default Yesterday Date
 */

const yesterday = new Date();

yesterday.setDate(
  yesterday.getDate() - 1
);

const defaultDate =
  yesterday.toISOString().split("T")[0];

/**
 * Common Fetch Function
 */

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    // API Error
    if (data.status === "error") {
      return {
        success: false,
        articles: [],
        message:
          data.message ||
          "Something went wrong",
      };
    }

    return {
      success: true,
      articles:
        data.articles || [],
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      articles: [],
      message:
        "Failed to fetch news",
    };
  }
};

/**
 * Fetch Search News
 */

export const fetchNews =
  async (
    query = "india",
    selectedDate = defaultDate
  ) => {
    const url =
      `${BASE_URL}?q=${query}` +
      `&from=${selectedDate}` +
      `&to=${selectedDate}` +
      `&sortBy=popularity` +
      `&language=en` +
      `&pageSize=52` +
      `&apiKey=${API_KEY}`;

    return fetchData(url);
  };

/**
 * Fetch Category News
 */

export const fetchCategoryNews =
  async (
    category,
    selectedDate = defaultDate
  ) => {
    const url =
      `${BASE_URL}?q=${category}` +
      `&from=${selectedDate}` +
      `&to=${selectedDate}` +
      `&sortBy=popularity` +
      `&language=en` +
      `&pageSize=52` +
      `&apiKey=${API_KEY}`;

    return fetchData(url);
  };

/**
 * Fetch Trending News
 */

export const fetchTrendingNews =
  async (
    selectedDate = defaultDate
  ) => {
    const url =
      `${BASE_URL}?q=trending` +
      `&from=${selectedDate}` +
      `&to=${selectedDate}` +
      `&sortBy=publishedAt` +
      `&language=en` +
      `&pageSize=20` +
      `&apiKey=${API_KEY}`;

    return fetchData(url);
  };

/**
 * Fetch India News
 */

export const fetchIndiaNews =
  async (
    selectedDate = defaultDate
  ) => {
    const url =
      `${BASE_URL}?q=india` +
      `&from=${selectedDate}` +
      `&to=${selectedDate}` +
      `&sortBy=publishedAt` +
      `&language=en` +
      `&pageSize=20` +
      `&apiKey=${API_KEY}`;

    return fetchData(url);
  };