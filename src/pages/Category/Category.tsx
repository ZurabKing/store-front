import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import styles from "./Category.module.css";

export const Category: FC = observer(() => {
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
          <Link to="/category/men's clothing">Мужская одежда</Link>
        </li>
        <li>
          <Link to="/category/women's clothing">Женская одежда</Link>
        </li>
      </ul>
    </>
  );
});
