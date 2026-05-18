/**
 * Application Configuration
 */

const config = {
  API_KEY: import.meta.env.VITE_NEWS_API_KEY,

  BASE_URL: "https://newsapi.org/v2/everything",

  DEFAULT_COUNTRY: "india",

  DEFAULT_LANGUAGE: "en",

  DEFAULT_SORT_BY: "popularity",
};

export default config;