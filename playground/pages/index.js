import React, { useEffect, useState } from "react";
import BlogItem from "../components/commons/BlogItem";
import { getBlogs } from "../services/blogService";

function Home({ blogs }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-sm-4 my-2 d-flex justify-content-center">
            <BlogItem
              key={blog.id}
              coverPhoto={blog.coverPhoto}
              blogTitle={blog.blogTitle}
              blogContent={blog.blogShortDescription}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  let blogs = [];
  blogs = await getBlogs();

  return {
    props: { blogs }, // will be passed to the page component as props
  };
}
