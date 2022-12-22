import { configureStore } from "@reduxjs/toolkit";
import selectedTabReducer from "../features/selectedTab/selectedTabSlice";
import selectedPlanReducer from "../features/selectedPlan/selectedPlanSlice";
import addOnsReducer from "../features/addOns/addOnsSlice";
import formInfoReducer from "../features/formInfo/formInfoSlice";

export const store = configureStore({
  reducer: {
    selectedTab: selectedTabReducer,
    selectedPlan: selectedPlanReducer,
    addOns: addOnsReducer,
    formInfo: formInfoReducer,
  },
});
