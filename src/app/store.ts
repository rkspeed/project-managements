import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
