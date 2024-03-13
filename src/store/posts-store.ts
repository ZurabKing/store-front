import { makeAutoObservable } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { Posts } from "../@types/products";

import { fetchAllPosts, fetchPosts } from "../api/posts";

class PostsStore {
  posts?: IPromiseBasedObservable<Posts[]>;

  constructor() {
    makeAutoObservable(this);
  }

  getPosts = (category: string) => {
    this.posts = fromPromise(fetchPosts(category));
  };

  getAllPosts = () => {
    this.posts = fromPromise(fetchAllPosts());
  };
}

export default new PostsStore();
