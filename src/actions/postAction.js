import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "./types";
import axios from "axios";

// get all posts from jsonPlaceHolder
export const getAllPosts = () => async (dispatch) => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: GET_ALL_POSTS,
    payload: data.data,
  });
};

// get a post
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

// create a post
export const createPost = (post) => async (dispatch) => {
  const data = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );

  dispatch({
    type: CREATE_POST,
    payload: data.data,
  });
};

// update a post
export const updatePost = (post) => async (dispatch) => {
  const update = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    post
  );
  dispatch({
    type: UPDATE_POST,
    payload: update.data,
  });
};

// delete a post
export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};
