import { makeAutoObservable } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { Posts } from "../@types/products";
import axios from "axios";

const URL = "https://fakestoreapi.com/products/";

class PostsStore {
  posts?: IPromiseBasedObservable<Posts[]>;

  constructor() {
    makeAutoObservable(this);
  }

  getAllProducts = () => {
    this.posts = fromPromise(
      axios.get(`${URL}`).then((response) => {
        return response.data;
      })
    );
  };

  getElectronics = () => {
    this.posts = fromPromise(
      axios.get(`${URL}category/electronics`).then((response) => {
        return response.data;
      })
    );
  };

  getJewelery = () => {
    this.posts = fromPromise(
      axios.get(`${URL}category/jewelery`).then((response) => {
        return response.data;
      })
    );
  };

  getMenClothers = () => {
    this.posts = fromPromise(
      axios.get(`${URL}category/men's clothing`).then((response) => {
        return response.data;
      })
    );
  };

  getWomenClothers = () => {
    this.posts = fromPromise(
      axios.get(`${URL}category/women's clothing`).then((response) => {
        return response.data;
      })
    );
  };
}

export default new PostsStore();
