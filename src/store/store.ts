import { configureStore } from '@reduxjs/toolkit';

// slices
import { tempSlice } from './slices';

// apis
import { tempApi } from './apis';

const store = configureStore({
  reducer: {
    tempSlice: tempSlice.reducer,
    [tempApi.reducerPath]: tempApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tempApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
