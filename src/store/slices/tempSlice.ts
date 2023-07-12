import { createSlice } from '@reduxjs/toolkit';

type TempState = {
  boolean: boolean;
};

const initialState: TempState = {
  boolean: false,
};

const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    on: state => {
      state.boolean = true;
    },
    off: state => {
      state.boolean = false;
    },
  },
});

export default tempSlice;
export const { on, off } = tempSlice.actions;
