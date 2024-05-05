import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('fetchMovies', async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=spiderman');
    const result = await response.json();
    return result.sort((a, b) => b.score - a.score).slice(0, 10);
});

const initialState = {
    movieData: [],
    isLoading: false,
    isError: false,
    message: ''
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movieData = action.payload;
            // state.message = action.payload
            state.isLoading = false;
        });
        builder.addCase(fetchMovies.rejected, (state) => {
            state.isError = true;
            state.message = 'Something went wrong!'
        })
    }
})

export const { } = movieSlice.actions;
export default movieSlice.reducer;