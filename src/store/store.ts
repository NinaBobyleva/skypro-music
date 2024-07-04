import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./features/authSlice";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
// import { currentReducers } from "./features/currentTrackSlice";
import { currentReducers } from "./features/currentSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      auth: authReducers,
      current: currentReducers,
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;