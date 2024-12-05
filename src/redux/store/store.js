import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "../slice/Feature";
import addToCardReducer from "../slice/addToCard";
import filterReducer from "../slice/Filter";
export const store = configureStore({
  reducer: {
    feature: featureReducer,
    filter: filterReducer,
    addtocard: addToCardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check
    }),
});
