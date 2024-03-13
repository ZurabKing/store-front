import { makeAutoObservable } from "mobx";
import { Posts } from "../@types/products";

class ProductRegist {
  purchasedItems: Posts[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addPurchasedItem(item: Posts) {
    this.purchasedItems.push(item);
  }

  getPurchasedItems() {
    return this.purchasedItems;
  }
}

export default new ProductRegist();
