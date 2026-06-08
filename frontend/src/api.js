import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

export const fetchPosts = () => API.get("/posts");
export const createPost = (post) => API.post("/posts", post);
export const updatePost = (id, post) => API.put(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const fetchComments = (postId) => API.get(`/comments/${postId}`);
export const addComment = (postId, comment) => API.post(`/comments/${postId}`, comment);
