import { configureStore } from "@reduxjs/toolkit";
import destinationsSlice from "../features/destinations/destinationsSlice";
import tourSlice from "../features/tours/toursSlice";
import pageActionSlice from "../features/pageAction/pageActionSlice";

export const store = configureStore({
  reducer: {
    destinationsSlice,
    tourSlice,
    pageActionSlice,
  },
});