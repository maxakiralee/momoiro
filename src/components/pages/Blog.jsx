import React from 'react';

import PostComp from '../BlogComp';
import Posts from '../Posts';

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
  return (
    <div>
      <h1>Blog Page</h1>
        <PostComp></PostComp>
          <h1>Posts</h1>
        
          {postsArray.map(post => {
            return (
              <div style={{ marginBottom: '3rem' }}>
                <Posts
                  name={post.name}
                  email={post.email}
                  title={post.title}
                  entry={post.entry}
                />
              </div>
            );
          })}

    </div>
  );
}

export default Blog;
