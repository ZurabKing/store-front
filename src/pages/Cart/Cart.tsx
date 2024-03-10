import { FC } from "react";
import { useStore } from "../../hooks/useStore";

export const Cart: FC = () => {
  const {
    cart: { getItems },
  } = useStore();

  const items = getItems();

  return (
    <div>
      <ul>
        {items?.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
