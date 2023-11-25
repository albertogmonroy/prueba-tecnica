import { createSlice } from "@reduxjs/toolkit";
import { BlogState } from "../../interface/blog/blogInterface";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    dialog: false,
    lstPost: [],
    detalle: null,
    detalleNoConection: null,
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
    onLoadEntradas: (state, { payload }) => {
      state.lstPost = payload;
    },
    onLoadDetalle: (state, { payload }) => {
      state.detalle = payload;
    },
    onLoadDetalleNoConection: (state, { payload }) => {
      state.detalleNoConection = payload;
    },
  },
});

export const {
  onChangeModal,
  onLoadDetalle,
  onLoadDetalleNoConection,
  onLoadEntradas,
  onPostBlog,
  onResetStatesBlog,
} = blogSlice.actions;
