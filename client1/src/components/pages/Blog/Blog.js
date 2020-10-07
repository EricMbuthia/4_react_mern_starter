import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  });

  function fetchPosts() {
    console.log('TODO: Fetching data from API');
    fetch('/api/mongodb/blogposts/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        setBlogPosts(data);
      });

  }

  function deleteArticle(documentId) {
    console.log('TODO: Sending DELETE for', documentId);
    // Do the DELETE, using "?_id=" to specify which document we are deleting
    const fetchOptions = { method: 'DELETE' };
    fetch('/api/mongodb/blogposts/?_id=' + documentId, fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call function to refresh data
        fetchPosts();
      });


  }

  function voteArticle(article) {
    console.log('TODO: Need to use PUT to upvote', article);
    const formData = {
      voteCount: 1,
    };

    // Do the PUT, using "?_id=" to specify which document we are affecting
    const documentId = article._id;
    fetch('/api/mongodb/blogposts/?_id=' + documentId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call function to refresh data
        fetchPosts();
      });

  }


  return (
    <div className="Blog">
      <h1>Blog</h1>
      {
        blogPosts.map((post, index) => (
          <div className="Blog-article" key={post._id}>

            <h1>{post.title}</h1>
            <p>{post.text}</p>

            <div className="Blog-articleActions">
              <div onClick={() => deleteArticle(post._id)}>
                <span alt="delete this">🗑</span>
              </div>
              <div onClick={() => voteArticle(post)}>
                <span alt="upvote this">⬆ {post.voteCount}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Blog;

