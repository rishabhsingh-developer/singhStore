import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const featureProduct = createAsyncThunk("featureProduct", async () => {
  const res = await fetch("https://api.pujakaitem.com/api/products");
  return res.json();
});

export const singleData = createAsyncThunk("singleData", async (id) => {
  const res = await fetch(`https://api.pujakaitem.com/api/products/${id}`);
  return res.json();
});

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    isLoading: false,
    data: [],
    err: null,
    singleData: {},
    singleLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(featureProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(featureProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(featureProduct.rejected, (state, action) => {
      state.err = action.payload;
    });
    builder.addCase(singleData.pending, (state) => {
      state.singleLoading = true;
    });
    builder.addCase(singleData.fulfilled, (state, action) => {
      state.singleData = action.payload;
      state.singleLoading = false;
    });
    builder.addCase(singleData.rejected, (state, action) => {
      state.err = action.payload;
      state.singleLoading = false;
    });
  },
});
export default featureSlice.reducer;
