import { configureStore } from "@reduxjs/toolkit";
// importing various Storage Spaces
import data1Reducer from "./Storage Space A/Data1";
import data2Reducer from "./Storage Space B/Data2";
export const store = configureStore({
 reducer: {
  data1: data1Reducer,
  data2: data2Reducer,
 },
});
