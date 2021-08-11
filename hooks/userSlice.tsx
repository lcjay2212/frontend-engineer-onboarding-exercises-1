import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { token } from '@utils/getAuthToken';

export interface UserLoginState {
  isLogged: boolean;
}

const initialState: UserLoginState = {
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserLoginState, action: PayloadAction<string>) => {
      state.isLogged = true;
      token.getAuthToken(action.payload);
    },
    logout: (state: UserLoginState) => {
      state.isLogged = false;
      token.removeAuthToken();
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
