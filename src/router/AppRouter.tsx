import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ImagesPage from "../pages/ImagesPage";
import Layout from "../layout/Layout";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/photos" element={<ImagesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
