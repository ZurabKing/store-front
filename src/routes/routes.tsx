import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  Cart,
  Category,
  Home,
  Login,
  Personal,
  Products,
  Regist,
} from "../pages";
import { ProductRegist } from "../pages/ProductRegist";
import { Route as AppRoute } from "../constants/routes";

export const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoute.Home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={AppRoute.Categories} element={<Category />} />
          <Route path={AppRoute.Category} element={<Products />} />
          <Route path={AppRoute.Cart} element={<Cart />} />
          <Route path={AppRoute.Personal} element={<Personal />} />
          <Route path={AppRoute.ProductRegist} element={<ProductRegist />} />
          <Route
            path={AppRoute.Any}
            element={<h1>Такой страницы не существует</h1>}
          />
        </Route>
        <Route path={AppRoute.Auth} element={<Login />} />
        <Route path={AppRoute.Regist} element={<Regist />} />
      </Routes>
    </>
  );
};
