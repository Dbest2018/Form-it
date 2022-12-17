import { createSlice } from "@reduxjs/toolkit";

export const selectedPlanSlice = createSlice({
  name: "selectedTab",
  initialState: {
    value: {
      name: "Arcade",
      type: "monthly",
      price: "$9/mo",
    },
  },
  reducers: {
    changePlan: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePlan } = selectedPlanSlice.actions;

export const selectCount = (state) => state.selectedTab.value;

export default selectedPlanSlice.reducer;
