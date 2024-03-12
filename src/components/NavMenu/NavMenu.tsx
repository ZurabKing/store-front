import { FC } from "react";
import { Link } from "react-router-dom";
import { BiCart, BiUser } from "react-icons/bi";

import styles from "./NavMenu.module.css";

export const NavMenu: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link className={styles.link} to={"/"}>
          Главная
        </Link>
      </li>
      <li>
        <Link className={styles.link} to={"/category"}>
          Категории
        </Link>
      </li>
      <li>
        <Link className={styles.link} to={"/cart"}>
          <BiCart fontSize={"25px"} />
        </Link>
      </li>
      <li>
        <Link className={styles.link} to={"/personal"}>
          <BiUser fontSize={"25px"} />
        </Link>
      </li>
    </ul>
  );
};
