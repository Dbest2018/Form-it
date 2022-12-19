import { createSlice } from "@reduxjs/toolkit";

export const selectedTabSlice = createSlice({
  name: "selectedTab",
  initialState: {
    value: "tab1",
  },
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTab } = selectedTabSlice.actions;

export const selectedTab = (state) => state.selectedTab.value;

export default selectedTabSlice.reducer;
