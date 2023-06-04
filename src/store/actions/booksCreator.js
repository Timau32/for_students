import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// const fetchBooks = () => async (dispatch) => {
//   dispatch(setLoading());
//   try {
//     const reponse = await fetch("http://localhost:5000/books");
//     const data = await reponse.json();
//     dispatch(setBooks(data));
//   } catch (err) {
//     dispatch(setError(err.message));
//   }
// };

const fetchBooks = createAsyncThunk("books/fetchAll", async (payload, thunkApi) => {
  try {
    const response = await api.getBooks();;
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});


export default fetchBooks;
