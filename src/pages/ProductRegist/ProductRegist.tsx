import { FC } from "react";
import { useStore } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";

import styles from "./ProductRegist.module.css";

export const ProductRegist: FC = () => {
  const { cart, productRegist } = useStore();
  const navigate = useNavigate();

  const buyProductClick = () => {
    alert("Скоро все доставим! Благодарим за покупку!");
    productRegist.purchasedItems = cart.items;
    cart.items = [];
    navigate("/");
  };

  return (
    <div>
      <div className={styles.sumContainer}>
        <h1 className={styles.title}>Оформление заказа</h1>

        <span>
          <button onClick={buyProductClick} className={styles.sumBtn}>
            Оплатить
          </button>
          : ${cart.getTotalSum()}
        </span>
      </div>

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
