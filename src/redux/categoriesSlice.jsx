import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jokeCategories: [],
  keyword: "",
  show: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setJokeCategories: (state, action) => {
      state.jokeCategories = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setShow: (state) => {
      state.show = !state.show;
    },
  },
});

export const { setJokeCategories, setKeyword, setShow } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
