import React from "react";

function PostList({ posts }) {
  return (
    <div>
      {posts.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <p><em>by {p.author?.username}</em></p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
