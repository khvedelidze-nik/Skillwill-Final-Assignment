import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import Layout from "../layout/Layout";
import PhotoPage from "../pages/PhotoPage";
import ErrorPage from "../pages/ErrorPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="/photos/search" element={<SearchPage />} />
        <Route path="/photos/:id" element={<PhotoPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
