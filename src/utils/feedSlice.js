import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    setFeed: (state, action) => {
      return action.payload;
    },
    removeFromFeed: (state, action) => {
      return state.filter((user) => user._id !== action.payload._id);
    },
  },
});

export const { setFeed } = feedSlice.actions;
export default feedSlice.reducer;
