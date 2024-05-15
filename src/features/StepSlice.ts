import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
};

export const StepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    stepUp: (state) => {
      state.currentStep += 1;
    },
    stepDown: (state) => {
      //   console.log("state", state.step.currentStep);
      state.currentStep -= 1;
    },
  },
});

export const { stepUp, stepDown } = StepSlice.actions;
export default StepSlice.reducer;
