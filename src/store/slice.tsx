import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { countWords, groupComments } from "../utils";
import { CommentType } from "../types";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );

      const processedComments = response.data.map((comment: CommentType) => ({
        ...comment,
        count: countWords(comment.body),
      }));

      return groupComments(processedComments);
    } catch (error) {
      throw Error("Failed to fetch comments");
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    groupedComments: {},
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groupedComments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default commentSlice.reducer;
