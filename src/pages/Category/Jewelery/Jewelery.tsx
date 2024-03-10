import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../hooks/useStore";

import styles from "./Jewelery.module.css";

export const Jewelery: FC = observer(() => {
  const {
    post: { getJewelery, posts },
  } = useStore();

  useEffect(() => {
    getJewelery();
  }, []);

  if (posts?.state === "pending") {
    return <span>Loading...</span>;
  }

  if (posts?.state === "rejected") {
    return <span>error...</span>;
  }

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Ювелирка</h1>
      <ul className={styles.list}>
        {posts?.value.map((post) => {
          return (
            <li className={styles.item} key={post.id}>
              <img width={200} height={200} src={post.image} alt="" />
              <p className={styles.text}>{post.title}</p>
              <div className={styles.btnContainer}>
                <span>
                  <b>Цена:</b> ${post.price}{" "}
                </span>
                <button>В корзину</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
});
