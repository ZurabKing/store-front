import cartStore from "./cart-store";
import PostStore from "./posts-store";
import productRegistStore from "./productRegist-store";

class RootStore {
  post = PostStore;
  cart = cartStore;
  productRegist = productRegistStore;
}

export const store = new RootStore();
