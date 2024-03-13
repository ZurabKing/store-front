import { http } from "./http/http";

export const fetchPosts = (category: string) => {
  return http.get(`/category/${category}`).then((response) => {
    return response.data;
  });
};

export const fetchAllPosts = () => {
  return http.get("/").then((response) => {
    return response.data;
  });
};
