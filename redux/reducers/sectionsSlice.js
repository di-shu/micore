import { createSlice } from "@reduxjs/toolkit";
const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    activeSectionIndex: 0,
    prevSectionIndex: 0,
  },
  reducers: {
    SET_ActiveSectionIndex: (state, action) => {
      state.activeSectionIndex = action.payload;
    },
    SET_PrevSectionIndex: (state, action) => {
      state.prevSectionIndex = action.payload;
    },
  },
});

export const { SET_ActiveSectionIndex, SET_PrevSectionIndex } =
  sectionsSlice.actions;
export default sectionsSlice.reducer;
