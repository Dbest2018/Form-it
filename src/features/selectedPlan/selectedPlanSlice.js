import { createSlice } from "@reduxjs/toolkit";

export const selectedPlanSlice = createSlice({
  name: "selectedPlan",
  initialState: {
    value: {},
  },
  reducers: {
    changePlan: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePlan } = selectedPlanSlice.actions;

export const selectedPlan = (state) => state.selectedPlan.value;

export default selectedPlanSlice.reducer;
