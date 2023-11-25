import { onChangeModeOnline } from "../../reducers/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/rootStore";

export const useUiStore = () => {
  const dispatch = useAppDispatch();
  const { isOnline } = useAppSelector((state) => state.uiSlice);
  const changeModeConection = (pOnline: boolean) => {
    dispatch(onChangeModeOnline(pOnline));
  };

  return { isOnline, changeModeConection };
};
