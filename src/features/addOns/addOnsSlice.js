import { createSlice } from "@reduxjs/toolkit";

export const addOnsSlice = createSlice({
  name: "addOns",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const { add, remove } = addOnsSlice.actions;

export const addOns = (state) => state.addOns.value;

export default addOnsSlice.reducer;
