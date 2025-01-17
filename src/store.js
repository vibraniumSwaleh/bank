import accountSlice from './features/accounts/accountSlice';
import customerSlice from './features/customers/customerSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: customerSlice,
  },
});

export default store;
