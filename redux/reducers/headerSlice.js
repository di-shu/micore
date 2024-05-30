import { createSlice } from "@reduxjs/toolkit";
const headerSlice = createSlice({
  name: "header",
  initialState: {
    isAlternativeNavigationEnabled: false,
  },
  reducers: {
    SET_IsAlternativeNavigationEnabled: (state, action) => {
      state.isAlternativeNavigationEnabled = action.payload;
    },
  },
});

export const { SET_IsAlternativeNavigationEnabled } = headerSlice.actions;
export default headerSlice.reducer;
