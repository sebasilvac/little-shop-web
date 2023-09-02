import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count--;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      if(action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
    initCounterState: (state, action: PayloadAction<number>) => {
      if(state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    }
  },
});

export const { increment, decrement, setCounter, initCounterState } = counter.actions;
export default counter.reducer;
