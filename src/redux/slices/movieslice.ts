import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface movieState {
  movieData: any;
  loading: boolean;
  error: string | null;
}

const initialState: movieState = {
  movieData: null,
  loading: false,
  error: null,
};

export const fetchAllMovies = createAsyncThunk(
  "movie/fetchAllMovies",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=84519cdc7c1e823184f65c2e62764cf2&page=1"
    );
    return response.data;
  }
);

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (key: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=7e4617e2f0f03f8fd41d9366010c4a80`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movieData = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(fetchAllMovies.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movieData = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default movieSlice.reducer;
