import {
  getEvents,
  deleteEvent,
  registerEvent,
  updateEvent,
} from '../../services/event_service';

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

export const createEvent = createAsyncThunk(
  'auth/CreateEvent',
  async ({ formData }) => {
    try {
      const response = await registerEvent(formData);
      const event = {
        id: response._id,
        slug: response.slug,
        name: response.name,
        type: response.type,
        quantity: response.quantity,
        date: response.date,
        price: response.date,
        images: response.images,
        description: response.description,
      };
      return { event };
    } catch (error) {
      throw error;
    }
  }
);

export const upEvent = createAsyncThunk(
  'auth/updateEvent',
  async ({ id, slug, name, type, quantity, date, price, description }) => {
    try {
      const response = await updateEvent(
        slug,
        name,
        type,
        quantity,
        date,
        price,
        description
      );

      const obj = {
        slug: response.updatedEvent.slug,
        name: response.updatedEvent.name,
        type: response.updatedEvent.type,
        quantity: response.updatedEvent.quantity,
        date: response.updatedEvent.date,
        price: response.updatedEvent.date,
        description: response.updatedEvent.description,
      };
      return { id, changes: obj };
    } catch (error) {
      throw error;
    }
  }
);

export const delEvent = createAsyncThunk(
  'auth/delEvent',
  async ({ slug, id }) => {
    try {
      await deleteEvent(slug);
      return id;
    } catch (error) {
      throw error;
    }
  }
);

export const eventAdapter = createEntityAdapter({
  selectId: (entity) => entity._id,
});

const initialState = { event: [], error: null, status: null };

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    // setAllEvents: eventAdapter.setAll,
    removeEvent: eventAdapter.removeOne,
    setManyEvent: eventAdapter.addMany,
    updateEvents: eventAdapter.updateMany,
  },
  extraReducers: {
    [fetchEvent.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchEvent.fulfilled]: (state, action) => {
      state.status = 'loaded';
      eventAdapter.setAll(state, action.payload.events);
    },
    [fetchEvent.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [createEvent.pending]: (state, action) => {
      state.status = 'loading';
    },
    [createEvent.fulfilled]: (state, action) => {
      state.status = 'loaded';
      eventAdapter.addOne(state, action.payload.event);
    },
    [upEvent.pending]: (state, action) => {
      state.status = 'loading';
    },
    [upEvent.fulfilled]: (state, action) => {
      state.status = 'loaded';
      eventAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload.changes,
      });
    },
    [delEvent.pending]: (state, action) => {
      state.status = 'loading';
    },
    [delEvent.fulfilled]: (state, action) => {
      state.status = 'loaded';
      eventAdapter.removeOne(state, action.payload);
    },
  },
});

export const { removeEvent, setManyEvent, updateEvents } = eventSlice.actions;

export default eventSlice.reducer;
