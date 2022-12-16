import { configureStore } from "@reduxjs/toolkit";
import selectedTabReducer from "../features/selectedTab/selectedTabSlice";

export const store = configureStore({
  reducer: {
    selectedTab: selectedTabReducer,
  },
});
