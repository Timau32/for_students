import axios from "axios";

const endpoint = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const getBooks = () => endpoint.get("/books");
const postBooks = (payload) => endpoint.post("/books", payload);
const getCartItems = () => endpoint.get("/cartItems");
const postCartItems = (payload) => endpoint.post("/cartItems", payload);
const deleteItem = (payload) => endpoint.delete(`/cartItems/${payload}`);
const putCartItems = (payload) => endpoint.put(`/cartItems/${payload.id}`, payload);

const api = {
  getBooks,
  postBooks,
  getCartItems,
  postCartItems,
  deleteItem,
  putCartItems,
};

export default api;
