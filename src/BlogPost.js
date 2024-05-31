// src/BlogPost.js
import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content }) => {
  return (
    <div className="blog-post">
      <img src="react.png"></img>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
