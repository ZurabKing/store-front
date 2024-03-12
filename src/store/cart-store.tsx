import { makeAutoObservable } from "mobx";
import { Posts } from "../@types/products";

class CartStore {
  items: Posts[] = [];

  constructor() {
    makeAutoObservable(this);
    this.addItem = this.addItem.bind(this);
    this.items = [];
  }

  addItem(item: Posts) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  isItemInCart(item: Posts) {
    return this.items.some((i) => i.id === item.id);
  }
}

export default new CartStore();
