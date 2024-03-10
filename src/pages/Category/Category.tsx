import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { Link } from "react-router-dom";

import styles from "./Category.module.css";

export const Category: FC = observer(() => {
  const {
    post: { getAllProducts, posts },
  } = useStore();

  useEffect(() => {
    getAllProducts();
  }, []);

  if (posts?.state === "pending") {
    return <span>Loading...</span>;
  }

  if (posts?.state === "rejected") {
    return <span>error...</span>;
  }

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Категории</h1>
      <ul className={styles.list}>
        <li>
          <Link to="/">Все товары</Link>
        </li>
        <li>
          <Link to="electronics">Электроника</Link>
        </li>
        <li>
          <Link to="jewelery">Ювелирка</Link>
        </li>
        <li>
          <Link to="/category/menclothers">Мужская одежда</Link>
        </li>
        <li>
          <Link to="/category/womenclothers">Женская одежда</Link>
        </li>
      </ul>
    </>
  );
});
