import { FC } from "react";
import { useStore } from "../../hooks/useStore";

import styles from "./Cart.module.css";

export const Cart: FC = () => {
  const { cart } = useStore();

  if (cart.items.length === 0) {
    return <h1>Корзина пуста</h1>;
  }

  return (
    <div>
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
    </div>
  );
};
