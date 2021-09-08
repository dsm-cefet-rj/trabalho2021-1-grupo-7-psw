import { configureStore } from '@reduxjs/toolkit';
import eventSlice from './event/eventSlice';
import userSlice from './user/userSlice';

const store = configureStore({
  reducer: { event: eventSlice, user: userSlice },
});

export default store;
