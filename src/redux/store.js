import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices.js/movieSlice";

export const store = configureStore({
    reducer: movieSlice
})