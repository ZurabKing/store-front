import { FC } from "react";
import { useStore } from "../../hooks/useStore";

import styles from "./Personal.module.css";

export const Personal: FC = () => {
  const { productRegist } = useStore();

  if (productRegist.purchasedItems.length === 0) {
    return <h1>Ваша История покупок пуста!</h1>;
  }

  return (
    <div>
      <div className={styles.sumContainer}>
        <h1 className={styles.title}>Личный кабинет</h1>
      </div>

      <h3 className={styles.subtitle}>История заказов:</h3>
      <ul className={styles.list}>
        {productRegist.purchasedItems?.map((item) => (
          <li className={styles.item} key={item.id}>
            <img width={200} height={200} src={item.image} alt="product" />
            <p className={styles.text}>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
