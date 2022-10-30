// just Copy pasted from Data1.js
import { createSlice } from "@reduxjs/toolkit";
// Here is the user data.
export const dataSlice = createSlice({
 name: "data",
 initialState: {},
 reducers: {
  // All the general operations. ( somewhat CRUD operations)
  replace: (state, action) => {
   state = action.payload;
  },
  add: (state, action) => {
   // this will also re-write!!
   let temp = state;
   for (let x in action.payload) {
    temp[x] = action.payload[x];
   }
   state = temp;
  },
  remove: (state) => {
   state = {};
  },
  removeOnly: (state, action) => {
   let temp = {};
   for (let x in state) {
    if (action.payload[x] === undefined) {
     temp[x] = state[x];
    }
   }
   state = temp;
  },
 },
});
export const { replace, add, remove, removeOnly } = dataSlice.actions;
export default dataSlice.reducer;
