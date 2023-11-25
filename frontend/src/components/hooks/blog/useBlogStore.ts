import { Post } from "../../../interface/blog/blogInterface";
import { onChangeModal, onPostBlog } from "../../reducers/blog/blogSlice";
import { useAppDispatch, useAppSelector } from "../../store/rootStore";

export const useBlogStore = () => {
  const dispatch = useAppDispatch();
  const { dialog, lstPost } = useAppSelector((state) => state.blogSlice);
  const setModal = () => {
    dispatch(onChangeModal());
  };
  const postBlog = (data: Post) => {
    dispatch(onPostBlog(data));
  };
  return { dialog, lstPost, setModal, postBlog };
};
