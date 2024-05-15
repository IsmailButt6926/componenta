import { configureStore } from "@reduxjs/toolkit";
import StepReducer from "../features/StepSlice";
export const store = configureStore({
  reducer: StepReducer,
});
