import { getUser } from '../../services/login_service';
import { registerCompany, registerUser } from '../../services/register';

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async ({ username, password }) => {
    try {
      const response = await getUser(username, password);
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response));
        return response.user;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const createAdminUser = createAsyncThunk(
  'auth/createAdminUser',
  async ({ name, email, document, password, confirmPassword }) => {
    try {
      const response = await registerUser(
        name,
        email,
        document,
        password,
        confirmPassword
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const createUser = createAsyncThunk(
  'auth/createUser',
  async ({ name, email, document, password }) => {
    try {
      const response = await registerUser(name, email, document, password);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const userAdapter = createEntityAdapter();

const initialState = { error: null, status: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setAllEvents: eventAdapter.setAll,
    removeUser: userAdapter.removeOne,
    setManyUser: userAdapter.addMany,
    updateUser: userAdapter.updateOne,
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'loaded';
      userAdapter.setAll(state, [action.payload]);
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [createAdminUser.fulfilled]: (state, action) => {
      state.status = 'saved';
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = 'saved';
    },
  },
});

export const { removeUser, setManyUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
