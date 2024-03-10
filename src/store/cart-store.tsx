import { makeAutoObservable } from "mobx";
import { Posts } from "../@types/products";

class CartStore {
  items: Posts[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item: Posts) {
    this.items.push(item);
    console.log(item);
  }

  getItems() {
    return this.items;
  }
}

export default new CartStore();
