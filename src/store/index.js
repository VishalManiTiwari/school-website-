import { configureStore } from '@reduxjs/toolkit'; 
import CartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
  devTools: true,
});

export default store; 
