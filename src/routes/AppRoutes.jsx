import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Details Page */}
      <Route
        path="/details"
        element={<Details />}
      />

      {/* 404 Page */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;