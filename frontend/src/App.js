import React, { useState, useEffect } from "react";
import { fetchPosts, createPost } from "./api";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(res => setPosts(res.data));
  }, []);

  const addPost = async (post) => {
    const res = await createPost(post);
    setPosts([...posts, res.data]);
  };

  return (
    <div>
      <h1>Blog Platform</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
