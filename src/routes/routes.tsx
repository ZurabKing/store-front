import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Home } from "../pages/Home";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<h1>Такой страницы не существует</h1>} />
      </Route>
    </Routes>
  );
};
