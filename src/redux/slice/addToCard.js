import { createSlice } from "@reduxjs/toolkit";

const addToCardSlice = createSlice({
  name: "addtocard",
  initialState: {
    card: [],
  },
  reducers: {
    addtocard: (state, action) => {
      const a = action.payload.card.find(
        (cartitem) => cartitem.id === action.payload.product.id
      );
      if (a) {
        state.card = state.card.map((i) =>
          i.id === action.payload.product.id
            ? { ...i, quantiy: i.quantiy + 1 }
            : i
        );
      } else {
        state.card = [...state.card, { ...action.payload.product, quantiy: 1 }];
      }
    },
    increment: (state, action) => {
      const index = state.card.findIndex((item) => item.id === action.payload);
      if (state.card[index].quantiy >= 1) {
        state.card[index].quantiy += 1;
      }
    },
    decrement: (state, action) => {
      const index = state.card.findIndex((item) => item.id === action.payload);
      if (state.card[index].quantiy > 1) {
        state.card[index].quantiy -= 1;
      }
    },
    remove: (state, action) => {
      state.card = state.card.filter((i) => i.id !== action.payload);
    },
  },
});

export default addToCardSlice.reducer;
export const { addtocard, increment, remove, decrement } =
  addToCardSlice.actions;
