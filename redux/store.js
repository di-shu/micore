import { configureStore, current } from "@reduxjs/toolkit";
import headerReducer from "./reducers/headerSlice";
import sectionsReducer from "./reducers/sectionsSlice";
export const makeStore = () =>
  configureStore({
    reducer: {
      header: headerReducer,
      sections: sectionsReducer,
    },
  });
