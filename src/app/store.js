import { configureStore } from "@reduxjs/toolkit";
import selectedTabReducer from "../features/selectedTab/selectedTabSlice";
import selectedPlanReducer from "../features/selectedPlan/selectedPlanSlice";

export const store = configureStore({
  reducer: {
    selectedTab: selectedTabReducer,
    selectedPlan: selectedPlanReducer,
  },
});
