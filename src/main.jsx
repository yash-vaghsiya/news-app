// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";

// import { NewsProvider } from "./context/NewsContext";

// ReactDOM.createRoot(
//   document.getElementById("root")
// ).render(
//   <React.StrictMode>
//     <NewsProvider>
//       <App />
//     </NewsProvider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Global CSS
import "./assets/styles/global.css";

// Context Provider
import { NewsProvider } from "./context/NewsContext";
import { HashRouter } from 'react-router-dom'
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  // <React.StrictMode>
  //   <NewsProvider>
        <HashRouter basename="/news-app/">
          <App />
        </HashRouter>
  //   </NewsProvider>
  // </React.StrictMode>
);