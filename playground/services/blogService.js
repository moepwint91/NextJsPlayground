import { blogs } from "../mocks/blog";

export const getBlogs = () => {
  return new Promise((resolve, reject) => {
    resolve(blogs);
  });
};
