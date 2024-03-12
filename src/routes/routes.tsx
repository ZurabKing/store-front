import { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  Cart,
  Category,
  Electronics,
  Home,
  Jewelery,
  Login,
  Personal,
  Regist,
} from "../pages";
import { ProductRegist } from "../pages/ProductRegist";
import { MenClothers } from "../pages/Category/MenClothers";
import { WomenClothers } from "../pages/Category/WomenClothers";
import { auth } from "../firebase";

export const AppRoutes: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/auth");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="category/electronics" element={<Electronics />} />
          <Route path="category/jewelery" element={<Jewelery />} />
          <Route path="category/menclothers" element={<MenClothers />} />
          <Route path="category/womenclothers" element={<WomenClothers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/productregist" element={<ProductRegist />} />
          <Route path="*" element={<h1>Такой страницы не существует</h1>} />
        </Route>
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/regist" element={<Regist />} />
      </Routes>
    </>
  );
};
