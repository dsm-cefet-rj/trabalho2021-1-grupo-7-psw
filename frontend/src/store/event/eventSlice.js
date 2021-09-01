import { getEvents } from '../../services/event_service';

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchEvent = createAsyncThunk('auth/fetchEvent', async () => {
  try {
    const response = await getEvents();
    return response;
  } catch (error) {
    throw error;
  }
});

export const eventAdapter = createEntityAdapter({
  selectId: (event) => event.id,
});

const initialState = { event: [], loading: false, error: null, status: null };

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setAllEvents: eventAdapter.setAll,
    removeEvent: eventAdapter.removeOne,
    setManyEvent: eventAdapter.addMany,
    updateEvent: eventAdapter.updateOne,
  },
  extraReducers: {
    [fetchEvent.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchEvent.fulfilled]: (state, action) => {
      state.event = action.payload.events;
      state.loading = false;
    },
    [fetchEvent.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { setAllEvents, removeEvent, setManyEvent, updateEvent } =
  eventSlice.actions;

export default eventSlice.reducer;
