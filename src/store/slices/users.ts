import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userService as Service } from '@/services';
import { IUserProfile } from '@/shared/interfaces';

interface UserState {
  profile: IUserProfile;
  store: string;
}

const initialState: UserState = {
  profile: {} as IUserProfile,
  store: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getProfile.fulfilled,
        (state, action: { type: string; payload: any }) => {
          state.profile = action.payload;
        },
      );
  },
  reducers: {
    logoutUser(state, action) {
      state = initialState;
    },
  },
});

export const getProfile = createAsyncThunk('users/getProfile', async () => {
  return await Service.getProfile();
});

export const {
  logoutUser,
} = userSlice.actions;
export default userSlice.reducer;
