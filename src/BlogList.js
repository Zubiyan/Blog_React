// src/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

const BlogList = () => {
  const posts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' },
    // Add more posts here
  ];

  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogList;
