import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../hooks/useStore";

import styles from "./MenClothers.module.css";
import { Posts } from "../../../@types/products";

export const MenClothers: FC = observer(() => {
  const {
    post: { getMenClothers, posts },
    cart: { addItem },
  } = useStore();

  useEffect(() => {
    getMenClothers();
  }, []);

  if (posts?.state === "pending") {
    return <span>Loading...</span>;
  }

  if (posts?.state === "rejected") {
    return <span>error...</span>;
  }

  const handleAddToCart = (post: Posts) => {
    addItem(post);
  };

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Мужская одежда</h1>
      <ul className={styles.list}>
        {posts?.value.map((post) => {
          return (
            <li className={styles.item} key={post.id}>
              <img width={200} height={200} src={post.image} alt="img" />
              <p className={styles.text}>{post.title}</p>
              <div className={styles.btnContainer}>
                <span>
                  <b>Цена:</b> ${post.price}
                </span>
                <button
                  onClick={() => {
                    handleAddToCart(post);
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
