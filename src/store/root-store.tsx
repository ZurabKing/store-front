import cartStore from "./cart-store";
import PostStore from "./posts-store";

class RootStore {
  post = PostStore;
  cart = cartStore;
}

export default RootStore;
