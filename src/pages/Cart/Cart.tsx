import { FC } from "react";
import { useStore } from "../../hooks/useStore";

import { Link } from "react-router-dom";

import styles from "./Cart.module.css";
import { BsArrowRight } from "react-icons/bs";

export const Cart: FC = () => {
  const { cart } = useStore();

  if (cart.items.length === 0) {
    return <h1>Корзина пуста</h1>;
  }

  return (
    <div>
      <h1 style={{ marginBottom: "30px" }}>Корзина</h1>

      <ul className={styles.list}>
        {cart.items?.map((item) => (
          <li className={styles.item} key={item.id}>
            <img width={200} height={200} src={item.image} alt="product" />
            <p className={styles.text}>{item.title}</p>
            <div className={styles.btnContainer}>
              <span>
                <b>Цена:</b> ${item.price}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.productContainer}>
        <Link className={styles.productContainerLink} to={"/productregist"}>
          Перейти на страницу оформления заказа <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};
