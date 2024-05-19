import React from 'react';
import { useState, useEffect } from 'react';

import PostComp from '../components/BlogComp';
import Posts from '../components/Posts';

export const useFetch = (url) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5174/api/blog')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch((error) => console.error('Error: ', error))
  }, [])

  return blogs;

}

const postsArray = [
  {
    name: "haehdsa",
    email: "gsadhgsadhsda",
    title: "sadfsadfsadf",
    entry: "awefasdfdsaf",
  },
  {
    name: "Michael",
    email: "mac@gmail",
    title: "sdfasdfasdf",
    entry: "Maui on fire",
  },
];

function Blog() {
  const blogs = useFetch('http://localhost:5174/api/blog')
  return (
    <div>
      <h1>Blog Page</h1>
        <PostComp></PostComp>
          <h1>Posts</h1>
        
          {blogs.map((blog) => {
            return (
              <div style={{ marginBottom: '3rem' }}>
                <Posts
                  name={blog.name}
                  email={blog.email}
                  title={blog.title}
                  entry={blog.post}
                />
              </div>
            );
          })}

    </div>
  );
}

export default Blog;
