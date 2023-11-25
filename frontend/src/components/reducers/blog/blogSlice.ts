import { createSlice } from "@reduxjs/toolkit";
import { BlogState } from "../../../interface/blog/blogInterface";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    dialog: false,
    lstPost: [],
  } as BlogState,
  reducers: {
    onChangeModal: (state) => {
      state.dialog = !state.dialog;
    },
    onPostBlog: (state, { payload }) => {
      state.lstPost = [...state.lstPost, payload];
    },
    onResetStatesBlog: (state) => {
      state.dialog = false;
    },
  },
});

export const { onChangeModal, onPostBlog, onResetStatesBlog } =
  blogSlice.actions;
