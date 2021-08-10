import { createSlice } from '@reduxjs/toolkit';

export interface UserLoginState {
  isLogged: boolean;
  // setIsLogged: (e: boolean) => void;
}

const initialState: UserLoginState = {
  isLogged: false,
};

export const loggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {},
});

export default loggedSlice.reducer;
