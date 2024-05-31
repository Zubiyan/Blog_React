import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

const BlogList = () => {
  const posts = [
    { 
      title: 'First Post',
      content: 'This is the content of the first post.',
      image: 'react.png'
    },
    { 
      title: 'Second Post',
      content: 'This is the content of the second post.',
      image: 'angular.png'
    },
    // Add more posts here
  ];

  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogPost 
          key={index} 
          title={post.title} 
          content={post.content} 
          imageUrl={post.imageUrl} // Pass imageUrl as a prop
        />
      ))}
    </div>
  );
};

export default BlogList;
