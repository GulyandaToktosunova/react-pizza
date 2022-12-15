import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryid: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryid(state, action) {
      state.categoryid = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryid, setSort } = filterSlice.actions;

export default filterSlice.reducer;
