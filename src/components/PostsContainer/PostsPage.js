//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [posts, newPosts] = useState();

  return (
    <div className="posts-container-wrapper">
      {posts.map(post => (
        <Post key={post.id} post={post} propTwo ={true} propThree={newPosts}/>
      ))}
    </div>
  );
};

export default PostsPage;
