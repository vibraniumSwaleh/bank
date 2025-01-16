import accountSlice from './features/accounts/accountSlice';
import reducerCustomer from './features/customers/customerSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: reducerCustomer,
  },
});

export default store;
