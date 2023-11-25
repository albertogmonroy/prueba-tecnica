import { blogSlice } from "./blog/blogSlice";
import { uiSlice } from "./ui/uiSlice";

export const rootReducer = {
  blogSlice: blogSlice.reducer,
  uiSlice: uiSlice.reducer,
};
