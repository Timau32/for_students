import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./reducers/booksSlice";
import cartReducer from "./reducers/cartSlice";

const rootReducer = combineReducers({
  booksReducer,
  cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
