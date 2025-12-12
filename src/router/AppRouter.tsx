import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import Layout from "../layout/Layout";
import PhotoPage from "../pages/PhotoPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/photos/search" element={<SearchPage />} />
        <Route path="/photos/:id" element={<PhotoPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
