import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../hooks/useStore";

import styles from "./Electronics.module.css";
import cartStore from "../../../store/cart-store";
import { Posts } from "../../../@types/products";

export const Electronics: FC = observer(() => {
  const {
    post: { getElectronics, posts },
    cart: { addItem },
  } = useStore();

  useEffect(() => {
    getElectronics();
  }, []);

  if (posts?.state === "pending") {
    return <span>Loading...</span>;
  }

  if (posts?.state === "rejected") {
    return <span>error...</span>;
  }

  const handleAddToCart = (post: Posts, isInCart: boolean) => {
    if (!isInCart) {
      addItem(post);
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Электроника</h1>
      <ul className={styles.list}>
        {posts?.value.map((post) => {
          const isInCart = cartStore.isItemInCart(post);
          return (
            <li className={styles.item} key={post.id}>
              <img width={200} height={200} src={post.image} alt="" />
              <p className={styles.text}>{post.title}</p>
              <div className={styles.btnContainer}>
                <span>
                  <b>Цена:</b> ${post.price}{" "}
                </span>
                <button
                  disabled={isInCart}
                  onClick={() => handleAddToCart(post, isInCart)}
                  style={{
                    backgroundColor: isInCart ? "gray" : "blue",
                    cursor: isInCart ? "not-allowed" : "pointer",
                  }}
                >
                  В корзину
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
});
