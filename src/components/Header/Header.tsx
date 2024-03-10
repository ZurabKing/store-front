import { FC } from "react";
import { NavMenu } from "../NavMenu";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { BiStore } from "react-icons/bi";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.logoLink} to={"/"}>
          <BiStore className={styles.logoImg} />
          StoreHub
        </Link>
      </div>

      <NavMenu />
    </header>
  );
};
