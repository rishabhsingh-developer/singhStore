import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterData: "",
    category: "",
    pricefilter: "",
  },
  reducers: {
    searchFilter: (state, action) => {
      state.filterData = action.payload;
    },
    searchCategory: (state, action) => {
      state.category = action.payload;
    },
    priceFilter: (state, action) => {
      state.pricefilter = action.payload;
    },
    clearFilter: (state) => {
      state.filterData = "";
      state.category = "";
      state.pricefilter = "";
    },
  },
});

export const { searchFilter, searchCategory, priceFilter, clearFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
