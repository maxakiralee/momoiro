import React from 'react';
import { useState, useEffect } from 'react';

import PostComp from '../components/BlogComp';
import Posts from '../components/Posts';
import BlogButton from '../components/BlogButton';
import Footer from '../components/Footer';

import styles from '../styling/Blog.module.css'

export const useFetch = (url) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5174/api/blog')
      .then(response => response.json())
      .then(data => setBlogs(data.reverse()))
      .catch((error) => console.error('Error: ', error))
  }, [])

  return blogs;
}

function Blog() {
  const blogs = useFetch('http://localhost:5174/api/blog')

  return (
    <div>
      <PostComp />
      <h1 className={styles.margin1}></h1>
      <BlogButton></BlogButton>
      <h1 className={styles.margin2}></h1>

      <div className={styles.container}>
        {blogs.map((blog) => {
          return (
            <div className={styles.post}>
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
      <Footer />
    </div>
  );
}

export default Blog;
