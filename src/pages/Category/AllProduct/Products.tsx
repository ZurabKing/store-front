import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../hooks/useStore";

import { Posts } from "../../../@types/products";
import cartStore from "../../../store/cart-store";
import { useParams } from "react-router-dom";

import styles from "./Products.module.css";

export const Products: FC = observer(() => {
  const { category } = useParams();

  const {
    post: { getPosts, posts, getAllPosts },
    cart: { addItem },
  } = useStore();

  useEffect(() => {
    if (category) {
      getPosts(category);
    } else {
      getAllPosts();
    }
  }, [category]);

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

  const categoryNames: { [key: string]: string } = {
    electronics: "Электроника",
    jewelery: "Юверилные изделия",
    "men's clothing": "Мужская одежда",
    "women's clothing": "Женская одежда",
  };

  const categoryName =
    category && categoryNames[category]
      ? categoryNames[category]
      : "Все товары";

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>{categoryName}</h1>
      <ul className={styles.list}>
        {posts?.value.map((post) => {
          const isInCart = cartStore.isItemInCart(post);
          return (
            <li className={styles.item} key={post.id}>
              <img width={200} height={200} src={post.image} alt="" />
              <p className={styles.text}>{post.title}</p>
              <div className={styles.btnContainer}>
                <span>
                  <b>Цена:</b> ${post.price}
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
