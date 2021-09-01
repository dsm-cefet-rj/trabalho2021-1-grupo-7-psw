import { configureStore } from '@reduxjs/toolkit';
import eventSlice from './event/eventSlice';

const store = configureStore({
  reducer: { event: eventSlice },
});

export default store;
