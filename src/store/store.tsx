import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slice";

const store = configureStore({ reducer: { comments: commentReducer } });

export default store;
