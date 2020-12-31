import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { getAllPosts } from "../../actions/postAction";
import { useSelector, useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
