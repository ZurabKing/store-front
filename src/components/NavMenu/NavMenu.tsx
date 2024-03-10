import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { BiCart, BiUser } from "react-icons/bi";
import { AuthDetail } from "../../pages/Auth/AuthDetails/AuthDetail";

import styles from "./NavMenu.module.css";

export const NavMenu: FC = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

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
        <div className={styles.modalContainer}></div>
        <Link className={styles.link} to={"/auth"}>
          <BiUser fontSize={"25px"} onClick={showModal} />
        </Link>
        {modal && (
          <div className={styles.modal}>
            <AuthDetail />
          </div>
        )}
      </li>
    </ul>
  );
};
