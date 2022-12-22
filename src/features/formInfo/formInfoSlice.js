import { createSlice } from "@reduxjs/toolkit";

export const formInfoSlice = createSlice({
  name: "formInfo",
  initialState: {
    value: {
      name: "",
      email: "",
      phone: "",
      error: false,
    },
  },
  reducers: {
    addName: (state, action) => {
      state.value.name = action.payload;
    },
    addEmail: (state, action) => {
      state.value.email = action.payload;
    },
    addPhone: (state, action) => {
      state.value.phone = action.payload;
    },
    setError: (state, action) => {
      state.value.error = action.payload;
    },
  },
});

export const { addName, addEmail, addPhone, setError } = formInfoSlice.actions;

export const formInfo = (state) => state.formInfo.value;

export default formInfoSlice.reducer;
